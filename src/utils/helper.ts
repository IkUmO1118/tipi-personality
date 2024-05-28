import { Score } from "@/contexts/scores-context";

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
