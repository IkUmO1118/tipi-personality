import { useState } from "react";

import { useGetSession } from "@/hooks/useSessions";
import { useSetLocalStorage } from "@/hooks/useLocalStorage";
import { KartesProps, KartesScoreProps } from "@/utils/helper";
import { personalitySummary } from "@/data/data-personality";
import { transformKarte } from "@/hooks/useTransformKarte";
import ReportNavigation from "./ReportNavigation";
import ReportProgressSection from "./ReportProgressSection";

export const kartesHash: { [key: number]: keyof KartesProps } = {
  0: "extraversion",
  1: "agreeableness",
  2: "conscientiousness",
  3: "openness",
  4: "emotionalStability",
};

function ReportContainer() {
  const [openId, setOpenId] = useState<number>(0);
  const ResultsData = useGetSession("diagnosis-result");

  const kartes = JSON.parse(ResultsData!);
  const transformedKarte: KartesProps = transformKarte(
    kartes[0] as KartesScoreProps,
  );

  // localStorageに新たなkartes-dataを登録
  useSetLocalStorage({
    key: "kartes-data",
    value: JSON.stringify({
      value: transformedKarte,
      timeStamp: new Date(),
    }),
  });

  const { per, type, positive, negative, primaryColor, secondaryColor, title } =
    transformedKarte[kartesHash[openId]];

  const isPositive = type === positive[0];

  return (
    <div
      className={`flex h-full transition-all duration-150 ${secondaryColor}`}
    >
      <section className="mx-auto flex h-3/4 w-8/12 flex-col self-center  overflow-hidden rounded-xl bg-white shadow-2xl">
        <div
          className={`flex h-44 items-center justify-center ${primaryColor.bg} text-2xl font-bold text-white transition-all duration-150`}
        >
          <h2 className="mb-4">{title[1]}</h2>
        </div>
        <div className="flex h-full gap-16 px-20">
          <img
            src={`/personality/${type}.svg`}
            alt={`${type} images`}
            className="w-4/12"
          />
          <div className="my-auto flex w-full flex-col gap-6">
            <h2 className="text-4xl font-medium text-neutral-800">
              {isPositive ? per : 100 - per}%{" "}
              {isPositive ? positive[1] : negative[1]}
            </h2>
            <ReportProgressSection
              isPositive={isPositive}
              per={per}
              primaryColor={primaryColor}
              positive={positive}
              negative={negative}
            />
            <p className=" text-lg  text-neutral-800">
              {personalitySummary[type]}
            </p>
          </div>
        </div>
        <ReportNavigation openId={openId} setOpenId={setOpenId} />
      </section>
    </div>
  );
}

export default ReportContainer;
