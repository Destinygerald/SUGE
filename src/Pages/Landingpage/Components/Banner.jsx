import '../style.css'
import '../style.mobile.css'
import { PrimaryButton } from '../../../Components/Buttons.jsx'
import { useNavigate } from 'react-router-dom'

export function Banner () {

	const navigate = useNavigate()

	function getQuote () {
		navigate('/quote')
	}

	return (
		<div className='banner'>
			<div className='banner-cnt'>
				
				<div>Got Waste? <br/> Think <span>SUGE.</span></div>

				<div> Your waste management heroes reporting for duty. <br /> Reliable, sustainable, and 100% diverted away from landfill. </div>

				<div className='banner-btn'>
					<PrimaryButton text='Get a Quote' action={getQuote} />
				</div>
			</div>

			<div className='bck-img'>
			</div>
		</div>
	)
}