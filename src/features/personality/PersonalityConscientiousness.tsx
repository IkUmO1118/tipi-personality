import { useGetSession } from "@/hooks/useSessions";
import { KartesProps } from "@/utils/helper";
import PersonalityProsgressSection from "./PersonalityProsgressSection";

function PersonalityConscientiousness() {
  const kartesData = JSON.parse(useGetSession("kartes-data"));

  if (!kartesData) {
    return (
      <>
        <div className="flex h-64 justify-between gap-32 bg-purple-700 bg-opacity-70 px-16">
          <div className="flex flex-col self-center font-mono">
            <h1 className="w-max text-7xl text-white">誠実性</h1>
            <span className="self-end text-3xl font-semibold text-neutral-800">
              の特徴や傾向
            </span>
          </div>
          <p className="self-center text-xl font-medium text-white">
            誠実性は、幸福度や仕事、勉強の成績に大きく影響します。また健康や長寿にも影響します。
          </p>
        </div>
        <div className="grid grid-cols-[2fr_5fr_2fr]">
          <div>&nbsp;</div>
          <div className="my-24 flex flex-col gap-16 text-neutral-800">
            <h2 className="border-b-2 border-neutral-300 py-4 text-5xl font-medium">
              誠実性
            </h2>
            <p className="text-xl">
              誠実性のスコアが高い人には、「計画性がある」「規律正しい」「注意深い」「忍耐強い」「賢明」「非衝動的」などの特性が見られ、対称的にスコアが低い人には、「無秩序」「自発的」「不注意」「軽率」「衝動的」などの特性が見られます。
            </p>
            <div className="flex flex-col gap-5 border-l-2 border-cyan-600 pl-10">
              <h3 className="text-3xl font-medium">
                「自分に誠実でないものは、決して他人に誠実であり得ない」
              </h3>
              <p className="text-lg text-neutral-500">夏目漱石 ｢行人｣</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-xl">
                誠実性は勉強や仕事に大きく影響します。例えば、ある大学生の成績を予測するとしたら、彼の高校時代の成績を見るよりも、誠実性を見た方が正確に予測できます。理由は単純で、大学側が評価するのは、レポートの提出期限を守り、キャンパスライフの様々な誘惑に負けずに勉強に集中できる学生だからです。同じく誠実性の低い人が大学卒業後にいい職に就けない理由も明快です。衝動的でやる気がなく、軽率で、面接にも遅刻してくるような学生を、企業は採用しないからです。
              </p>
              <p className="text-xl">
                また誠実性が高く評価されていた人ほど長寿になることが分かっています。その理由は、誠実性が高い人は、生涯を通じて健康にいい習慣(歯磨き、運動など)を保つ傾向があるからだと考えられています。
              </p>
            </div>
            <div className="flex flex-col gap-5 border-l-2 border-cyan-600 pl-10">
              <h3 className="text-3xl font-medium">
                「人間は偽装と虚偽と偽善にほかならない、自分自身においても、また他人に対しても」
              </h3>
              <p className="text-lg text-neutral-500">パスカル ｢パンセ｣</p>
            </div>
            <p className="text-xl">
              ダニエル・ネトルによりば、誠実性の高い人は秩序だった予測しやすい環境にはうまく適応できますし、期限内でのタスクの完了が求められる状況では力を発揮します。しかし、変化が激しく混沌とした環境は苦手です。このような環境では誠実性が高くない人の方が、突然の変化に対応できるのです。
            </p>
            <div className="border-l-2 border-purple-700 bg-purple-700 bg-opacity-5 px-12 py-7">
              <p className="text-xl">
                誠実性を連続的なものとして捉え、人は必ずその尺度のどこかに位置するものとしています。
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-xl">
                例えばジャズの即興演奏では、慣れ親しんだ定番のレパートリーと違って、ミュージシャンにはクリエイティビティを発揮することが求められます。誠実性が高いジャズミュージシャンは、スタンダードな曲目の演奏には長けていますが、他の奏者が発信したリズムや音階の微妙な変化を感じ取って即興で応じることは得意ではありません。
              </p>
              <p className="text-xl">
                秩序を重んじる堅苦しい組織にいるときと、即興のジャズ演奏のような振る舞いが求められる組織とでは、求められるパーソナリティも異なります。
              </p>
            </div>
          </div>
          <div>&nbsp;</div>
        </div>
      </>
    );
  }
  const {
    extraversion,
    agreeableness,
    conscientiousness,
    openness,
    emotionalStability,
  }: KartesProps = kartesData.value;

  return (
    <>
      <div className="flex h-64 justify-between gap-32 bg-purple-700 bg-opacity-70 px-16">
        <div className="flex flex-col self-center font-mono">
          <h1 className="w-max text-7xl text-white">誠実性</h1>
          <span className="self-end text-3xl font-semibold text-neutral-800">
            の特徴や傾向
          </span>
        </div>
        <p className="self-center text-xl font-medium text-white">
          誠実性は、幸福度や仕事、勉強の成績に大きく影響します。また健康や長寿にも影響します。
        </p>
      </div>
      <div className="grid grid-cols-[2fr_5fr_2fr]">
        <div>&nbsp;</div>
        <div className="my-24 flex flex-col gap-16 text-neutral-800">
          <h2 className="border-b-2 border-neutral-300 py-4 text-5xl font-medium">
            誠実性
          </h2>
          <p className="text-xl">
            誠実性のスコアが高い人には、「計画性がある」「規律正しい」「注意深い」「忍耐強い」「賢明」「非衝動的」などの特性が見られ、対称的にスコアが低い人には、「無秩序」「自発的」「不注意」「軽率」「衝動的」などの特性が見られます。
          </p>
          <div className="flex flex-col gap-5 border-l-2 border-cyan-600 pl-10">
            <h3 className="text-3xl font-medium">
              「自分に誠実でないものは、決して他人に誠実であり得ない」
            </h3>
            <p className="text-lg text-neutral-500">夏目漱石 ｢行人｣</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-xl">
              誠実性は勉強や仕事に大きく影響します。例えば、ある大学生の成績を予測するとしたら、彼の高校時代の成績を見るよりも、誠実性を見た方が正確に予測できます。理由は単純で、大学側が評価するのは、レポートの提出期限を守り、キャンパスライフの様々な誘惑に負けずに勉強に集中できる学生だからです。同じく誠実性の低い人が大学卒業後にいい職に就けない理由も明快です。衝動的でやる気がなく、軽率で、面接にも遅刻してくるような学生を、企業は採用しないからです。
            </p>
            <p className="text-xl">
              また誠実性が高く評価されていた人ほど長寿になることが分かっています。その理由は、誠実性が高い人は、生涯を通じて健康にいい習慣(歯磨き、運動など)を保つ傾向があるからだと考えられています。
            </p>
          </div>
          <div className="flex flex-col gap-5 border-l-2 border-cyan-600 pl-10">
            <h3 className="text-3xl font-medium">
              「人間は偽装と虚偽と偽善にほかならない、自分自身においても、また他人に対しても」
            </h3>
            <p className="text-lg text-neutral-500">パスカル ｢パンセ｣</p>
          </div>
          <p className="text-xl">
            ダニエル・ネトルによりば、誠実性の高い人は秩序だった予測しやすい環境にはうまく適応できますし、期限内でのタスクの完了が求められる状況では力を発揮します。しかし、変化が激しく混沌とした環境は苦手です。このような環境では誠実性が高くない人の方が、突然の変化に対応できるのです。
          </p>
          <div className="border-l-2 border-purple-700 bg-purple-700 bg-opacity-5 px-12 py-7">
            <p className="text-xl">
              誠実性を連続的なものとして捉え、人は必ずその尺度のどこかに位置するものとしています。
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-xl">
              例えばジャズの即興演奏では、慣れ親しんだ定番のレパートリーと違って、ミュージシャンにはクリエイティビティを発揮することが求められます。誠実性が高いジャズミュージシャンは、スタンダードな曲目の演奏には長けていますが、他の奏者が発信したリズムや音階の微妙な変化を感じ取って即興で応じることは得意ではありません。
            </p>
            <p className="text-xl">
              秩序を重んじる堅苦しい組織にいるときと、即興のジャズ演奏のような振る舞いが求められる組織とでは、求められるパーソナリティも異なります。
            </p>
          </div>
        </div>
        <div className="w-full px-3">
          <PersonalityProsgressSection
            extraversion={extraversion}
            agreeableness={agreeableness}
            conscientiousness={conscientiousness}
            openness={openness}
            emotionalStability={emotionalStability}
          />
        </div>
      </div>
    </>
  );
}

export default PersonalityConscientiousness;
