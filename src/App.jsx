import "./App.css"
import Navbar from "./layout/Navbar"
import HeroSection from "./layout/HeroSection"
import TrustedCompany from "./layout/TrustedCompany"
import WhyPresensia from "./layout/WhyPresensia"
import UserGuide from "./layout/UserGuide"
import DeveloperStory from "./layout/DeveloperStory"
import Faq from "./layout/Faq"
import DownloadNow from "./layout/DownloadNow"
import Footer from "./layout/Footer"
import ScrollToTop from "./element/ScrollToTop"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register"
import SuccessRegister from "./pages/SuccessRegister"
import Login from "./pages/Login"
import SuccessLogin from "./pages/SuccessLogin"

function Home() {
  useEffect(() => {
    AOS.init({ duration: 700 })
  }, [])
  return (
    <div className="no-scrollbar overflow-hidden" id="top-page">
      <Navbar />
      <HeroSection />
      <TrustedCompany />
      <WhyPresensia />
      <UserGuide />
      <DeveloperStory />
      <Faq />
      <DownloadNow />
      <Footer />
      <ScrollToTop />
    </div>
  )
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success-register" element={<SuccessRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/success-login" element={<SuccessLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
