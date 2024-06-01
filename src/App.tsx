import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";
import Register from "./pages/Register";
import Diagnosis from "./pages/Diagnosis";
import Personality from "./pages/Personality";
import Result from "./pages/Result";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Testimonials from "./pages/Testimonials";
import ScoresContextProvider from "./contexts/scores-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import PersonalityDetails from "./pages/PersonalityDetails";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
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
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="personality" element={<Personality />} />
              <Route
                path="personality/:personalityId"
                element={<PersonalityDetails />}
              />
              <Route path="Result" element={<Result />} />
              <Route path="contact" element={<Contact />} />
              <Route path="privacy" element={<PrivacyPolicy />} />
              <Route path="testimonials" element={<Testimonials />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>

            <Route path="register" element={<Register />} />
            <Route path="diagnosis" element={<Diagnosis />} />
          </Routes>
        </BrowserRouter>
      </ScoresContextProvider>
    </QueryClientProvider>
  );
}

export default App;
