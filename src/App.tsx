import './App.css';
import LandingPage from './views/landingPage/LandingPage';
import BookingPage from './views/bookingPage/BookingPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Testimonials from './views/landingPage/components/Testimonials';
import Services from './views/landingPage/components/Services';
import ErrorPage from './ErrorPage';
import Footer from './Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>} />
          <Route path="/landingPage" element={<LandingPage></LandingPage>} />
          <Route path="/bookingPage/" element={<BookingPage></BookingPage>} />
          <Route path="/ourServices/" element={<Services></Services>} />
          <Route path="/about/" element={<Testimonials></Testimonials>} />
          <Route path="*" element={<ErrorPage></ErrorPage>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
