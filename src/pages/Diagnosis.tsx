import DiagnosisPage from "@/features/diagnosis/DiagnosisPage";
import Logo from "@/ui/Logo";

function Diagnosis() {
  return (
    <main className="grid h-screen grid-cols-2 p-3">
      <div className="relative grid h-full grid-rows-[1fr_5fr_1fr_6fr] rounded-l-lg bg-neutral-900 px-14 py-7">
        <Logo mode="dark" />

        <p className="mb-4 self-end text-2xl font-medium text-neutral-300">
          step 1/10
        </p>
        <h2 className="text-4xl font-bold text-white">
          自分は活発で、外向的だと思う
        </h2>
      </div>
      <DiagnosisPage />
    </main>
  );
}

export default Diagnosis;
