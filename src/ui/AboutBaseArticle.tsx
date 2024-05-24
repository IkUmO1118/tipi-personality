type AboutBaseArticleProps = {
  title: string;
  description: string;
  style: string;
};

function AboutBaseArticle({
  title,
  description,
  style,
}: AboutBaseArticleProps) {
  return (
    <article className=" w-11/12">
      <h2 className={`text-3xl font-bold ${style}`}>
        <span className="text-6xl">{title[0]}</span>
        {title.slice(1)}
      </h2>
      <p className="px-8 py-2 text-xl text-neutral-800">{description}</p>
    </article>
  );
}

export default AboutBaseArticle;
