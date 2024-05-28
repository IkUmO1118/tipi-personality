import Progress from "@/ui/Progress";

type ReportProgressSectionProps = {
  isPositive: boolean;
  per: number;
  primaryColorBg: string;
  primaryColorText: string;
  positiveJpn: string;
  negativeJpn: string;
};

function ReportProgressSection({
  isPositive,
  per,
  primaryColorBg,
  primaryColorText,
  positiveJpn,
  negativeJpn,
}: ReportProgressSectionProps) {
  return (
    <>
      <div className="flex h-20 flex-col">
        <Progress
          value={isPositive ? per : 100 - per}
          color={primaryColorBg.slice(3)}
          style={isPositive ? "" : "justify-end"}
        />
        <div className="mt-3 flex justify-between text-xl font-bold">
          <div className={isPositive ? primaryColorText : "text-neutral-800"}>
            {per}%
          </div>
          <div className={!isPositive ? primaryColorText : "text-neutral-800"}>
            {100 - per}%
          </div>
        </div>
        <div className="flex justify-between text-sm font-bold">
          <div className={isPositive ? primaryColorText : "text-neutral-500"}>
            {positiveJpn}
          </div>
          <div className={!isPositive ? primaryColorText : "text-neutral-500"}>
            {negativeJpn}
          </div>
        </div>
      </div>
    </>
  );
}

export default ReportProgressSection;
