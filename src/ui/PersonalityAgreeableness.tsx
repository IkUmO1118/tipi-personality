function PersonalityAgreeableness() {
  return (
    <div className="flex h-64 justify-between gap-32 bg-emerald-600 bg-opacity-70 px-16">
      <div className="flex flex-col self-center font-mono">
        <h1 className="w-max text-7xl text-white">協調性</h1>
        <span className="self-end text-3xl font-semibold text-neutral-800">
          の特徴や傾向
        </span>
      </div>
      <p className="self-center text-xl font-medium text-white">
        協調性は、人の第一印象など、他者の印象を形成する上で重要な指標です。しかし組織内での成功と一番関連性が低いのも協調性です。
      </p>
    </div>
  );
}

export default PersonalityAgreeableness;
