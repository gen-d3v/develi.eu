import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/contactPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}
