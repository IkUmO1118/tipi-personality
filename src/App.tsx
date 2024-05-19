import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import Diagnosis from "./pages/Diagnosis";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
        </Route>

        <Route path="register" element={<Register />} />
        <Route path="diagnosis" element={<Diagnosis />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
