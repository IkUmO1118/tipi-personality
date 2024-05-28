import { personalitySummary } from "@/data/data-personality";
import { KartesScoreProps } from "@/utils/helper";

export type KarteProps = {
  score: number;
  per: number;
  type: keyof typeof personalitySummary;
  positive: string;
  positiveJpn: string;
  negative: string;
  negativeJpn: string;
  primaryColorBg: string;
  secondaryColor: string;
  title: string;
  primaryColorText: string;
};

export type KartesProps = {
  extraversion: KarteProps;
  agreeableness: KarteProps;
  conscientiousness: KarteProps;
  openness: KarteProps;
  emotionalStability: KarteProps;
};

function transformDetailKarte(
  score: number,
  moreThanFIf: string,
  moreThanFIfJpn: string,
  lessThanFif: string,
  lessThanFifJpn: string,
  primaryColor: string,
  primaryColorText: string,
  secondaryColor: string,
  title: string,
) {
  return {
    score,
    per: Math.round((score / 7) * 100),
    type: (score >= 3.5
      ? moreThanFIf
      : lessThanFif) as keyof typeof personalitySummary,
    positive: moreThanFIf,
    positiveJpn: moreThanFIfJpn,
    negative: lessThanFif,
    negativeJpn: lessThanFifJpn,
    primaryColorBg: primaryColor,
    primaryColorText,
    secondaryColor,
    title,
  };
}

export function transformKarte(karte: KartesScoreProps) {
  return {
    extraversion: transformDetailKarte(
      karte.extraversion,
      "extravert",
      "外向型",
      "introvert",
      "内向型",
      "bg-cyan-600",
      "text-cyan-600",
      "bg-sky-200",
      "エネルギー",
    ),
    openness: transformDetailKarte(
      karte.openness,
      "openMinded",
      "開放型",
      "conventional",
      "保守型",
      "bg-amber-500",
      "text-amber-500",
      "bg-amber-200",
      "意識",
    ),
    agreeableness: transformDetailKarte(
      karte.agreeableness,
      "agreeable",
      "協調型",
      "assertive",
      "積極型",
      "bg-emerald-600",
      "text-emerald-600",
      "bg-green-200",
      "気質",
    ),
    conscientiousness: transformDetailKarte(
      karte.conscientiousness,
      "conscientious",
      "慎重型",
      "flexible",
      "柔軟型",
      "bg-purple-700",
      "text-purple-700",
      "bg-purple-200",
      "戦術",
    ),
    emotionalStability: transformDetailKarte(
      karte.emotionalStability,
      "calm",
      "安定型",
      "anxious",
      "心配型",
      "bg-red-400",
      "text-red-400",
      "bg-rose-200",
      "アイデンティティ",
    ),
  };
}
