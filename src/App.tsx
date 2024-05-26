import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppMainLayout from "./ui/AppMainLayout";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import Diagnosis from "./pages/Diagnosis";
import About from "./pages/About";
import Result from "./pages/Result";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Testimonials from "./pages/Testimonials";
import ScoresContextProvider from "./contexts/scores-context";
import AppSubLayout from "./ui/AppSubLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ScoresContextProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppMainLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="Result" element={<Result />} />
              <Route path="contact" element={<Contact />} />
              <Route path="privacy" element={<PrivacyPolicy />} />
              <Route path="testimonials" element={<Testimonials />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>

            <Route element={<AppSubLayout />}>
              <Route path="register" element={<Register />} />
              <Route path="diagnosis" element={<Diagnosis />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ScoresContextProvider>
    </QueryClientProvider>
  );
}

export default App;
