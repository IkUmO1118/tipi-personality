type ProgressProps = {
  value: number;
  color: string;
  style: string;
};

function Progress({ value, color, style }: ProgressProps) {
  return (
    <div
      className={`flex ${style} overflow-hidden rounded-full bg-neutral-200`}
    >
      <div
        style={{ width: `${value}%` }}
        className={`${color} rounded-full`}
      ></div>
    </div>
  );
}

export default Progress;
