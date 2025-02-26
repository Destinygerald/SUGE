import './App.css'
import { useLayoutEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './Components/Navbar.jsx'
import { MobileSlider } from './Components/MobileSlider.jsx'
import { Footer } from './Components/Footer.jsx'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import QuoteSlice from './Redux/Quote.js'
import QuotePopupSlice from './Redux/QuotePopup.js'
import LoadPopupSlice from './Redux/LoadPopup.js'
import ScrollTop from './Components/ScrollToTop.jsx'
import LandingPage from './Pages/Landingpage/Page.jsx'
import AboutUs from './Pages/AboutUs/Page.jsx'
import Service from './Pages/Service/Page.jsx'
import Service_2 from './Pages/Services2/Page.jsx'
import Sustainability from './Pages/Sustainability/Page.jsx'
import Contact from './Pages/Contact/Page.jsx'
import Contact_2 from './Pages/Contact_2/Page.jsx'
import Quote from './Pages/Quote/Page.jsx'
import Admin from './Pages/Admin/Page.jsx'
import Blog from './Pages/Blog/Page.jsx'


const store = configureStore({
  reducer: {
    quote: QuoteSlice,
    quote_popup: QuotePopupSlice,
    loadPopup: LoadPopupSlice,
  }
})

function App() {

  const [ sliderOpen, setSliderOpen ] = useState(false)

  function openSlider () {
    setSliderOpen(true)
  }

  function closeSlider () {
    document.querySelector('.mobile-slider').classList.add('mobile-slider-exit-animation')
 
    setTimeout(() => {
      setSliderOpen(false)
    }, 1100)
    
  }

  return (
    <Provider store={store}>
       <div className='app'>

        <Navbar openSlider={openSlider} />
        
        {
          sliderOpen
          ?
          <MobileSlider sliderOpen={sliderOpen} closeSlider={closeSlider} />
          :
          <></>
        }

          <ScrollTop>
     
          <Routes>
            <Route path='*' element={<LandingPage />} />
            <Route path='/' element={<LandingPage />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/blog/*' element={<Blog />} />
            <Route path='/services' element={<Service />} />
            <Route path='/services/2' element={<Service_2 />} />
            <Route path='/sustainability' element={<Sustainability />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/contact/2' element={<Contact_2 />} />
            <Route path='/quote/*' element={<Quote />} />
            <Route path='/admin/*' element={<Admin />} />
          </Routes>

          </ScrollTop>


        <Footer />
       </div>
    </Provider>
  )
}

export default App