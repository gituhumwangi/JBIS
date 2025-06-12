import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import RegistrationPage from './pages/RegistrationPage'
import { Routes, Route } from 'react-router-dom'
import EventsPage from './pages/EventsPage'
import AgendaPage from './pages/AgendaPage'
import FAQs from './pages/FAQs'
import SponsorsPage from './pages/Sponsers'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/events" element={<EventsPage />} />
      <Route path="/agenda" element={<AgendaPage />} />
      <Route path="/faqs" element={<FAQs />} /> 
      <Route path="/sponsors" element={<SponsorsPage />} />
      {/* Add more routes as needed */}
    </Routes>
    </>
  )
}

export default App
