import "./App.css";
import LandingPage from "./views/landingPage/LandingPage";
import BookingPage from "./views/bookingPage/BookingPage";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Testimonials from "./views/landingPage/components/Testimonials";
import Services from "./views/landingPage/components/Services";
import ErrorPage from "./ErrorPage";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/landingPage" element={<LandingPage />} />
          <Route path="/bookingPage" element={<BookingPage />} />
          <Route path="/ourServices" element={<Services />} />
          <Route path="/about" element={<Testimonials />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
