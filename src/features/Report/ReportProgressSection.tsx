import Progress from "@/ui/Progress";

type ReportProgressSectionProps = {
  isPositive: boolean;
  per: number;
  primaryColor: { bg: string; text: string };
  positive: string[];
  negative: string[];
};

function ReportProgressSection({
  isPositive,
  per,
  primaryColor,
  positive,
  negative,
}: ReportProgressSectionProps) {
  return (
    <>
      <div className="flex h-20 flex-col">
        <Progress
          value={isPositive ? per : 100 - per}
          color={primaryColor.bg}
          style={isPositive ? "h-2 w-full" : "justify-end h-2 w-full"}
        />
        <div className="mt-3 flex justify-between text-xl font-bold">
          <div className={isPositive ? primaryColor.text : "text-neutral-800"}>
            {per}%
          </div>
          <div className={!isPositive ? primaryColor.text : "text-neutral-800"}>
            {100 - per}%
          </div>
        </div>
        <div className="flex justify-between text-sm font-bold">
          <div className={isPositive ? primaryColor.text : "text-neutral-500"}>
            {positive[1]}
          </div>
          <div className={!isPositive ? primaryColor.text : "text-neutral-500"}>
            {negative[1]}
          </div>
        </div>
      </div>
    </>
  );
}

export default ReportProgressSection;
