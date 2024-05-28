import { Button } from "@/components/ui/button";
// import personalityImage from "/personality/内向的.svg";
import Progress from "./Progress";
import { useGetSession } from "@/hooks/useSessions";
import { KartesType, PersonalityProps, transformKarte } from "@/utils/helper";
import { useState } from "react";
import { personalitySummary } from "@/data/data-personality";

const kartesHash: { [key: number]: keyof KartesType } = {
  0: "extraversion",
  1: "agreeableness",
  2: "conscientiousness",
  3: "openness",
  4: "emotionalStability",
};

function AboutResult() {
  const [openId, setOpenId] = useState<number>(0);
  const karteData = useGetSession("personalityDiagnosisResult");

  const karte = JSON.parse(karteData!);
  const transformedKarte: KartesType = transformKarte(
    karte as PersonalityProps,
  );

  const {
    // score,
    per,
    type,
    positiveType,
    negativeType,
    primaryColorBg,
    primaryColorText,
    secondaryColor,
    title,
  } = transformedKarte[kartesHash[openId]];

  const isPositive = type === positiveType;

  return (
    <div className={`h-full ${secondaryColor} py-10`}>
      <section className="mx-auto flex h-full  w-8/12 flex-col overflow-hidden rounded-xl bg-white shadow-2xl">
        <div
          className={`flex h-44 items-center justify-center ${primaryColorBg} text-2xl font-bold text-white`}
        >
          <h2 className="mb-4">{title}</h2>
        </div>
        <div className="flex h-full gap-16 px-20">
          <img
            src={"/personality/内向的.svg"}
            alt="女性が丘の上で、本を読んでいる"
            className=" w-4/12"
          />
          <div className="my-auto flex w-full flex-col gap-6">
            <h2 className="text-4xl font-medium text-neutral-800">
              {isPositive ? per : 100 - per}% {type}
            </h2>
            <div className="flex h-20 flex-col">
              <Progress
                value={isPositive ? per : 100 - per}
                color={primaryColorBg.slice(3)}
                style={isPositive ? "" : "justify-end"}
              />
              <div className="mt-3 flex justify-between text-xl font-bold">
                <div
                  className={isPositive ? primaryColorText : "text-neutral-800"}
                >
                  {per}%
                </div>
                <div
                  className={
                    !isPositive ? primaryColorText : "text-neutral-800"
                  }
                >
                  {100 - per}%
                </div>
              </div>
              <div className="flex justify-between text-sm font-bold">
                <div
                  className={isPositive ? primaryColorText : "text-neutral-500"}
                >
                  {positiveType}
                </div>
                <div
                  className={
                    !isPositive ? primaryColorText : "text-neutral-500"
                  }
                >
                  {negativeType}
                </div>
              </div>
            </div>
            <p className=" text-lg  text-neutral-800">
              {personalitySummary[type]}
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
              onClick={() => {
                if (openId > 0) setOpenId((i) => i - 1);
              }}
              disabled={openId === 0}
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
            onClick={() => {
              if (openId < 4) setOpenId((i) => i + 1);
            }}
          >
            続ける
          </Button>
        </div>
      </section>
    </div>
  );
}

export default AboutResult;
