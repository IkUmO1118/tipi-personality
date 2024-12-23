import { quotes, QuotesProps } from "@/data/data-quotes";
import RegisterRight from "@/features/register/RegisterRight";
import Logo from "@/ui/Logo";

function Register() {
  const randomQuote: QuotesProps = quotes[Math.floor(Math.random() * 50)];

  return (
    <main className="grid h-screen grid-cols-2 p-3">
      <div className="flex h-full flex-col justify-between rounded-l-lg bg-neutral-900 px-10 py-7">
        <div className="items-start">
          <Logo mode="dark" />
        </div>
        <article className="flex flex-col gap-2 text-white">
          <>
            <h4 className="text-lg font-medium">
              &#34;{randomQuote.content}&rdquo;
            </h4>
            <p className="text-sm">{randomQuote.author}</p>
          </>
        </article>
      </div>
      <RegisterRight />
    </main>
  );
}

export default Register;
