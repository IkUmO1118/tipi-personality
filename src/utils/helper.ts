import { Score } from "@/contexts/scores-context";
import { personalitySummary } from "@/data/data-personality";

export const RadioButtonSizes: string[] = [
  "h-20 w-20",
  "w-16 h-16",
  "w-12 h-12",
  "w-8 h-8",
  "w-12 h-12",
  "w-16 h-16",
  "h-20 w-20",
];

export type PersonalityScoreProps = {
  extraversion: number;
  agreeableness: number;
  conscientiousness: number;
  openness: number;
  emotionalStability: number;
};

export type PersonalityProps = { email: string } & PersonalityScoreProps;

export function calcKarte(arr: Score[], email: string): PersonalityProps {
  const scoresArr: number[] = [];
  arr.map(
    (question, i) =>
      question.questionNumber === i && scoresArr.push(question.score),
  );

  return {
    email,
    extraversion: (scoresArr[0] + (8 - scoresArr[5])) / 2,
    agreeableness: (scoresArr[6] + (8 - scoresArr[1])) / 2,
    conscientiousness: (scoresArr[2] + (8 - scoresArr[7])) / 2,
    openness: (scoresArr[4] + (8 - scoresArr[9])) / 2,
    emotionalStability: (scoresArr[8] + (8 - scoresArr[3])) / 2,
  };
}

export type KarteType = {
  score: number;
  per: number;
  type: keyof typeof personalitySummary;
  positiveType: string;
  negativeType: string;
  primaryColorBg: string;
  secondaryColor: string;
  title: string;
  primaryColorText: string;
};
export type KartesType = {
  extraversion: KarteType;
  agreeableness: KarteType;
  conscientiousness: KarteType;
  openness: KarteType;
  emotionalStability: KarteType;
};

function transformDetailKarte(
  score: number,
  moreThanFIf: string,
  lessThanFif: string,
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
    positiveType: moreThanFIf,
    negativeType: lessThanFif,
    primaryColorBg: primaryColor,
    secondaryColor,
    title,
    primaryColorText,
  };
}

export function transformKarte(karte: PersonalityProps) {
  return {
    extraversion: transformDetailKarte(
      karte.extraversion,
      "extravert",
      "introvert",
      "bg-cyan-600",
      "text-cyan-600",
      "bg-sky-200",
      "エネルギー",
    ),
    openness: transformDetailKarte(
      karte.openness,
      "openMinded",
      "conventional",
      "bg-amber-500",
      "text-amber-500",
      "bg-amber-200",
      "意識",
    ),
    agreeableness: transformDetailKarte(
      karte.agreeableness,
      "agreeable",
      "assertive",
      "bg-emerald-600",
      "text-emerald-600",
      "bg-green-200",
      "気質",
    ),
    conscientiousness: transformDetailKarte(
      karte.conscientiousness,
      "conscientious",
      "impulsive",
      "bg-purple-700",
      "text-purple-700",
      "bg-purple-200",
      "戦術",
    ),
    emotionalStability: transformDetailKarte(
      karte.emotionalStability,
      "calm",
      "anxious",
      "bg-red-400",
      "text-red-400",
      "bg-rose-200",
      "アイデンティティ",
    ),
  };
}
