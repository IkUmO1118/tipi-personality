import PersonalityBaseArticle from "./PersonalityBaseArticle";
import TIPIImage from "/personality-color-image.svg";

function PersonalityBase() {
  return (
    <div className="mx-16 grid h-full grid-cols-3 py-16">
      <div className="flex flex-col items-center justify-between">
        <PersonalityBaseArticle
          title="誠実性"
          style="text-purple-700 hover:decoration-purple-700 hover:underline"
          description="誠実性は、幸福度や仕事、勉強の成績に大きく影響します。また健康や長寿にも影響します。"
          path="conscientiousness"
        />
        <PersonalityBaseArticle
          title="開放性"
          style="text-amber-500 hover:decoration-amber-500 hover:underline"
          description="開放性はクリエイティビティと深く結びついています。またこのパーソナリティ特性は遺伝的要因が高いことが分かっています。"
          path="openness"
        />
        <PersonalityBaseArticle
          title="情緒安定性"
          style="text-red-400 hover:decoration-red-400 hover:underline"
          description="情緒安定性は、幸福と様々な面で結びついています。また情緒安定性は、他のパーソナリティ特性を増幅するアンプのような役割も担っています。"
          path="emotionalStability"
        />
      </div>
      <div className="flex items-center">
        <img src={TIPIImage} alt="TIPI main image" />
      </div>
      <div className="flex flex-col items-center justify-center gap-20">
        <PersonalityBaseArticle
          title="外向性"
          style="text-cyan-600 hover:decoration-cyan-600 hover:underline"
          description="外向性は研究対象になる事が最も多いパーソナリティ特性であり、幸福度についてカギを握っています。またこのパーソナリティ特性は遺伝的要因が高いことが知られています。"
          path="extraversion"
        />
        <PersonalityBaseArticle
          title="協調性"
          style="text-emerald-600 hover:decoration-emerald-600 hover:underline"
          description="協調性は、人の第一印象など、他社の印象を形成するうえで重要な指標です。しかし組織内での成功と一番関連性が低いのも協調性です。"
          path="agreeableness"
        />
      </div>
    </div>
  );
}

export default PersonalityBase;
