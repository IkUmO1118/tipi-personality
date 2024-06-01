import RegisterRight from "@/features/register/RegisterRight";
import { useQuote } from "@/features/register/useQuote";
import Logo from "@/ui/Logo";
import SkeltonQuote from "@/ui/SkeltonQuote";

function Register() {
  const { data, isLoading } = useQuote();
  return (
    <main className="grid h-screen grid-cols-2 p-3">
      <div className="flex h-full flex-col justify-between rounded-l-lg bg-neutral-900 px-10 py-7">
        <div className="items-start">
          <Logo mode="dark" />
        </div>
        <article className="flex flex-col gap-2 text-white">
          {isLoading ? (
            <SkeltonQuote />
          ) : (
            <>
              <h4 className="text-lg font-medium">
                &#34;{data?.content}&rdquo;
              </h4>
              <p className="text-sm">{data?.authorSlug}</p>
            </>
          )}
        </article>
      </div>
      <RegisterRight />
    </main>
  );
}

export default Register;
