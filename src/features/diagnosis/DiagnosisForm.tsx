import { Button } from "@/components/ui/button";
import useDiagnosisForm from "@/hooks/useDiagnosisForm";
import Radio from "@/ui/Radio";
import { RadioButtonSizes } from "@/utils/helper";
import { FormEvent } from "react";

type DiagnosisFormProps = {
  onNext: () => void;
  onPrev: () => void;
  questionNumber: number;
};

function DiagnosisForm({ onNext, onPrev, questionNumber }: DiagnosisFormProps) {
  const { selectedValue, setSelectedValue, handleSubmit } =
    useDiagnosisForm(questionNumber);

  const sizes = RadioButtonSizes;

  function handleNext(e: FormEvent) {
    handleSubmit(e);
    setSelectedValue(null);
    onNext();
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
            onClick={handleNext}
            disabled={selectedValue === null}
          >
            次へ
          </Button>
        )}
        {questionNumber === 9 && (
          <Button
            size="lg"
            onClick={handleNext}
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
