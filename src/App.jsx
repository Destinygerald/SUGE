import './App.css'
import { useState, Suspense, lazy, useEffect } from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Navbar } from './Components/Navbar.jsx'
import { SearchBox } from './Components/Search.jsx'
import { MobileSlider } from './Components/MobileSlider.jsx'
import { Footer } from './Components/Footer.jsx'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import QuoteSlice from './Redux/Quote.js'
import QuotePopupSlice from './Redux/QuotePopup.js'
import LoadPopupSlice from './Redux/LoadPopup.js'
import ScrollTop from './Components/ScrollToTop.jsx'
import BlogDataSlice  from './Redux/Blogs.jsx'
import BlogListSlice  from './Redux/BlogList.jsx'
import BlogCreateSlice  from './Redux/AdminBlog.jsx'
import PopupListSlice  from './Redux/PopupList.jsx'
import { Loader } from './Components/Loader.jsx'
import { PrivacyPolicy } from './Components/PrivacyPolicy.jsx'

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
    blogData: BlogDataSlice,
    blogCreate: BlogCreateSlice,
    quote: QuoteSlice,
    quote_popup: QuotePopupSlice,
    loadPopup: LoadPopupSlice,
    blogList: BlogListSlice,
    admin_popups: PopupListSlice
  }
})

function App() {

  const [ sliderOpen, setSliderOpen ] = useState(false)
  const navigate = useNavigate()
	const { search, state, pathname } = useLocation()
  const { targetId } = state || {};

  
  
  function openSlider () {
    setSliderOpen(true)
  }

  function closeSlider () {
    document.querySelector('.mobile-slider').classList.add('mobile-slider-exit-animation')
 
    setTimeout(() => {
      setSliderOpen(false)
    }, 500)
    
  }

  // fetchBlogs()

  useEffect(() => {

    if (!targetId) return;

    const el = document?.getElementById(targetId);

    if (!el) return;

    if (el) {
      el?.scrollIntoView();
    }
  }, [targetId]);

  useEffect(() => {
    // if (!targetId) return;

    navigate(pathname, { state: { targetId: 'navbar' } });

    const el = document?.querySelector('.navbar');
    if (el) {
      el.scrollIntoView();
    }

  }, [])

  return (
    <HelmetProvider>  
      <Provider store={store}>
        <div className='app'>

          <Helmet>
            <link rel="canonical" href="https://www.suge.uk.co/" />
          </Helmet>

          <Navbar openSlider={openSlider}  />

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
                <Route path='/legal/privacy-policy' element={<PrivacyPolicy />} />
              </Routes>

              </ScrollTop>
            </Suspense>

          <CookieConsent 
            style={{   fontSize: 'clamp(.8rem, 1.08vw, 1rem)', borderTop:'1px solid rgb(120, 120, 120)', backgroundColor: '#0A0A0A'}} 
            location='bottom' 
            enableDeclineButton
            onAccept={() => navigate('/')}
            onDecline={() => navigate('/')}
            declineButtonText='Reject Cookies' 
            declineButtonStyle={{ background: '#fffff', padding: '10px 28px', fontSize: 'clamp(.72rem, 1.08vw, 1rem)', color: 'black', marginRight: '0px' }}
            buttonText='Accept all Cookies'  
            buttonStyle={{ background: '#2cb933', padding: '10px 28px', fontSize: 'clamp(.66rem, .9vw, .88rem)' }}
            cookieName='Suge_accept_cookie' 
            expires={150}>
              <span className='cookies-and-privacy'>This website uses cookies and <a href='#' onClick={() => navigate('/legal/privacy-policy')}>Privacy Policy</a> to help you have a superior and more admissible browsing experience on the website.</span>
          </CookieConsent>

          {
            search
            ?
            <SearchBox closeSlider={closeSlider} />
            :
            <></>
          }

          <Footer />
        </div>
      </Provider>
    </HelmetProvider>
  )
}

export default App