import Progress from "@/ui/Progress";

type PersonalityProgressArticleProps = {
  per: number;
  title: string[];
  type: string;
  primaryColor: { text: string; bg: string };
  positive: string[];
  negative: string[];
};

function PersonalityProgressArticle({
  personality,
}: {
  personality: PersonalityProgressArticleProps;
}) {
  const {
    per,
    title,
    type,
    primaryColor,
    positive,
    negative,
  }: PersonalityProgressArticleProps = personality;

  return (
    <article className="flex flex-col gap-1 p-1">
      <h3 className="flex justify-center gap-2 text-base font-medium">
        <span className={primaryColor.text}>{per}%</span> {title[0]}
      </h3>
      <Progress
        value={per}
        color={primaryColor.bg}
        style={`h-3 w-full ${!(type === positive[0]) && "justify-end"}`}
      />
      <div className="flex justify-between text-sm">
        <p className="w-auto font-medium">{positive[1]}</p>
        <p className="w-auto font-medium">{negative[1]}</p>
      </div>
    </article>
  );
}

export default PersonalityProgressArticle;
