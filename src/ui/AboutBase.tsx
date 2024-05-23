import AboutBaseArticle from "./AboutBaseArticle";
import TIPIImage from "/personality-color-image.svg";

function AboutBase() {
  return (
    <div className="mx-16 grid h-full grid-cols-3 py-16">
      <div className="flex flex-col items-center justify-between">
        <AboutBaseArticle
          title="誠実性"
          color="purple-700"
          description="誠実性は、幸福度や仕事、勉強の成績に大きく影響します。また健康や長寿にも影響します。"
        />
        <AboutBaseArticle
          title="開放性"
          color="amber-500"
          description="開放性はクリエイティビティと深く結びついています。またこのパーソナリティ特性は遺伝的要因が高いことが分かっています。"
        />
        <AboutBaseArticle
          title="情緒安定性"
          color="red-400"
          description="情緒安定性は、幸福と様々な面で結びついています。また情緒安定性は、他のパーソナリティ特性を増幅するアンプのような役割も担っています。"
        />
      </div>
      <div className="flex items-center">
        <img src={TIPIImage} alt="TIPI main image" />
      </div>
      <div className="flex flex-col items-center justify-center gap-20">
        <AboutBaseArticle
          title="外向性"
          color="cyan-600"
          description="外向性は研究対象になる事が最も多いパーソナリティ特性であり、幸福度についてカギを握っています。またこのパーソナリティ特性は遺伝的要因が高いことが知られています。"
        />
        <AboutBaseArticle
          title="協調性"
          color="emerald-600"
          description="協調性は、人の第一印象など、他社の印象を形成するうえで重要な指標です。しかし組織内での成功と一番関連性が低いのも協調性です。"
        />
      </div>
    </div>
  );
}

export default AboutBase;
