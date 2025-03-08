import './style.css'
import './style.mobile.css'
import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci'
import { BsX } from 'react-icons/bs'
import { IoMdMoon } from 'react-icons/io'
import { IoMoonOutline } from 'react-icons/io5'
import Logo from '/images/SUGE LOGO.webp'
import { PrimaryButton } from './Buttons.jsx'


function SliderItem ({ nav, clickHandler, route, route2 }) {
		
	const { pathname } = useLocation()

	return (
		<div className='slider-item'>
			<span className={pathname == route || pathname == route2 ? 'nav-active' : ''} onClick={() => clickHandler(route)}>{nav}</span>
			{
				pathname == route
				?
				<div className='nav-indicator' />
				:
				''
			}
		</div>
	)
}


export function MobileSlider ({ sliderOpen, closeSlider }) {

	const [ theme, setTheme ] = useState(localStorage.getItem('suge-dark-theme'))
	const navigate = useNavigate()

	function clickHandler(arg) {
		navigate(arg)
		closeSlider()
	}

	function getQuote() {
		navigate('/quote')
		closeSlider()
	}

	function toggleTheme () {
		if (localStorage.getItem('suge-dark-theme') == 'true') {
			localStorage.setItem('suge-dark-theme', false)
			// setTheme('false')
			document.querySelector('.app').classList.add('light-theme')
		} else {
			// setTheme('true')
			localStorage.setItem('suge-dark-theme', true)
			document.querySelector('.app').classList.remove('light-theme')
		}

		setTheme(localStorage.getItem('suge-dark-theme'))
	}

	return (
		<div className='mobile-slider'>
			<div className='mobile-slider-hdr'>
				<div className='logo'> <img src={Logo} /> </div>

				<div className='mobile-slider-extras'>

					<span className='theme-switch' onClick={toggleTheme}> 
						{ 
							theme == 'true'
							?
							<IoMdMoon />
							:
							<IoMoonOutline />
						}
					</span>

					<span className='mobile-slider-search'> <CiSearch /> </span>
					<span className='mobile-slider-exit' onClick={closeSlider}> <BsX /> </span>
				</div>	
			</div>

			<div className='mobile-slider-main'>
				<SliderItem nav='Home' route='/' clickHandler={clickHandler} />
				<SliderItem nav='About Us' route='/about' clickHandler={clickHandler} />
				<SliderItem nav='Services' route='/services' route2='/services/2' clickHandler={clickHandler} />
				<SliderItem nav='Sustainability' route='/sustainability' clickHandler={clickHandler} />
				<SliderItem nav='Contact Us' route='/contact' route2='/contact/2' clickHandler={clickHandler} />
			</div>

			<PrimaryButton text='Get a Quote' hasIcon={false} action={getQuote} />


		</div>
	)
}