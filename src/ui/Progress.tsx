type ProgressProps = {
  value: number;
  color: string;
  style: string;
};

function Progress({ value, color, style }: ProgressProps) {
  return (
    <div
      className={`flex h-2 w-full ${style} overflow-hidden rounded-full bg-neutral-200`}
    >
      <div style={{ width: `${value}%` }} className={`bg-${color}`}></div>
    </div>
  );
}

export default Progress;
