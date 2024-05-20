import TIPIImage from "/TIPI-image_color.svg";

function About() {
  return (
    <div className="mx-16 grid h-full grid-cols-3 py-16">
      <div className="flex flex-col items-center justify-between">
        <article className=" w-11/12">
          <h2 className="text-3xl font-bold text-purple-700">
            <span className="text-6xl">誠</span>実性
          </h2>
          <p className="px-8 py-2 text-xl text-neutral-800">
            誠実性は、幸福度や仕事、勉強の成績に大きく影響します。また健康や長寿にも影響します。
          </p>
        </article>
        <article className="w-11/12">
          <h2 className="text-3xl font-bold text-amber-500">
            <span className="text-6xl">開</span>放性
          </h2>
          <p className="px-8 py-2 text-xl text-neutral-800">
            開放性はクリエイティビティと深く結びついています。またこのパーソナリティ特性は遺伝的要因が高いことが分かっています。
          </p>
        </article>
        <article className="w-11/12">
          <h2 className="text-3xl font-bold text-red-400">
            <span className="text-6xl">情</span>緒安定性
          </h2>
          <p className="px-8 py-2 text-xl text-neutral-800">
            情緒安定性は、幸福と様々な面で結びついています。また情緒安定性は、他のパーソナリティ特性を増幅するアンプのような役割も担っています。
          </p>
        </article>
      </div>
      <div className="flex items-center">
        <img src={TIPIImage} alt="TIPI main image" />
      </div>
      <div className="flex flex-col items-center justify-center gap-20">
        <article className=" w-11/12">
          <h2 className="text-3xl font-bold text-cyan-600">
            <span className="text-6xl">外</span>向性
          </h2>
          <p className="px-8 py-2 text-xl text-neutral-800">
            外向性は研究対象になる事が最も多いパーソナリティ特性であり、幸福度についてカギを握っています。またこのパーソナリティ特性は遺伝的要因が高いことが知られています。
          </p>
        </article>
        <article className=" w-11/12">
          <h2 className="text-3xl font-bold text-emerald-600">
            <span className="text-6xl">協</span>調性
          </h2>
          <p className="px-8 py-2 text-xl text-neutral-800">
            協調性は、人の第一印象など、他社の印象を形成するうえで重要な指標です。しかし組織内での成功と一番関連性が低いのも協調性です。
          </p>
        </article>
      </div>
    </div>
  );
}

export default About;
