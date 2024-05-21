type DiagnosisRadioProps = {
  index: number;
  size: number;
  variant: string;
  color: string;
};

function Radio({ index, size, variant, color }: DiagnosisRadioProps) {
  return (
    <li>
      <input
        type="radio"
        name={variant}
        className="peer hidden"
        id={`${variant}${index}`}
        value={index}
      />
      <label
        htmlFor={`${variant}${index}`}
        className={`relative block h-${size} w-${size} cursor-pointer rounded-full border-2 border-${color} transition-all duration-300 
        hover:bg-${color} peer-checked:bg-${color}`}
      ></label>
    </li>
  );
}

export default Radio;
