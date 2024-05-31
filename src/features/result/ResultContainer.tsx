import { useState } from "react";
import { KarteProps, KartesProps } from "@/utils/helper";
import ResultCard from "./ResultCard";
import { useGetLocalStorage } from "@/hooks/useLocalStorage";
import ResultProgressSection from "./ResultProgressSection";
import { kartesHash } from "../Report/ReportContainer";

function ResultContainer() {
  const {
    extraversion,
    agreeableness,
    conscientiousness,
    openness,
    emotionalStability,
  }: KartesProps = JSON.parse(useGetLocalStorage("kartes-data")!);
  const [selectedData, setSelectedData] = useState<KarteProps>(extraversion);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <div className="mx-40 flex h-full flex-col gap-4 pb-8 pt-16 text-neutral-800">
      <h1 className="pb-2 text-6xl font-medium">あなたの結果</h1>
      <h4 className="text-2xl text-neutral-500">
        性格テストの結果を確認して、パーソナリティ特性の傾向や特徴を詳しく学びましょう。
      </h4>
      <div className="flex h-full flex-col divide-y-2 divide-neutral-300 rounded-md border-2 border-neutral-300">
        <div className="flex h-12 items-center pl-4 text-lg font-medium">
          あなたの特徴
        </div>

        <div className="flex flex-1">
          <div className="grid flex-1 grid-rows-5 py-5 pl-5">
            {[
              extraversion,
              agreeableness,
              conscientiousness,
              openness,
              emotionalStability,
            ].map((type, i) => (
              <ResultProgressSection
                type={type}
                index={i}
                key={i}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
                setSelectedData={setSelectedData}
              />
            ))}
          </div>

          <ResultCard
            personality={kartesHash[selectedIndex]}
            type={selectedData?.type}
            title={selectedData?.title[0]}
            per={selectedData?.per}
            positive={selectedData?.positive[1]}
            negative={selectedData?.negative[1]}
            isPositive={selectedData?.type === selectedData?.positive[0]}
            primaryColorText={selectedData?.primaryColor.text}
          />
        </div>
      </div>
    </div>
  );
}

export default ResultContainer;
