import '../style.css'
import '../style.mobile.css'
import { useNavigate } from 'react-router-dom'
import { PrimaryButton } from '../../../Components/Buttons.jsx'
import Logo from '/images/set 7300 1.webp'
import Flash from '/images/FLASH/Lighting Black.webp'

export function GreenDiv () {

	const navigate = useNavigate()

	function getQuote () {
		navigate('/quote')
	}

	return (
		<div className='green-div'>
			<img src={Logo} className='green-div-logo' alt='suge-logo' />

			<img src={Flash} className='green-div-flash' alt='green-flash' />

			<div className='green-div-cnt'>
				<div id='suge-landing-page-green-div'> 
					<h2>Handle Waste the Right Way</h2>
					<div>Ready to start your journey towards efficient and responsible waste management? Contact Suge Ltd today and let us help you make a difference.</div>
				</div>

				<PrimaryButton text='Get a Quote' action={getQuote} />
			</div>
		</div>
	)
}