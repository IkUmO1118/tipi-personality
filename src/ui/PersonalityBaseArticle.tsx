import { useNavigate } from "react-router-dom";

type AboutBaseArticleProps = {
  title: string;
  description: string;
  style: string;
  path: string;
};

function PersonalityBaseArticle({
  title,
  description,
  style,
  path,
}: AboutBaseArticleProps) {
  const navigate = useNavigate();

  return (
    <article className=" w-11/12">
      <button
        className={`text-3xl font-bold ${style} underline-offset-4`}
        onClick={() => navigate(`/personality/${path}`)}
      >
        <span className="text-6xl">{title[0]}</span>
        {title.slice(1)}
      </button>
      <p className="px-8 py-2 text-xl text-neutral-800">{description}</p>
    </article>
  );
}

export default PersonalityBaseArticle;
