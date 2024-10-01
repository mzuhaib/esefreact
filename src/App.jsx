import { useState } from "react";
import "./assets/css/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Introduction from "./pages/About/Introduction";
import Objectives from "./pages/About/Objectives";
import Bod from "./pages/About/Bod";
import SocialMedia from "./pages/Media/SocialMedia";
import GCSpage from "./pages/Schemes/GCSpage";
import ESSpage from "./pages/Schemes/ESSpage";
import NSIpage from "./pages/Schemes/NSIpage";
import NewsPage from "./pages/Media/NewsPage";
import NewsDetail from "./pages/Media/NewsDetail";
import Gallery from "./pages/Media/Gallery";
import Tenders from "./pages/Downloads/Tenders";
import ContactUs from "./pages/ContactUs";
import Nfe from "./pages/Nfe";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About/Introduction" element={<Introduction />} />
        <Route path="/About/Objectives" element={<Objectives />} />
        <Route path="/About/Bod" element={<Bod />} />
        <Route path="/Nfe" element={<Nfe />} />
        <Route path="/Schemes/GCS" element={<GCSpage />} />
        <Route path="/Schemes/ESS" element={<ESSpage />} />
        <Route path="/Schemes/NSI" element={<NSIpage />} />
        <Route path="/Media/SocialMedia" element={<SocialMedia />} />
        <Route path="/Media/News" element={<NewsPage />} />
        <Route path="/Media/NewsDetail/:slug" element={<NewsDetail />} />
        <Route path="/Media/Gallery" element={<Gallery />} />
        <Route path="/Downloads/Tenders" element={<Tenders />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
