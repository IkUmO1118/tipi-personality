function PersonalityExtraversion() {
  return (
    <div className="flex h-64 justify-between gap-32 bg-cyan-600 bg-opacity-70 px-16">
      <div className="flex flex-col self-center font-mono">
        <h1 className="w-max text-7xl text-white">外向性</h1>
        <span className="self-end text-3xl font-semibold text-neutral-800">
          の特徴や傾向
        </span>
      </div>
      <p className="self-center text-xl font-medium text-white">
        外向性は研究対象になることが最も多いパーソナリティ特性であり、幸福度についてカギを握ってます。またこのパーソナリティ特性は遺伝的な要素によって決まる割合が高いことが知られています。
      </p>
    </div>
  );
}

export default PersonalityExtraversion;
