import './style.css'
import './style.mobile.css'
import Logo from '/images/SUGE LOGO.png'
import { FaFacebook } from 'react-icons/fa'
import { FaXTwitter, FaInstagram, FaYoutube } from 'react-icons/fa6'
import { IoLogoLinkedin } from 'react-icons/io5'

export function Footer () {
	return (
		<div className='footer'>
			<div className='footer-main'>
				<div>
					<img src={Logo} />
				</div>

				<div className='footer-main-item'>
					<span>Home</span>
					<span>Services</span>
					<span>About us</span>
					<span>Contact us</span>
				</div>

				<div className='footer-contact'>
					<div className='footer-contact-logo'>
						<span> <FaFacebook /> </span>
						<span> <FaXTwitter /> </span>
						<span> <FaInstagram /> </span>
						<span> <IoLogoLinkedin /> </span>
						<span> <FaYoutube /> </span>
					</div>

					<div>0330 133 5737</div>

					<div>Info@sugeltd.co.uk</div>
				</div>
			</div>

			<div className='footer-copyright'>
				Copyright© 2024 Suge Logistics
			</div>
		</div>
	)
}