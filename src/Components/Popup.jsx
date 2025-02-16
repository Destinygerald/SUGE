import './style.css'
import './style.mobile.css'
import { PrimaryButton } from './Buttons.jsx'
import { useNavigate } from 'react-router-dom'
import Complete from '/images/SUGE ASSETS/Complete.webp'

export function Success ({ setPopup }) {

	const navigate = useNavigate()


	function close() {
	 	setPopup(false)
	 	navigate('/')
	}

	return (
		<div className='success-popup'>
			
			<div className='success-popup-hdr'>

				<img src={Complete} />
				
				<div>
					Quote Generated 
					<br />
					Successfully!
				</div>
			</div>

			<div className='success-popup-cnt'>
				<div>
					Thank you for trusting SUGE with your waste management mission! Our team is already hard at work crafting the perfect plan for your needs. We’ll review your details and reach out to you with a personalized quote as soon as possible. Stay tuned, hero—your victory over waste is just around the corner!
					<br />
					<br />
					Got questions? Contact our friendly support team anytime!
				</div>

				<PrimaryButton text='Close' action={close} />
			</div>
		</div>
	)
}