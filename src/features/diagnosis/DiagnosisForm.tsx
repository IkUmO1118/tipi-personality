import { Button } from "@/components/ui/button";
import Radio from "@/ui/Radio";

function DiagnosisForm() {
  return (
    <div className=" grid h-full grid-rows-[1fr_4rem_1fr] gap-5 p-28">
      <div className="flex items-center justify-between self-end font-mono text-xl font-semibold text-neutral-800">
        <h4>同意する</h4>
        <h4>同意しない</h4>
      </div>
      <ul className="flex items-center justify-center gap-4">
        <Radio index={1} size={20} variant="diagnosis" color="neutral-400" />
        <Radio index={2} size={16} variant="diagnosis" color="neutral-400" />
        <Radio index={3} size={12} variant="diagnosis" color="neutral-400" />
        <Radio index={4} size={8} variant="diagnosis" color="neutral-400" />
        <Radio index={5} size={12} variant="diagnosis" color="neutral-400" />
        <Radio index={6} size={16} variant="diagnosis" color="neutral-400" />
        <Radio index={7} size={20} variant="diagnosis" color="neutral-400" />
      </ul>
      <div className="mt-4 flex justify-center gap-20">
        <Button size="lg" variant="outline">
          戻る
        </Button>
        <Button size="lg">次へ</Button>
      </div>
    </div>
  );
}

export default DiagnosisForm;
