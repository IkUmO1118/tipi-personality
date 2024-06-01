export type QuoteProps = {
  author: string;
  authorSlug: string;
  content: string;
  dateAdded: string;
  dateModified: string;
  length: number;
  tags: string[];
  _id: string;
};

export async function getQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const quote: QuoteProps = await response.json();

    return quote;
  } catch (err) {
    console.error(err);
    throw new Error("Quote could not be loaded!");
  }
}
