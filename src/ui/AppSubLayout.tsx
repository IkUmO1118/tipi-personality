import { Outlet } from "react-router-dom";

function AppSubLayout() {
  return (
    <main className="grid h-screen grid-cols-2 p-3">
      <Outlet />
    </main>
  );
}

export default AppSubLayout;
