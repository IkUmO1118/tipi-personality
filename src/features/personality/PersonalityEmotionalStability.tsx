import { useGetSession } from "@/hooks/useSessions";
import { KartesProps } from "@/utils/helper";
import PersonalityProsgressSection from "./PersonalityProsgressSection";

function PersonalityEmotionalStability() {
  const kartesData = JSON.parse(useGetSession("kartes-data"));

  if (!kartesData) {
    return (
      <>
        <div className="flex h-64 justify-between gap-32 bg-red-400 bg-opacity-70 px-16">
          <div className="flex flex-col self-center font-mono">
            <h1 className="w-max text-7xl text-white">情緒安定性</h1>
            <span className="self-end text-3xl font-semibold text-neutral-800">
              の特徴や傾向
            </span>
          </div>
          <p className="self-center text-xl font-medium text-white">
            情緒安定性は、幸福と様々な面で結びついています。また情緒安定性は、他のパーソナリティ特性を増幅するアンプのような役割も担っています。
          </p>
        </div>
        <div className="grid grid-cols-[2fr_5fr_2fr]">
          <div>&nbsp;</div>
          <div className="my-24 flex flex-col gap-16 text-neutral-800">
            <h2 className="border-b-2 border-neutral-300 py-4 text-5xl font-medium">
              情緒安定性
            </h2>
            <p className="text-xl">
              情緒安定性の低さは、ネガティブな物事に対する感度に大きく関連しています。情緒安定性が低い人は危険を察知する脳の機関である「偏桃体」が過敏であることが分かっています。そのため他の人なら見過ごしてしまうような小さな危険の兆候を察知し、それについてい熟考する能力に優れています。
            </p>
            <div className="flex flex-col gap-5 border-l-2 border-cyan-600 pl-10">
              <h3 className="text-3xl font-medium">
                「情緒の安定は、幸福と成功の基盤である」
              </h3>
              <p className="text-lg text-neutral-500">アリスト・テレス</p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-xl">
                情緒安定性が低い人は、他の人より危険に敏感なため、不安や抑うつ、自意識過剰、感情的なもろさといった問題を抱えやすくなります。対照的に情緒安定性が高い人は浮き沈みの少ない、安定した精神状態で日常生活を過ごせます。
              </p>
              <p className="text-xl">
                情緒安定性は他のパーソナリティ特性を増幅するアンプのような役割も担っています。例えば誠実性が高い人は、情緒が安定している状態の時に誠実性がさらに高まります。協調性と情緒安定性がどちらも低い人は、他社との間に対立関係を生み出しやすくなります。
              </p>
            </div>
            <div className="flex flex-col gap-5 border-l-2 border-cyan-600 pl-10">
              <h3 className="text-3xl font-medium">
                「感情の揺れ動きは、人生を豊かにする色彩である」
              </h3>
              <p className="text-lg text-neutral-500">
                ヴィンセント・ヴァン・ゴッホ
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-xl">
                情緒安定性が低い人が抱えている様々な問題の事を考えると、彼らの生活の質や幸福度は低いものに見えますが、狩猟採取生活を送っていた時代の人類が生き延びるために重要な役割を担っていました。
              </p>
              <p className="text-xl">
                この時代、周囲には敵や危険が多かったため、彼らは危険を早く察知して集団内に警告することができ、自らも危険から逃れやすい立場にありました。情緒安定性が高い人たちは、普段幸せに暮らしていても、逃げ遅れて肉食動物の餌食になる可能性が高かったと考えられるのです。
              </p>
            </div>
            <div className="border-l-2 border-red-400 bg-red-400 bg-opacity-5 px-12 py-7">
              <p className="text-xl">
                現代では、当時とは危険の性質が大きく異なっています。それでも危険に敏感に反応する遺伝子を持った人は、まだ多く存在しています。
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
      <div className="flex h-64 justify-between gap-32 bg-red-400 bg-opacity-70 px-16">
        <div className="flex flex-col self-center font-mono">
          <h1 className="w-max text-7xl text-white">情緒安定性</h1>
          <span className="self-end text-3xl font-semibold text-neutral-800">
            の特徴や傾向
          </span>
        </div>
        <p className="self-center text-xl font-medium text-white">
          情緒安定性は、幸福と様々な面で結びついています。また情緒安定性は、他のパーソナリティ特性を増幅するアンプのような役割も担っています。
        </p>
      </div>
      <div className="grid grid-cols-[2fr_5fr_2fr]">
        <div>&nbsp;</div>
        <div className="my-24 flex flex-col gap-16 text-neutral-800">
          <h2 className="border-b-2 border-neutral-300 py-4 text-5xl font-medium">
            情緒安定性
          </h2>
          <p className="text-xl">
            情緒安定性の低さは、ネガティブな物事に対する感度に大きく関連しています。情緒安定性が低い人は危険を察知する脳の機関である「偏桃体」が過敏であることが分かっています。そのため他の人なら見過ごしてしまうような小さな危険の兆候を察知し、それについてい熟考する能力に優れています。
          </p>
          <div className="flex flex-col gap-5 border-l-2 border-cyan-600 pl-10">
            <h3 className="text-3xl font-medium">
              「情緒の安定は、幸福と成功の基盤である」
            </h3>
            <p className="text-lg text-neutral-500">アリスト・テレス</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-xl">
              情緒安定性が低い人は、他の人より危険に敏感なため、不安や抑うつ、自意識過剰、感情的なもろさといった問題を抱えやすくなります。対照的に情緒安定性が高い人は浮き沈みの少ない、安定した精神状態で日常生活を過ごせます。
            </p>
            <p className="text-xl">
              情緒安定性は他のパーソナリティ特性を増幅するアンプのような役割も担っています。例えば誠実性が高い人は、情緒が安定している状態の時に誠実性がさらに高まります。協調性と情緒安定性がどちらも低い人は、他社との間に対立関係を生み出しやすくなります。
            </p>
          </div>
          <div className="flex flex-col gap-5 border-l-2 border-cyan-600 pl-10">
            <h3 className="text-3xl font-medium">
              「感情の揺れ動きは、人生を豊かにする色彩である」
            </h3>
            <p className="text-lg text-neutral-500">
              ヴィンセント・ヴァン・ゴッホ
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-xl">
              情緒安定性が低い人が抱えている様々な問題の事を考えると、彼らの生活の質や幸福度は低いものに見えますが、狩猟採取生活を送っていた時代の人類が生き延びるために重要な役割を担っていました。
            </p>
            <p className="text-xl">
              この時代、周囲には敵や危険が多かったため、彼らは危険を早く察知して集団内に警告することができ、自らも危険から逃れやすい立場にありました。情緒安定性が高い人たちは、普段幸せに暮らしていても、逃げ遅れて肉食動物の餌食になる可能性が高かったと考えられるのです。
            </p>
          </div>
          <div className="border-l-2 border-red-400 bg-red-400 bg-opacity-5 px-12 py-7">
            <p className="text-xl">
              現代では、当時とは危険の性質が大きく異なっています。それでも危険に敏感に反応する遺伝子を持った人は、まだ多く存在しています。
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

export default PersonalityEmotionalStability;
