import { KarteProps } from "@/utils/helper";
import ResultProgressArticle from "./ResultProgressArticle";

type ResultProgressSectionProps = {
  type: KarteProps;
  index: number;
  selectedIndex: number;
  setSelectedIndex: (index: number) => void;
  setSelectedData: (data: KarteProps) => void;
};

function ResultProgressSection({
  type,
  index,
  selectedIndex,
  setSelectedIndex,
  setSelectedData,
}: ResultProgressSectionProps) {
  return (
    <div
      className={`cursor-pointer rounded-l-lg  ${selectedIndex === index && "bg-neutral-100"}`}
      onMouseEnter={() => {
        setSelectedIndex(index);
        setSelectedData(type);
      }}
    >
      <ResultProgressArticle
        title={type.title[0]}
        primaryText={type.primaryColor.text}
        primaryBg={type.primaryColor.bg}
        per={type.per}
        positive={type.positive[1]}
        negative={type.negative[1]}
        isPositive={type.type === type.positive[0]}
      />
    </div>
  );
}

export default ResultProgressSection;
