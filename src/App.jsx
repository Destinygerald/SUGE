import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar.jsx'
import { Footer } from './Components/Footer.jsx'
import LandingPage from './Pages/Landingpage/Page.jsx'
import AboutUs from './Pages/AboutUs/Page.jsx'
import Service from './Pages/Service/Page.jsx'


function App() {
  return (
   <div className='app'>
    <Navbar />

    <Routes>
      <Route path='*' element={<LandingPage />} />
      <Route path='/' element={<LandingPage />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/service' element={<Service />} />
    </Routes>

    <Footer />
   </div>
  )
}

export default App
