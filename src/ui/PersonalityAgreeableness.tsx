function PersonalityAgreeableness() {
  return (
    <>
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
      <div className="grid grid-cols-[2fr_5fr_2fr]">
        <div>&nbsp;</div>
        <div className="my-24 flex flex-col gap-16 text-neutral-800">
          <h2 className="border-b-2 border-neutral-300 py-4 text-5xl font-medium">
            協調性
          </h2>
          <p className="text-xl">
            協調性のスコアが高い人には、「感じがいい」「協力的」「友好的」「支援的」「同情的」などの特性が見られ、対称的にスコアが低い人には、「皮肉屋」「対立的」「非友好的」「意地が悪い」などの特性が見られます。
          </p>
          <div className="flex flex-col gap-5 border-l-2 border-cyan-600 pl-10">
            <h3 className="text-3xl font-medium">
              「幸福は対抗の意識のうちにはなく、協調の意識のうちにある」
            </h3>
            <p className="text-lg text-neutral-500">ジイド ｢文学と倫理｣</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-xl">
              協調性は社会的に望ましいパーソナリティ特性であるとみなされており、特に他者と協力する必要がある場合はそうです。私たちが人の第一印象を判断するときに持っても重視するのも、協調性です。私たちは本能的に、「この人は私の見方になる人か、そうでないか」をとっさに判断しようとしているのです。
            </p>
            <p className="text-xl">
              しかし協調性が高いことは、他者の意見を尊重しすぎて自己主張ができなくなったり、意思決定が遅れることにつながり、過度のストレスや自己犠牲のリスクを伴います。また、他者依存や対立回避による問題の先送り、他者からの悪用といった不利益も生じる可能性があります。
            </p>
          </div>
          <div className="flex flex-col gap-5 border-l-2 border-cyan-600 pl-10">
            <h3 className="text-3xl font-medium">
              「賢者とは何か。法に対して自然を、慣習に対して理性を、世論に対して自己の良心を、謬見に対して自己の判断を対立させる人間である」
            </h3>
            <p className="text-lg text-neutral-500">
              シャンフォール ｢格言と反省｣
            </p>
          </div>
          <p className="text-xl">
            他者の印象を形成するうえでは重要な協調性ですが、組織内での成功との関連性はあまり高くありません。給与を指標にした場合、協調性が高いことは、むしろ職業人としてのパフォーマンスを低下させるという研究すらあります。これは特に協調性が「男らしい振る舞い」と矛盾するため、男性の場合に当てはまります。
          </p>
          <div className="border-l-2 border-emerald-600 bg-emerald-600 bg-opacity-5 px-12 py-7">
            <p className="text-xl">
              協調性とパフォーマンスとの関係を考えるには、文脈やタイミングを考慮する必要がある
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-xl">
              協調性の低い人には、自己主張が強いという特徴があります。自己主張の強さは目標達成には効果的ですが、その分、人間関係をぎくしゃくさせることがあります。部下は自己主張が強すぎたり弱すぎたりする上司を低く評価し、適度に自己主張する上司を高く評価します。
            </p>
            <p className="text-xl">
              また協調性が低い人は、重要な物事とそうでないいものを区別する能力が低いのです。さらに協調性は健康にも影響しています。協調性が高い人が気付いている社会的なつながりは健康にいい影響をもたらします。しかし協調性が低い人は、こうした社会的なつながりを欠き、怒りや皮肉、対立などを頻繁に体験しているため、健康的な環境を築けません。
            </p>
          </div>
          <div className="border-l-2 border-emerald-600 bg-emerald-600 bg-opacity-5 px-12 py-7">
            <p className="text-xl">
              協調性は高すぎても低すぎてもパフォーマンスが低くなり、最適なパフォーマンスをもたらすのは、協調性が中程度の時である
            </p>
          </div>
          <p className="text-xl">
            幸福との関わりも興味深い点です。一般的に協調性が高い人の方が幸福感を味わっています。しかし、協調性が低い人は、周りと強調していないときの方が幸福感を覚えやすいことが分かっています。
          </p>
        </div>
        <div>&nbsp;</div>
      </div>
    </>
  );
}

export default PersonalityAgreeableness;
