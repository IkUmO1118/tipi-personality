function PersonalityExtraversion() {
  return (
    <>
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
      <div className="grid grid-cols-[2fr_5fr_2fr]">
        <div>&nbsp;</div>
        <div className="my-24 flex flex-col gap-16 text-neutral-800">
          <h2 className="border-b-2 border-neutral-300 py-4 text-5xl font-medium">
            誠実性
          </h2>
          <p className="text-xl">
            外向性と内向性の違いは、脳の新皮質の特定領域における覚醒レベルの違いだと考えられています。つまり、外向型の人は普段の覚醒レベルが低く、内向型の人は高い状態にあります。日常生活で適切にふる舞うには、覚醒レベルを最適に保つ必要があります。そのため外向型は覚醒レベルを上げようとし、内向型は下げようとするのです。
          </p>
          <div className="flex flex-col gap-5 border-l-2 border-cyan-600 pl-10">
            <h3 className="text-3xl font-medium">
              「人と交流することで、自分の限界を超え、新たな可能性を見つけることができる」
            </h3>
            <p className="text-lg text-neutral-500">デール・カーネギー</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-xl">
              普段から覚醒レベルが高い内向型は、最適なレベルを維持するために、刺激的な状況を避けようとします。そのため、周りからは人づきあいが悪いと誤解されることがあります。逆に、元々の覚醒レベルが低い外向型は刺激的な状況を好みます。熱い議論が交わされるような環境にいるときこそ、自分のパフォーマンスが上がることを知っているからです。
            </p>
            <p className="text-xl">
              一般に、小学校から大学を通じて、内向型の方が良いを成績をとります。ただし、それは内向型の方が知能が高いからではありません。外向型は刺激が多く積極的な参加が重視される環境でパフォーマンスを発揮します。しかし現在の学校には、このような学習環境は基本的にありません。また外向型は短期的な記憶力が、内向型は長期的な記憶力が優れています。さらに「速度を上げれば多くの仕事をこなせるがミスは増え、速度を落とせば達成量は減るがミスがない」というトレードオフにおいて、外向型は量を、内向型は質を優先させます。
            </p>
          </div>
          <div className="flex flex-col gap-5 border-l-2 border-cyan-600 pl-10">
            <h3 className="text-3xl font-medium">
              「内向的な人の静かな時間は、創造性と洞察の源泉である」
            </h3>
            <p className="text-lg text-neutral-500">
              マーティ・オルセン・レイニー
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-xl">
              内向型と外向型のコミュニケーションのスタイルは大きく異なります。外向型は、相手の近くに立って大きな声で話します。頻繁に相手の方や背中をたたいたりハグをします。対して内向型の人は落ち着いて控えめな様子で話しをし、相手の体にも触れません。また外向型は、直接的で単純明快な言葉づかいをします。逆に内向型は、波風を起こすような発言を避けようとして、遠回しで曖昧な表現を好みます。
            </p>
            <p className="text-xl">
              他にも、外向性はモチベーションを理解するのにも役立ちます。外向型の人は「報酬」を知らせる合図に敏感であり、また物事のポジティブな側面に注目します。一方、内向型の人のモチベーションは、「報酬」の合図を察知してもあまり上がらず、「罰」の合図に敏感です。
            </p>
          </div>
          <div className="border-l-2 border-cyan-600 bg-cyan-600 bg-opacity-5 px-12 py-7">
            <p className="text-xl">
              内向型の人間はアメリカ社会(その他の先進国でも)差別されている
            </p>
          </div>
        </div>
        <div>&nbsp;</div>
      </div>
    </>
  );
}

export default PersonalityExtraversion;
