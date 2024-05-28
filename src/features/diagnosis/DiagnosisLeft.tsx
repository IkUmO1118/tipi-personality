import Logo from "@/ui/Logo";
import { questionsData } from "@/data/data-questions";

type RegisterLeftProps = {
  index: number;
};

function DiagnosisLeft({ index }: RegisterLeftProps) {
  return (
    <div className="grid h-full grid-rows-[1fr_4fr_auto_4fr_1fr] rounded-l-lg bg-neutral-900 px-10 py-7">
      <Logo mode="dark" />

      <p className="mb-3 self-end text-2xl font-medium text-neutral-300">
        step {questionsData[index].questionNumber + 1}/10
      </p>
      <h2 className="self-start text-4xl font-bold text-white">
        {questionsData[index].questionText}
      </h2>
      <div>&nbsp;</div>
      <div>&nbsp;</div>
    </div>
  );
}

export default DiagnosisLeft;
