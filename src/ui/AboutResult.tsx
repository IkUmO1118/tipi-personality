import { Button } from "@/components/ui/button";
import personalityImage from "/内向的.svg";
import Progress from "./Progress";
import { useRemoveSession } from "@/hooks/useSessions";

function AboutResult() {
  return (
    <div className="h-full bg-sky-200 py-10">
      <section className="mx-auto flex h-full  w-8/12 flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
        <div className="flex h-44 items-center justify-center bg-cyan-600 text-2xl font-bold text-white">
          <h2 className="mb-4">エネルギー</h2>
        </div>
        <div className="flex h-full gap-16 px-20">
          <img
            src={personalityImage}
            alt="女性が丘の上で、本を読んでいる"
            className=" w-4/12"
          />
          <div className="my-auto flex w-full flex-col gap-6">
            <h2 className="text-4xl font-medium text-neutral-800">
              58% 内向型
            </h2>
            <div className="flex h-20 flex-col">
              <Progress value={58} color="cyan-600" />
              <div className="mt-3 flex justify-between text-xl font-bold">
                <div>42%</div>
                <div className="text-cyan-600">58%</div>
              </div>
              <div className="flex justify-between text-sm font-bold">
                <div className="text-neutral-500">計画型</div>
                <div className="text-cyan-600">探索型</div>
              </div>
            </div>
            <p className=" text-lg  text-neutral-800">
              誠実性のスコアが高い人には「計画性がある」「規律正しい」「注意深い」「忍耐強い」「賢明」「非衝動的」などの特性が見られます。また勉強や仕事の成績高い傾向があり、生涯を通じて健康にいい習慣(歯磨き・運動など)を保つ傾向があります。
            </p>
          </div>
        </div>
        <div className="grid min-h-28 grid-cols-[1fr_6fr_1fr] items-center border-t border-neutral-300 px-7 py-7">
          <div className="flex items-center">
            <span className="text-cyan-600">&larr;</span>
            <Button
              variant="link"
              size="sm"
              className="justify-start text-cyan-700"
            >
              戻る
            </Button>
          </div>
          <ul className="flex items-center justify-center gap-2 text-[8px]">
            <li>●</li>
            <li>○</li>
            <li>○</li>
            <li>○</li>
            <li>○</li>
            <li>○</li>
          </ul>
          <Button
            size="lg"
            variant="destructive"
            onClick={() => useRemoveSession({ key: "result-diagnosis" })}
          >
            続ける
          </Button>
        </div>
      </section>
    </div>
  );
}

export default AboutResult;
