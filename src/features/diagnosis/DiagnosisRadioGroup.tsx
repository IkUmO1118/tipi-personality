import Radio from "@/ui/Radio";

type DiagnosisRadioGroupProps = {
  sizes: string[];
  selectedValue: number | null;
  setSelectedValue: (index: number) => void;
};

function DiagnosisRadioGroup({
  sizes,
  selectedValue,
  setSelectedValue,
}: DiagnosisRadioGroupProps) {
  return (
    <ul className="flex items-center justify-center gap-4">
      {sizes.map((size, index) => (
        <Radio
          key={index}
          index={index + 1}
          style={`${size} hover:bg-neutral-400 peer-checked:bg-neutral-400 border-neutral-400`}
          variant="diagnosis"
          onChange={() => setSelectedValue(index + 1)}
          checked={selectedValue === index + 1}
        />
      ))}
    </ul>
  );
}

export default DiagnosisRadioGroup;
