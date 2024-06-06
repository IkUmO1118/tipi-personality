import { KartesProps } from "@/utils/helper";
import Progress from "./Progress";
import { useGetSession } from "@/hooks/useSessions";

function PersonalityOpenness() {
  const kartesData = JSON.parse(useGetSession("kartes-data"));

  if (!kartesData) {
    return (
      <>
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
        <div className="grid grid-cols-[2fr_5fr_2fr]">
          <div>&nbsp;</div>
          <div className="my-24 flex flex-col gap-16 text-neutral-800">
            <h2 className="border-b-2 border-neutral-300 py-4 text-5xl font-medium">
              開放性
            </h2>
            <p className="text-xl">
              開放性は、新しい考えや人間関係、環境をどの程度受け入れられるかを表すもので、クリエイティビティと深く結びついています。開放性が高い人は、芸術や文化に強い興味を示し、エキゾチックな味わいや匂いを好み、世界を複雑なものとして捉えています。対照的に、開放性が低い人は、新しい何かを試すことに抵抗を感じ、いつも通りの行動を好み、エキゾチックな誘惑にも魅力を感じません。
            </p>
            <div className="flex flex-col gap-5 border-l-2 border-cyan-600 pl-10">
              <h3 className="text-3xl font-medium">
                「新しいアイデアを受け入れることで、世界を広げることができる」
              </h3>
              <p className="text-lg text-neutral-500">スティーブ・ジョブズ</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-xl">
                誠実性は勉強や仕事に大きく影響します。例えば、ある大学生の成績を予測するとしたら、彼の高校時代の成績を見るよりも、誠実性を見た方が正確に予測できます。理由は単純で、大学側が評価するのは、レポートの提出期限を守り、キャンパスライフの様々な誘惑に負けずに勉強に集中できる学生だからです。
              </p>
              <p className="text-xl">
                同じく誠実性の低い人が大学卒業後にいい職に就けない理由も明快です。衝動的でやる気がなく、軽率で、面接にも遅刻してくるような学生を、企業は採用しないからです。
              </p>
            </div>
            <div className="flex flex-col gap-5 border-l-2 border-cyan-600 pl-10">
              <h3 className="text-3xl font-medium">
                「ルーチンと規律は、創造的な思考を支える土台となる」
              </h3>
              <p className="text-lg text-neutral-500">トニ・モリスン</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-xl">
                開放性が高い人は、情緒安定性が低い人と同じく、不安や抑うつ、敵意などのネガティブな感情を多く体験します。しかし、情緒安定性が低い人とは異なり、喜びや驚きなどのポジティブな感情も多く経験します。特に美しいものに触れたときに鳥肌が立つことが多いのも興味深い点です。
              </p>
              <p className="text-xl">
                対照的に、開放性が低い人は、安定性や信頼性が高く、一貫した行動や計画を守ることで効率的に物事を進めることができます。リスク管理能力が高く、深い専門知識や技術を蓄積する傾向があります。また、伝統や価値観を大切にし、文化やコミュニティの一体感を保つ役割を果たします。
              </p>
            </div>
            <div className="border-l-2 border-amber-500 bg-amber-500 bg-opacity-5 px-12 py-7">
              <p className="text-xl">
                開放性が高い人は幸福について、複雑な感覚を持っている
              </p>
            </div>
          </div>
          <div>&nbsp;</div>
        </div>
      </>
    );
  }

  const {
    openness: { per, type, title, positive, negative },
  }: KartesProps = kartesData.value;

  const isPositive = type === positive[0];
  return (
    <>
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
      <div className="grid grid-cols-[2fr_5fr_2fr]">
        <div>&nbsp;</div>
        <div className="my-24 flex flex-col gap-16 text-neutral-800">
          <h2 className="border-b-2 border-neutral-300 py-4 text-5xl font-medium">
            開放性
          </h2>
          <p className="text-xl">
            開放性は、新しい考えや人間関係、環境をどの程度受け入れられるかを表すもので、クリエイティビティと深く結びついています。開放性が高い人は、芸術や文化に強い興味を示し、エキゾチックな味わいや匂いを好み、世界を複雑なものとして捉えています。対照的に、開放性が低い人は、新しい何かを試すことに抵抗を感じ、いつも通りの行動を好み、エキゾチックな誘惑にも魅力を感じません。
          </p>
          <div className="flex flex-col gap-5 border-l-2 border-cyan-600 pl-10">
            <h3 className="text-3xl font-medium">
              「新しいアイデアを受け入れることで、世界を広げることができる」
            </h3>
            <p className="text-lg text-neutral-500">スティーブ・ジョブズ</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-xl">
              誠実性は勉強や仕事に大きく影響します。例えば、ある大学生の成績を予測するとしたら、彼の高校時代の成績を見るよりも、誠実性を見た方が正確に予測できます。理由は単純で、大学側が評価するのは、レポートの提出期限を守り、キャンパスライフの様々な誘惑に負けずに勉強に集中できる学生だからです。
            </p>
            <p className="text-xl">
              同じく誠実性の低い人が大学卒業後にいい職に就けない理由も明快です。衝動的でやる気がなく、軽率で、面接にも遅刻してくるような学生を、企業は採用しないからです。
            </p>
          </div>
          <div className="flex flex-col gap-5 border-l-2 border-cyan-600 pl-10">
            <h3 className="text-3xl font-medium">
              「ルーチンと規律は、創造的な思考を支える土台となる」
            </h3>
            <p className="text-lg text-neutral-500">トニ・モリスン</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-xl">
              開放性が高い人は、情緒安定性が低い人と同じく、不安や抑うつ、敵意などのネガティブな感情を多く体験します。しかし、情緒安定性が低い人とは異なり、喜びや驚きなどのポジティブな感情も多く経験します。特に美しいものに触れたときに鳥肌が立つことが多いのも興味深い点です。
            </p>
            <p className="text-xl">
              対照的に、開放性が低い人は、安定性や信頼性が高く、一貫した行動や計画を守ることで効率的に物事を進めることができます。リスク管理能力が高く、深い専門知識や技術を蓄積する傾向があります。また、伝統や価値観を大切にし、文化やコミュニティの一体感を保つ役割を果たします。
            </p>
          </div>
          <div className="border-l-2 border-amber-500 bg-amber-500 bg-opacity-5 px-12 py-7">
            <p className="text-xl">
              開放性が高い人は幸福について、複雑な感覚を持っている
            </p>
          </div>
        </div>
        <div className="w-full px-3">
          <article className="mt-10 flex flex-col gap-3 rounded-md bg-amber-100 p-3 shadow-sm">
            <h3 className="flex justify-center gap-2 text-base font-medium">
              <span className="text-amber-500">{per}%</span> {title[0]}
            </h3>
            <Progress
              value={per}
              color="bg-amber-500"
              style={`h-3 w-full ${!isPositive && "justify-end"}`}
            />
            <div className="flex justify-between text-sm">
              <p className="w-auto font-medium">{positive[1]}</p>
              <p className="w-auto font-medium">{negative[1]}</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default PersonalityOpenness;
