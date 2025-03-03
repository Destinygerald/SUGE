import './App.css'
import { useState, Suspense, lazy } from 'react'
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
import { Loader } from './Components/Loader.jsx'

import LandingPage from './Pages/Landingpage/Page.jsx'
import AboutUs from './Pages/AboutUs/Page.jsx'
import Service from './Pages/Service/Page.jsx'
import Service_2 from './Pages/Services2/Page.jsx'
import Sustainability from './Pages/Sustainability/Page.jsx'
import Contact from './Pages/Contact/Page.jsx'
import Contact_2 from './Pages/Contact_2/Page.jsx'
import Quote from './Pages/Quote/Page.jsx'

import CookieConsent from 'react-cookie-consent'

import {fetchBlogs} from './Api/FetchData.js'

const Blog = lazy(() => import('./Pages/Blog/Page.jsx'))

import Admin from './Pages/Admin/Page.jsx'


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
    }, 500)
    
  }

  fetchBlogs()

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


          <Suspense fallback={<Loader />}>
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
          </Suspense>

        <CookieConsent 
          style={{   fontSize: 'clamp(.8rem, 1.08vw, 1rem)', borderTop:'1px solid rgb(120, 120, 120)', backgroundColor: '#0A0A0A'}} 
          location='bottom' 
          declineButtonText='Reject Cookies' 
          declineButtonStyle={{ background: '#fffff', padding: '10px 28px', fontSize: 'clamp(.72rem, 1.08vw, 1rem)', marginRight: '0px' }}
          buttonText='Accept all Cookies'  
          buttonStyle={{ background: '#2cb933', padding: '10px 28px', fontSize: 'clamp(.66rem, .9vw, .88rem)' }}
          cookieName='Suge_accept_cookie' 
          expires={150}>
            <span>This website uses cookies to help you have a superior and more admissible browsing experience on the website.</span>
        </CookieConsent>

        <Footer />
       </div>
    </Provider>
  )
}

export default App