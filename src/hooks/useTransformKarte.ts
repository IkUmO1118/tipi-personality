import { personalitySummary } from "@/data/data-personality";
import { KartesScoreProps } from "@/utils/helper";

function transformDetailKarte(
  score: number,
  moreThanFIf: string[],
  lessThanFif: string[],
  primaryColor: string[],
  secondaryColor: string,
  title: string[],
) {
  return {
    score,
    per: Math.round((score / 7) * 100),
    type: (score >= 3.5
      ? moreThanFIf[0]
      : lessThanFif[0]) as keyof typeof personalitySummary,
    positive: moreThanFIf,
    negative: lessThanFif,
    primaryColor: {
      bg: primaryColor[0],
      text: primaryColor[1],
    },
    secondaryColor,
    title,
  };
}

export function transformKarte(kartes: KartesScoreProps) {
  return {
    extraversion: transformDetailKarte(
      kartes.extraversion,
      ["extravert", "外向型"],
      ["introvert", "内向型"],
      ["bg-cyan-600", "text-cyan-600"],
      "bg-sky-200",
      ["外向性", "エネルギー"],
    ),
    openness: transformDetailKarte(
      kartes.openness,
      ["openMinded", "開放型"],
      ["conventional", "保守型"],
      ["bg-amber-500", "text-amber-500"],
      "bg-amber-200",
      ["開放性", "意識"],
    ),
    agreeableness: transformDetailKarte(
      kartes.agreeableness,
      ["agreeable", "協調型"],
      ["assertive", "積極型"],
      ["bg-emerald-600", "text-emerald-600"],
      "bg-green-200",
      ["協調性", "気質"],
    ),
    conscientiousness: transformDetailKarte(
      kartes.conscientiousness,
      ["conscientious", "慎重型"],
      ["flexible", "柔軟型"],
      ["bg-purple-700", "text-purple-700"],
      "bg-purple-200",
      ["誠実性", "戦術"],
    ),
    emotionalStability: transformDetailKarte(
      kartes.emotionalStability,
      ["calm", "安定型"],
      ["anxious", "心配型"],
      ["bg-red-400", "text-red-400"],
      "bg-rose-200",
      ["情緒安定性", "アイデンティティ"],
    ),
  };
}
