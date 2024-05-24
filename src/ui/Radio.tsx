type DiagnosisRadioProps = {
  index: number;
  style: string;
  variant: string;
  onChange: () => void
  checked: boolean;
};

function Radio({ index, style, variant, onChange, checked }: DiagnosisRadioProps) {
  return (
    <li>
      <input
        type="radio"
        name={variant}
        className="peer hidden"
        id={`${variant}${index}`}
        value={index}
        onChange={onChange}
        checked={checked}
      />
      <label
        htmlFor={`${variant}${index}`}
        className={`${style} inline-block cursor-pointer rounded-full border-2 transition-all duration-300 
        `}
      ></label>
    </li>
  );
}

export default Radio;
