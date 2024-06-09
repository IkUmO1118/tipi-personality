import { KarteProps } from "@/utils/helper";
import PersonalityProgressArticle from "./PersonalityProgressArticle";
import { useConbiOfPersonality } from "./useConbiOfPersonality";
type PersonalityProsgressSectionType = {
  extraversion: KarteProps;
  agreeableness: KarteProps;
  conscientiousness: KarteProps;
  openness: KarteProps;
  emotionalStability: KarteProps;
};

function PersonalityProsgressSection({
  extraversion,
  agreeableness,
  conscientiousness,
  openness,
  emotionalStability,
}: PersonalityProsgressSectionType) {
  const { personalityTrait, Example } = useConbiOfPersonality(
    extraversion.per,
    agreeableness.per,
    conscientiousness.per,
    openness.per,
    emotionalStability.per,
  );
  return (
    <>
      <section className="mt-10 flex flex-col gap-1 rounded-md p-4 shadow-md">
        <PersonalityProgressArticle personality={extraversion} />
        <PersonalityProgressArticle personality={agreeableness} />
        <PersonalityProgressArticle personality={conscientiousness} />
        <PersonalityProgressArticle personality={openness} />
        <PersonalityProgressArticle personality={emotionalStability} />
        <div className="mt-10 flex flex-col gap-6 text-neutral-800">
          <div className="flex flex-col gap-2">
            <h2 className="border-b border-neutral-300 font-medium">
              性格特性
            </h2>
            <p>{personalityTrait}</p>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="border-b border-neutral-300 font-medium">具体例</h2>
            <p>{Example}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PersonalityProsgressSection;
