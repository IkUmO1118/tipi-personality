import { useGetSession } from "@/hooks/useSessions";
import ResultProgressArticle from "./ResultProgressArticle";
import { useState } from "react";
import { KarteProps, KartesProps } from "@/utils/helper";
import ResultCard from "./ResultCard";

function ResultContainer() {
  const {
    extraversion,
    agreeableness,
    conscientiousness,
    openness,
    emotionalStability,
  }: KartesProps = JSON.parse(useGetSession("kartes-data"));
  const [selected, setSelected] = useState<KarteProps>(extraversion);
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
            {/* 以下のResultProgressArticleを一つのcomponentにまとめ、roopにてまとめたい */}
            <div
              className={`cursor-pointer rounded-l-lg  ${selectedIndex === 0 && "bg-neutral-100"}`}
              onMouseEnter={() => {
                setSelectedIndex(0);
                setSelected(extraversion);
              }}
            >
              <ResultProgressArticle
                title={extraversion.title[0]}
                primaryText={extraversion.primaryColor.text}
                primaryBg={extraversion.primaryColor.bg}
                per={extraversion.per}
                positive={extraversion.positive[1]}
                negative={extraversion.negative[1]}
                isPositive={extraversion.type === extraversion.positive[0]}
              />
            </div>
            <div
              className={`cursor-pointer rounded-l-lg hover:bg-neutral-100 ${selectedIndex === 1 && "bg-neutral-100"}`}
              onMouseEnter={() => {
                setSelected(openness);
                setSelectedIndex(1);
              }}
            >
              <ResultProgressArticle
                title={openness.title[0]}
                primaryText={openness.primaryColor.text}
                primaryBg={openness.primaryColor.bg}
                per={openness.per}
                positive={openness.positive[1]}
                negative={openness.negative[1]}
                isPositive={openness.type === openness.positive[0]}
              />
            </div>
            <div
              className={`cursor-pointer rounded-l-lg hover:bg-neutral-100 ${selectedIndex === 2 && "bg-neutral-100"}`}
              onMouseEnter={() => {
                setSelected(agreeableness);
                setSelectedIndex(2);
              }}
            >
              <ResultProgressArticle
                title={agreeableness.title[0]}
                primaryText={agreeableness.primaryColor.text}
                primaryBg={agreeableness.primaryColor.bg}
                per={agreeableness.per}
                positive={agreeableness.positive[1]}
                negative={agreeableness.negative[1]}
                isPositive={agreeableness.type === agreeableness.positive[0]}
              />
            </div>
            <div
              className={`cursor-pointer rounded-l-lg hover:bg-neutral-100 ${selectedIndex === 3 && "bg-neutral-100"}`}
              onMouseEnter={() => {
                setSelected(conscientiousness);
                setSelectedIndex(3);
              }}
            >
              <ResultProgressArticle
                title={conscientiousness.title[0]}
                primaryText={conscientiousness.primaryColor.text}
                primaryBg={conscientiousness.primaryColor.bg}
                per={conscientiousness.per}
                positive={conscientiousness.positive[1]}
                negative={conscientiousness.negative[1]}
                isPositive={
                  conscientiousness.type === conscientiousness.positive[0]
                }
              />
            </div>
            <div
              className={`cursor-pointer rounded-l-lg hover:bg-neutral-100 ${selectedIndex === 4 && "bg-neutral-100"}`}
              onMouseEnter={() => {
                setSelected(emotionalStability);
                setSelectedIndex(4);
              }}
            >
              {" "}
              <ResultProgressArticle
                title={emotionalStability.title[0]}
                primaryText={emotionalStability.primaryColor.text}
                primaryBg={emotionalStability.primaryColor.bg}
                per={emotionalStability.per}
                positive={emotionalStability.positive[1]}
                negative={emotionalStability.negative[1]}
                isPositive={
                  emotionalStability.type === emotionalStability.positive[0]
                }
              />
            </div>
          </div>

          <ResultCard
            type={selected?.type}
            title={selected?.title[0]}
            per={selected?.per}
            positive={selected?.positive[1]}
            negative={selected?.negative[1]}
            isPositive={selected?.type === selected?.positive[0]}
            primaryColorText={selected?.primaryColor.text}
          />
        </div>
      </div>
    </div>
  );
}

export default ResultContainer;
