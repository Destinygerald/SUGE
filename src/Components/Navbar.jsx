import './style.css'
import './style.mobile.css'
import Logo from '/images/SUGE LOGO.png'
import { CiSearch } from 'react-icons/ci'
import { useNavigate } from 'react-router-dom'

export function Navbar () {

	const navigate = useNavigate()

	function clickHandler (arg) {
		navigate(arg)
	}

	return (
		<div className='navbar'>
			<div className='logo'> <img src={Logo} /> </div>

			<div className='nav-items'>
				<span onClick={() => clickHandler('/')}>Home</span>
				<span onClick={() => clickHandler('/about')}>About Us</span>
				<span onClick={() => clickHandler('/service')}>Service</span>
				<span>Sustainablity</span>
				<span onClick={() => clickHandler('/contact')}>Contact Us</span>
			</div>

			<div className='nav-extras'>
				<span className='nav-search'> <CiSearch /> </span>
				<button>Get a Quote</button>
			</div>
		</div>
	)
}