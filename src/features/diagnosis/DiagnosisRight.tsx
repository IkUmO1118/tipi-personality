import { Button } from "@/components/ui/button";
import { useScoresContext } from "@/contexts/scores-context";
import useDiagnosisForm from "@/hooks/useDiagnosisForm";
import { RadioButtonSizes, calcKarteScore } from "@/utils/helper";
import { FormEvent, useEffect } from "react";
import DiagnosisRadioGroup from "./DiagnosisRadioGroup";
import { useCreateKarte } from "../kartes/useCreatekarte";
import Spinner from "@/ui/Spinner";
import { useGetSession, useRemoveSession } from "@/hooks/useSessions";
import {
  useGetLocalStorage,
  useRemoveLocalStorage,
} from "@/hooks/useLocalStorage";

interface DiagnosisRightProps {
  onNext: () => void;
  onPrev: () => void;
  questionNumber: number;
}

function DiagnosisRight({
  onNext,
  onPrev,
  questionNumber,
}: DiagnosisRightProps) {
  const { selectedValue, setSelectedValue, handleSubmit } =
    useDiagnosisForm(questionNumber);
  const sizes = RadioButtonSizes;
  const { scores, email } = useScoresContext();
  const { createKarte, isCreating } = useCreateKarte();

  // scoresの長さが10になる...全ての問題を回答した
  // react query, supabaseApiを用いて、supabaseに登録
  useEffect(() => {
    if (scores.length === 10) {
      const calcedKarteScore = calcKarteScore(scores, email);

      // diagnosis-resultもしくわkartes-dataが存在した際、まずはremoveする
      if (
        useGetSession("diagnosis-result") ||
        useGetLocalStorage("kartes-data")
      ) {
        useRemoveLocalStorage("kartes-data");
        useRemoveSession("diagnosis-result");
      }

      createKarte(calcedKarteScore);
    }

    return () => {
      console.log("Cleanup: reset the charting process");
    };
  }, [scores]);

  function handleNext(e: FormEvent, isLast: boolean = false) {
    handleSubmit(e);
    setSelectedValue(null);
    if (!isLast) onNext();
  }

  function handlePrev(e: FormEvent) {
    handleSubmit(e);
    setSelectedValue(null);
    onPrev();
  }

  if (isCreating) {
    return <Spinner />;
  }

  return (
    <div className=" grid h-full grid-rows-[1fr_4rem_1fr] gap-5 p-28">
      <div className="flex items-center justify-between self-end font-mono text-xl font-semibold text-neutral-800">
        <h4>同意しない</h4>
        <h4>同意する</h4>
      </div>
      <DiagnosisRadioGroup
        sizes={sizes}
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <div className="mt-4 flex justify-center gap-20">
        <Button
          size="lg"
          variant="outline"
          onClick={handlePrev}
          disabled={questionNumber === 0}
        >
          戻る
        </Button>
        {questionNumber < 9 && (
          <Button
            size="lg"
            onClick={(e) => handleNext(e)}
            disabled={selectedValue === null}
          >
            次へ
          </Button>
        )}
        {questionNumber === 9 && (
          <Button
            size="lg"
            // 以下のonClickには、スコアすべてを
            onClick={(e) => handleNext(e, true)}
            disabled={selectedValue === null}
          >
            終了
          </Button>
        )}
      </div>
    </div>
  );
}

export default DiagnosisRight;
