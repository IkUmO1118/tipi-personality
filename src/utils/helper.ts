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

export type KarteScoreProps = {
  extraversion: number;
  agreeableness: number;
  conscientiousness: number;
  openness: number;
  emotionalStability: number;
};

export type KartesScoreProps = { email: string } & KarteScoreProps;

export function calcKarteScore(arr: Score[], email: string): KartesScoreProps {
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

export type KarteProps = {
  score: number;
  per: number;
  type: keyof typeof personalitySummary;
  positive: string[];
  negative: string[];
  primaryColor: { bg: string; text: string };
  secondaryColor: string;
  title: string[];
};

export type KartesProps = {
  extraversion: KarteProps;
  agreeableness: KarteProps;
  conscientiousness: KarteProps;
  openness: KarteProps;
  emotionalStability: KarteProps;
};

export const kartesHash: { [key: number]: keyof KartesProps } = {
  0: "extraversion",
  1: "agreeableness",
  2: "conscientiousness",
  3: "openness",
  4: "emotionalStability",
};
