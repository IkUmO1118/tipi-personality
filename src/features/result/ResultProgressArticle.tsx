import Progress from "@/ui/Progress";

type ResultProgressArticleProps = {
  title: string;
  primaryText: string;
  primaryBg: string;
  per: number;
  positive: string;
  negative: string;
  isPositive: boolean;
};

function ResultProgressArticle({
  title,
  primaryText,
  primaryBg,
  per,
  positive,
  negative,
  isPositive,
}: ResultProgressArticleProps) {
  return (
    <article className="flex flex-col gap-1 p-3">
      <h3 className="flex justify-center gap-2 text-base font-medium">
        <span className={primaryText}>{per}%</span> {title}
      </h3>
      <div className="flex items-center justify-center gap-5 text-sm">
        <p className="w-auto">{positive}</p>
        <Progress
          value={per}
          color={primaryBg}
          style={`h-4 w-4/5 ${!isPositive && "justify-end"}`}
        />
        <p className="w-auto">{negative}</p>
      </div>
    </article>
  );
}

export default ResultProgressArticle;
