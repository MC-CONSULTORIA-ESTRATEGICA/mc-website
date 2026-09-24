import { Routes, Route, Navigate } from "react-router-dom";

import PublicLayout from "./components/layout/PublicLayout";
import HomePage from "./pages/landing/HomePage";
import AboutPage from "./pages/landing/AboutPage";
import ServicesPage from "./pages/landing/ServicesPage";
import ContactPage from "./pages/landing/ContactPage";
import BlogPage from "./pages/landing/BlogPage";
import NewsPage from "./pages/landing/NewsPage";

import WhatsAppButton from "./components/whatsapp";
import LinkedInButton from "./components/linkedin";
import CallButton from "./components/call";
import ChatbotButton from "./components/bot";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" replace />} />

        <Route element={<PublicLayout />}>
          <Route path="/inicio" element={<HomePage />} />
          <Route path="/nosotros" element={<AboutPage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/noticias" element={<NewsPage />} />
          <Route path="/contacto" element={<ContactPage />} />
        </Route>
      </Routes>

      {/* BOTONES FLOTANTES */}
      <div
        className="
          fixed
          bottom-5
          right-5
          z-[9999]
          flex
          flex-col
          items-end
          gap-2
        "
      >
        <CallButton />
        <LinkedInButton />
        <WhatsAppButton />
        <ChatbotButton />
      </div>
    </>
  );
}

export default App;