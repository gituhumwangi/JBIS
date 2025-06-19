import { Routes, Route } from "react-router-dom";
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import Attend from './pages/Attend';
import SummitProgram from './pages/SummitProgram';
import Footer from './components/Footer';
import NavBar from "./components/NavBar";
import Register from "./pages/Register"; 
import Partner from "./pages/Partner";
import SubPage from "./pages/sub-landing-page/SubMain";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Home />
              <AboutUs />
              <Attend />
              <SummitProgram />
              <Footer />
            </div>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/partner" element={<Partner />} />
        <Route path="/sublanding" element={<SubPage />} />
      </Routes>
    </>
  );
}

export default App;
