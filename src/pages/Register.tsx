import RegisterForm from "@/features/register/RegisterForm";
import Logo from "@/ui/Logo";

function Register() {
  return (
    <>
      <div className="flex h-full flex-col justify-between rounded-l-lg bg-neutral-900 px-10 py-7">
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
        <RegisterForm />
      </div>
    </>
  );
}

export default Register;
