import { useGetSession } from "@/hooks/useSessions";
import { KartesScoreProps } from "@/utils/helper";
import { useState } from "react";
import { personalitySummary } from "@/data/data-personality";
import { KartesProps, transformKarte } from "@/hooks/useTransformKarte";
import ReportNavigation from "./ReportNavigation";
import ReportProgressSection from "./ReportProgressSection";

const kartesHash: { [key: number]: keyof KartesProps } = {
  0: "extraversion",
  1: "agreeableness",
  2: "conscientiousness",
  3: "openness",
  4: "emotionalStability",
};

function ReportContainer() {
  const [openId, setOpenId] = useState<number>(0);
  const ResultsData = useGetSession("personalityDiagnosisResult");

  const karte = JSON.parse(ResultsData!);
  const transformedKarte: KartesProps = transformKarte(
    karte as KartesScoreProps,
  );

  const {
    // score,
    per,
    type,
    positive,
    positiveJpn,
    // negative,
    negativeJpn,
    primaryColorBg,
    primaryColorText,
    secondaryColor,
    title,
  } = transformedKarte[kartesHash[openId]];

  const isPositive = type === positive;

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
            src={`/public/personality/${type}.svg`}
            alt={`${type} images`}
            className="w-4/12"
          />
          <div className="my-auto flex w-full flex-col gap-6">
            <h2 className="text-4xl font-medium text-neutral-800">
              {isPositive ? per : 100 - per}%{" "}
              {isPositive ? positiveJpn : negativeJpn}
            </h2>
            <ReportProgressSection
              isPositive={isPositive}
              per={per}
              primaryColorBg={primaryColorBg}
              primaryColorText={primaryColorText}
              positiveJpn={positiveJpn}
              negativeJpn={negativeJpn}
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
