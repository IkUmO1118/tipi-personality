type ProgressProps = {
  value: number;
  color: string;
};

function Progress({ value, color }: ProgressProps) {
  return (
    <div
      className={`flex h-2 w-full justify-end overflow-hidden rounded-full bg-neutral-200`}
    >
      <div style={{ width: `${value}%` }} className={`bg-${color}`}></div>
    </div>
  );
}

export default Progress;
