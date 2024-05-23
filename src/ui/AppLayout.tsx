import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  const isResult: string | null = sessionStorage.getItem("result-diagnosis");
  const styleGrid =
    isResult !== "true"
      ? "grid-rows-[5rem_1fr_4.9rem]"
      : "grid-rows-[5rem_1fr]";

  return (
    <div className={`grid h-screen ${styleGrid}`}>
      <Header />
      <main>
        <Outlet />
      </main>
      {isResult !== "true" && <Footer />}
    </div>
  );
}

export default AppLayout;
