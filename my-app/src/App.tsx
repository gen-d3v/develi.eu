import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/navbar/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  );
}
