import './style.css'
import './style.mobile.css'
import Logo from '/images/SUGE BLACK.png'
import { useNavigate, useLocation } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram, FaYoutube } from 'react-icons/fa6'
import { IoLogoLinkedin } from 'react-icons/io5'
import { MdOutlineReviews } from 'react-icons/md'

export function Footer () {

	const navigate = useNavigate()
	const { pathname } = useLocation()

	function inNewTab (route) {
		window.open(route, '_blank', 'rel=noopener noreferrer')
	}

	function backHome() {
		if (pathname.includes('admin')) return;
		navigate('/')
	}

	return (
		<div className='footer'>
			<div className='footer-main'>
				<div onClick={backHome}>
					<img src={Logo} alt='suge-logo' />
				</div>

				<div className='footer-main-item' id='suge-footer-main'>

					<div id='suge-footer-address'>
						Plot 25, Aaron Road Industrial Estate, <br />
						Whittlesey Peterborough <br />
						PE7 2EX
					</div>

					<div className='footer-nav' id='suge-footer-nav'>
						<a href='#' onClick={(e) => {e.preventDefault();navigate('/')}}>Home</a>
						<a href='#' onClick={(e) => {e.preventDefault();navigate('/about')}}>About us</a>
						<a href='#' onClick={(e) => {e.preventDefault();navigate('/sustainability')}}>Sustainability</a>
						<a href='#' onClick={(e) => {e.preventDefault();navigate('/services')}}>Services</a>
						<a href='#' onClick={(e) => {e.preventDefault();navigate('/blog')}}>Blog</a>
						<a href='#' onClick={(e) => {e.preventDefault();navigate('/contact')}}>Contact us</a>
					</div>
				</div>

				<div className="trustpilot-widget" data-locale="en-GB" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="67dc5b64a57f6e869ad0e8a8" data-style-height="52px" data-style-width="100%">
					<a href="https://uk.trustpilot.com/review/suge.co.uk" target="_blank" rel="noopener">Drop Review <span> <MdOutlineReviews /> </span> </a>
				</div>

				
			</div>

			<div className='footer-copyright' id='suge-footer-copyrigith'>
				<span> Copyright © 2025 Suge</span>

				<div className='footer-contact' id='suge-footer-contact'>

					<div className='contact-dail'>Info@suge.co.uk</div>

					<div className='contact-separator' />

					<div className='contact-dail'>0330 133 5737</div>

					<div className='contact-separator' />
					
					<div className='footer-contact-logo'>
						<span onClick={() => inNewTab('https://www.facebook.com/profile.php?id=61560994145969&mibextid=wwXlfr')}> <FaFacebook /> </span>
						<span onClick={() => inNewTab('https://www.instagram.com/sugeltd')}> <FaInstagram /> </span>
						<span onClick={() => inNewTab('https://uk.linkedin.com/company/sugeltd')}> <IoLogoLinkedin /> </span>
						<span onClick={() => inNewTab('https://youtube.com/@sugeltd/')}> <FaYoutube /> </span>
					</div>
					
				</div>
			</div>
		</div>
	)
}