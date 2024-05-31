import { personalitySummary } from "@/data/data-personality";
import { NavLink } from "react-router-dom";

type ResultCartProps = {
  personality: string;
  type: keyof typeof personalitySummary;
  title: string;
  per: number;
  positive: string;
  negative: string;
  isPositive: boolean;
  primaryColorText: string;
};

function ResultCard({
  personality,
  type,
  title,
  per,
  positive,
  negative,
  isPositive,
  primaryColorText,
}: ResultCartProps) {
  return (
    <div className="my-5 mr-5 flex w-1/4 flex-col items-center gap-3 bg-neutral-100 p-5 text-neutral-800">
      <span className="text-xs font-medium">{title}</span>
      <h4 className="text-xl font-medium">
        <span className={primaryColorText}>{per}%</span>{" "}
        {isPositive ? positive : negative}
      </h4>
      <img
        className="h-32 w-32"
        src={`/personality/${type}.svg`}
        alt="personality image"
      />
      <p className="text-base">{personalitySummary[type]}</p>
      <NavLink
        className="mt-auto self-start text-cyan-600"
        to={`/personality/${personality}`}
      >
        より詳しく &rarr;
      </NavLink>
    </div>
  );
}

export default ResultCard;
