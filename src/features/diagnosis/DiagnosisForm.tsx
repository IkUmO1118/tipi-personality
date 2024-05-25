import { Button } from "@/components/ui/button";
import { useScoresContext } from "@/contexts/scores-context";
import useDiagnosisForm from "@/hooks/useDiagnosisForm";
import { useSetSession } from "@/hooks/useSessions";
import Radio from "@/ui/Radio";
import { RadioButtonSizes } from "@/utils/helper";
import { FormEvent, useEffect } from "react";

type DiagnosisFormProps = {
  onNext: () => void;
  onPrev: () => void;
  questionNumber: number;
};

function DiagnosisForm({ onNext, onPrev, questionNumber }: DiagnosisFormProps) {
  const { selectedValue, setSelectedValue, handleSubmit } =
    useDiagnosisForm(questionNumber);
  const sizes = RadioButtonSizes;
  const { scores } = useScoresContext();

  // scoresの長さが10になる...全ての問題を回答した
  // 今はsessionStorageに入れているが、supabaseにデータを入れる流れが必要
  useEffect(() => {
    if (scores.length === 10) {
      useSetSession({
        key: "personalityDiagnosisResult",
        value: `${JSON.stringify(scores)}`,
      });
    }
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

  return (
    <form className=" grid h-full grid-rows-[1fr_4rem_1fr] gap-5 p-28">
      <div className="flex items-center justify-between self-end font-mono text-xl font-semibold text-neutral-800">
        <h4>同意する</h4>
        <h4>同意しない</h4>
      </div>
      <ul className="flex items-center justify-center gap-4">
        {sizes.map((size, index) => (
          <Radio
            key={index}
            index={index + 1}
            style={`${size} hover:bg-neutral-400 peer-checked:bg-neutral-400 border-neutral-400`}
            variant="diagnosis"
            onChange={() => setSelectedValue(index + 1)}
            checked={selectedValue === index + 1}
          />
        ))}
      </ul>
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
    </form>
  );
}

export default DiagnosisForm;
