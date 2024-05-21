import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import Diagnosis from "./pages/Diagnosis";
import About from "./pages/About";
import Result from "./pages/Result";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Testimonials from "./pages/Testimonials";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="Result" element={<Result />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>

        <Route path="register" element={<Register />} />
        <Route path="diagnosis" element={<Diagnosis />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
