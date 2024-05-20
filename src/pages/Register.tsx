import RegisterPage from "@/features/register/RegisterPage";
import Logo from "@/ui/Logo";

function Register() {
  return (
    <main className="grid h-screen grid-cols-2 p-3">
      <div className="flex h-full flex-col justify-between rounded-l-lg bg-neutral-900 p-7">
        <div className="items-start">
          <Logo mode="dark" />
        </div>
        <article className="flex flex-col gap-2 text-white">
          <h4 className="text-lg font-medium">
            &#34;This library has saved me countless hours of work and helped me
            deliver stunning designs to my clients faster than ever
            before.&rdquo;
          </h4>
          <p className="text-sm">Sofia Davis</p>
        </article>
      </div>
      <div className="h-full ">
        <RegisterPage />
      </div>
    </main>
  );
}

export default Register;
