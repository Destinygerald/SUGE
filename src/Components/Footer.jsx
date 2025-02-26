import './style.css'
import './style.mobile.css'
import Logo from '/images/SUGE LOGO.webp'
import { useNavigate } from 'react-router-dom'
import { FaFacebook } from 'react-icons/fa'
import { FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6'
import { IoLogoLinkedin } from 'react-icons/io5'

export function Footer () {

	const navigate = useNavigate()

	function inNewTab (route) {
		window.open(route, '_blank', 'rel=noopener noreferrer')
	}

	return (
		<div className='footer'>
			<div className='footer-main'>
				<div>
					<img src={Logo} />
				</div>

				<div className='footer-main-item'>

					<div>
						Plot 754, Aaron Road Industrial Estate, <br />
						Whittlesey Peterborough <br />
						PE7 2EX
					</div>

					<div className='footer-nav'>
						<span onClick={() => {navigate('/')}}>Home</span>
						<span onClick={() => {navigate('/about')}}>About us</span>
						<span onClick={() => {navigate('/sustainability')}}>Sustainability</span>
						<span onClick={() => {navigate('/services')}}>Services</span>
						<span onClick={() => {navigate('/blog')}}>Blog</span>
						<span onClick={() => {navigate('/contact')}}>Contact us</span>
					</div>
				</div>

				
			</div>

			<div className='footer-copyright'>
				<span> Copyright © 2025 Suge</span>

				<div className='footer-contact'>

					<div>Info@sugeltd.co.uk</div>

					<div className='contact-separator' />

					<div>0330 133 5737</div>

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