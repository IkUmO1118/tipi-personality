export function useConbiOfPersonality(
  extraversionPer: number,
  agreeablenessPer: number,
  conscientiousnessPer: number,
  opennessPer: number,
  emotionalStabilityPer: number,
) {
  // Helper function to determine if a trait is high or low
  function isHigh(trait: number) {
    return trait >= 50 ? "H" : "L";
  }

  // Create a hash key based on the personality traits
  const key =
    isHigh(conscientiousnessPer) +
    isHigh(agreeablenessPer) +
    isHigh(extraversionPer) +
    isHigh(emotionalStabilityPer) +
    isHigh(opennessPer);

  // Define the hash map for personality combinations
  const personalityMap: Record<
    string,
    { personalityTrait: string; Example: string }
  > = {
    HHHHH: {
      personalityTrait:
        "リーダータイプ、社交的で創造力があり、計画的でストレスに強く、協力的で周囲との関係を重視する。",
      Example:
        "プロジェクトマネージャーとして、チームをまとめ、革新的なアイデアを取り入れながらプロジェクトを成功に導く。",
    },
    HHHHL: {
      personalityTrait:
        "社交的で信頼されるリーダー、計画的で安定しており、伝統的なアプローチを重んじる。",
      Example:
        "企業の管理職として、既存のプロセスを守りつつ、チームを効率的に運営する。",
    },
    HHHLH: {
      personalityTrait:
        "クリエイティブなリーダー、革新的で協力的だが、感情的な波がある。",
      Example:
        "スタートアップのリーダーとして、新しいアイデアを導入しながらチームを統率するが、時折ストレスに影響される。",
    },
    HHHLL: {
      personalityTrait:
        "伝統を重んじる社交的なリーダー、計画的で協力的だが、感情的に不安定。",
      Example:
        "保守的な企業のリーダーとして、既存の枠組みを守りながらチームを指導するが、プレッシャーに弱い。",
    },
    HHLHH: {
      personalityTrait:
        "信頼できるクリエイティブなサポーター、計画的で協力的、新しいアイデアにオープンで感情的に安定。",
      Example:
        "リサーチチームの一員として、革新的な研究を行いながらチームメンバーと協力。",
    },
    HHLHL: {
      personalityTrait:
        "信頼できる伝統的なサポーター、計画的で協力的、内向的で感情的に安定。",
      Example:
        "バックオフィスのスタッフとして、定められたプロセスに従いながら正確に業務をこなす。",
    },
    HHLLH: {
      personalityTrait:
        "クリエイティブな内向的サポーター、計画的で協力的だが、感情の起伏が激しい。",
      Example:
        "デザイン部門の一員として、革新的なデザインを作成するが、時折ストレスに影響される。",
    },
    HHLLL: {
      personalityTrait:
        "伝統的で内向的なサポーター、計画的で協力的だが、感情的に不安定。",
      Example:
        "保守的な企業のバックオフィススタッフとして、既存のプロセスに従うが、プレッシャーに弱い。",
    },
    HLHHH: {
      personalityTrait:
        "戦略的で社交的なイノベーター、計画的で安定しており、革新的だが協力性が低い。",
      Example:
        "戦略コンサルタントとして、独自のアイデアを提案し、クライアントを導くが、他人との協力は少ない。",
    },
    HLHHL: {
      personalityTrait:
        "計画的で社交的なリーダー、安定しており伝統的なアプローチを好むが、協力性が低い。",
      Example:
        "営業マネージャーとして、チームを効率的に運営し、既存のプロセスを守るが、個別のアイデアを重視する。",
    },
    HLHLH: {
      personalityTrait:
        "革新的で社交的なリーダー、計画的だが感情的に不安定で協力性が低い。",
      Example:
        "新製品開発のリーダーとして、革新的なアイデアを推進するが、ストレスに弱く他人と対立しやすい。",
    },
    HLHLL: {
      personalityTrait:
        "伝統的で社交的なリーダー、計画的で感情的に不安定、協力性が低い。",
      Example:
        "伝統的な企業の営業マネージャーとして、既存のプロセスを守るが、感情の起伏が激しい。",
    },
    HLLHH: {
      personalityTrait:
        "計画的で独立志向のクリエイター、内向的で革新的だが協力性が低い。",
      Example:
        "ソフトウェアデベロッパーとして、独自のプログラムを開発し、新しい技術を取り入れるが、チームワークは少ない。",
    },
    HLLHL: {
      personalityTrait:
        "計画的で内向的な個人主義者、伝統的で安定しているが協力性が低い。",
      Example:
        "研究者として、個別のプロジェクトに集中し、正確なデータを提供するが、他人とあまり協力しない。",
    },
    HLLLH: {
      personalityTrait:
        "計画的で革新的な個人主義者、内向的で感情的に不安定、協力性が低い。",
      Example:
        "フリーランスのデザイナーとして、独自のデザインを作成するが、プレッシャーに弱く他人と対立しやすい。",
    },
    HLLLL: {
      personalityTrait:
        "計画的で内向的な個人主義者、伝統的で感情的に不安定、協力性が低い。",
      Example:
        "バックオフィスのスタッフとして、既存のプロセスに従うが、プレッシャーに弱く他人とあまり協力しない。",
    },
    LHHHH: {
      personalityTrait:
        "社交的でクリエイティブなフォロワー、革新的で協力的だが計画性が低い。",
      Example:
        "イベントプランナーとして、新しいアイデアを取り入れ、チームと協力してイベントを成功させるが、計画性に欠ける。",
    },
    LHHHL: {
      personalityTrait:
        "社交的で伝統的なフォロワー、協力的で感情的に安定しているが計画性が低い。",
      Example:
        "営業職として、既存のプロセスに従いながらチームと協力して成果を上げるが、計画性に欠ける。",
    },
    LHHLH: {
      personalityTrait:
        "感受性の高いクリエイティブなフォロワー、革新的で協力的だが感情の起伏が激しく計画性が低い。",
      Example:
        "アーティストとして、チームと協力しながら新しい作品を作り出すが、プレッシャーに弱い。",
    },
    LHHLL: {
      personalityTrait:
        "感受性の高い伝統的なフォロワー、協力的で社交的だが感情の起伏が激しく計画性が低い。",
      Example:
        "カスタマーサポートとして、顧客と親しく接しながら業務を行うが、ストレスに弱く計画性に欠ける。",
    },
    LHLHH: {
      personalityTrait:
        "安定したクリエイティブなフォロワー、協力的で内向的、革新的だが計画性が低い。",
      Example:
        "リサーチチームのメンバーとして、革新的な研究を行いながらチームメンバーと協力するが、計画性に欠ける。",
    },
    LHLHL: {
      personalityTrait:
        "安定した伝統的なフォロワー、協力的で内向的、感情的に安定しているが計画性が低い。",
      Example:
        "バックオフィスのスタッフとして、定められたプロセスに従いながら正確に業務をこなすが、計画性に欠ける。",
    },
    LHLLH: {
      personalityTrait:
        "感受性の高いクリエイティブな内向的フォロワー、協力的で革新的だが感情の起伏が激しく計画性が低い。",
      Example:
        "デザイン部門の一員として、革新的なデザインを作成するが、時折ストレスに影響される。",
    },
    LHLLL: {
      personalityTrait:
        "感受性の高い伝統的な内向的フォロワー、協力的で内向的、感情的に不安定だが計画性が低い。",
      Example:
        "カスタマーサポートとして、顧客と親しく接しながら業務を行うが、ストレスに弱く計画性に欠ける。",
    },
    LLHHH: {
      personalityTrait:
        "独創的で社交的な冒険者、革新的で感情的に安定しているが協力性と計画性が低い。",
      Example:
        "起業家として、新しいビジネスを始め、他人との協力をあまり必要としないが、安定している。",
    },
    LLHHL: {
      personalityTrait:
        "社交的で伝統的な冒険者、安定しているが協力性と計画性が低い。",
      Example:
        "営業職として、顧客との関係を築きながら成果を上げるが、計画性に欠ける。",
    },
    LLHLH: {
      personalityTrait:
        "社交的で革新的な冒険者、感情の起伏が激しいが計画性と協力性が低い。",
      Example:
        "イベントプランナーとして、新しいアイデアを取り入れ、チームと協力してイベントを成功させるが、計画性に欠ける。",
    },
    LLHLL: {
      personalityTrait:
        "社交的で伝統的な冒険者、感情の起伏が激しいが計画性と協力性が低い。",
      Example:
        "営業職として、顧客との関係を築きながら成果を上げるが、計画性に欠ける。",
    },
    LLLLH: {
      personalityTrait:
        "独立した革新的な個人主義者、内向的で感情的に安定しているが協力性と計画性が低い。",
      Example:
        "フリーランスのデザイナーとして、独自のデザインを作成し、新しい技術を取り入れるが、チームワークは少ない。",
    },
    LLLHL: {
      personalityTrait:
        "独立した伝統的な個人主義者、内向的で感情的に安定しているが協力性と計画性が低い。",
      Example:
        "研究者として、個別のプロジェクトに集中し、正確なデータを提供するが、他人とあまり協力しない。",
    },
    LLLHH: {
      personalityTrait:
        "革新的で内向的な個人主義者、感情の起伏が激しいが協力性と計画性が低い。",
      Example:
        "フリーランスのデザイナーとして、独自のデザインを作成するが、ストレスに弱く他人と対立しやすい。",
    },
    LLLLL: {
      personalityTrait:
        "伝統的で内向的な個人主義者、感情の起伏が激しいが協力性と計画性が低い。",
      Example:
        "バックオフィスのスタッフとして、既存のプロセスに従うが、プレッシャーに弱く他人とあまり協力しない。",
    },
  };

  // Return the matching personality combination
  return (
    personalityMap[key] || {
      personalityTrait: "未定義",
      Example: "該当するpersonalityTraitが見つかりません。",
    }
  );
}
