import { Button } from "@/components/ui/button";

function DiagnosisPage() {
  return (
    <div className=" grid h-full grid-rows-[1fr_4rem_1fr] gap-5 p-28">
      <div className="flex items-center justify-between self-end px-4 text-xl font-medium text-neutral-800">
        <h4>同意する</h4>
        <h4>同意しない</h4>
      </div>
      <ul className="flex items-center justify-center gap-5">
        <li className="h-16 w-16 rounded-full border-2 border-neutral-400 duration-200 hover:bg-neutral-400"></li>
        <li className="h-14 w-14 rounded-full border-2 border-neutral-400 duration-200 hover:bg-neutral-400"></li>
        <li className="h-10 w-10 rounded-full border-2 border-neutral-400 duration-200 hover:bg-neutral-400"></li>
        <li className="h-7 w-7 rounded-full border-2 border-neutral-400 duration-200 hover:bg-neutral-400"></li>
        <li className="h-10 w-10 rounded-full border-2 border-neutral-400 duration-200 hover:bg-neutral-400"></li>
        <li className="h-14 w-14 rounded-full border-2 border-neutral-400 duration-200 hover:bg-neutral-400"></li>
        <li className="h-16 w-16 rounded-full border-2 border-neutral-400 duration-200 hover:bg-neutral-400"></li>
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

export default DiagnosisPage;
