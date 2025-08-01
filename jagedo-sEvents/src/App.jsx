import Home from './pages/Home'
import './App.css'
import RegistrationPage from './pages/RegistrationPage'
import { Routes, Route } from 'react-router-dom'
// import EventsPage from './pages/EventsPage'
import AgendaPage from './pages/AgendaPage'
import FAQs from './pages/FAQs'
import SponsorsPage from './pages/Sponsers'
import PastEvents from './pages/PastEvents'
import SponsersRegistration from './pages/SponsersRegistration'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<RegistrationPage />} />
      {/* <Route path="/events" element={<EventsPage />} /> */}
      <Route path="/agenda" element={<AgendaPage />} />
      <Route path="/faqs" element={<FAQs />} /> 
      <Route path="/sponsors" element={<SponsorsPage />} />
      <Route path="/pastevents" element={<PastEvents />} />
      <Route path="sponsersregistration" element={<SponsersRegistration />} />
    </Routes>
    </>
  )
}

export default App