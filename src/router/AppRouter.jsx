// AppRouter.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import RecognizerPage from "../pages/RecognizerPage";
import UploadPage from "../pages/UploadPage";
import HistoryPage from "../pages/HistoryPage";
import DictionaryPage from "../pages/DictionaryPage";
import Navbar from "../components/Navbar";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/recognizer" element={<RecognizerPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/dictionary" element={<DictionaryPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
