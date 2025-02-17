import './style.css'
import './style.mobile.css'
import './style.1600.css'
import { useLayoutEffect, useState } from 'react'
import Logo from '/images/SUGE LOGO.webp'
import { useSelector, useDispatch } from 'react-redux'
import { CiSearch } from 'react-icons/ci'
import { IoMdMoon } from 'react-icons/io'
import { IoMoonOutline } from 'react-icons/io5'
import { useNavigate, useLocation } from 'react-router-dom'
import { PrimaryButton } from './Buttons.jsx'


function NavItem ({ nav, clickHandler, route }) {
		
	const { pathname } = useLocation()

	return (
		<div>
			<span className={pathname == route ? 'nav-active' : ''} onClick={() => clickHandler(route)}>{nav}</span>
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

export function Navbar () {

	const [ theme, setTheme ] = useState(localStorage.getItem('suge-dark-theme'))
	const navigate = useNavigate()

	function clickHandler (arg) {
		navigate(arg)
	}

	function getQuote () {
		navigate('/quote')
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

	useLayoutEffect(() => {
	    if ( localStorage.getItem('suge-dark-theme') == 'false') {
	    	document.querySelector('.app').classList.add('light-theme')
	    } else {
	    	document.querySelector('.app').classList.remove('light-theme')
	    }

	}, [localStorage.getItem('suge-dark-theme')])


	return (
		<div className='navbar'>
			<div className='logo'> <img src={Logo} /> </div>

			<div className='nav-items'>
				<NavItem nav='Home' route='/' clickHandler={clickHandler} />
				<NavItem nav='About Us' route='/about' clickHandler={clickHandler} />
				<NavItem nav='Services' route='/services' clickHandler={clickHandler} />
				<NavItem nav='Sustainability' route='/sustainability' clickHandler={clickHandler} />
				<NavItem nav='Contact Us' route='/contact' clickHandler={clickHandler} />
			</div>

			<div className='nav-extras'>
				<span className='theme-switch' onClick={toggleTheme}> 
				{ 
					theme == 'true'
					?
					<IoMdMoon />
					:
					<IoMoonOutline />
				}
				</span>
				<span className='nav-search'> <CiSearch /> </span>
				<PrimaryButton text='Get a Quote' hasIcon={false} action={getQuote} />
			</div>
		</div>
	)
}