function PersonalityOpenness() {
  return (
    <div className="flex h-64 justify-between gap-32 bg-amber-500 bg-opacity-70 px-16">
      <div className="flex flex-col self-center font-mono">
        <h1 className="w-max text-7xl text-white">開放性</h1>
        <span className="self-end text-3xl font-semibold text-neutral-800">
          の特徴や傾向
        </span>
      </div>
      <p className="self-center text-xl font-medium text-white">
        開放性はクリエイティビティと深く結びついています。またこのパーソナリティ特性は遺伝的要因が高いことが分かっています。
      </p>
    </div>
  );
}

export default PersonalityOpenness;
