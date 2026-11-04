import { Route, Routes } from "react-router";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/homepage/HomePage";

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
