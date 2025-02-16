import '../style.css'
import '../style.mobile.css'
import { useNavigate } from 'react-router-dom'
import { PrimaryButton } from '../../../Components/Buttons.jsx'
import Logo from '/images/Asset 5300 2.webp'
import img1 from '/images/SUGE IMAGES/IMG_5681 a1-2.webp'
import img2 from '/images/SUGE IMAGES/shutterstock_1685254642.webp'
import img3 from '/images/SUGE IMAGES/Frame 1618868385.webp'

export function Message3 () {

	const navigate = useNavigate()

	function getQuote () {
		navigate('/quote')
	}

	return (
		<div className='message-3'>
			
			<div className='message-3-cnt'>
				<div>
					Waste Management and Recycling that Adapts to Your Industry
				</div>

				<div className='message-3-cnt-info'>
					<div>Our promise to you is hassle-free recycling. Leveraging our in-house haulage system, we guarantee efficient and cost-effective recycling and waste management solutions across the UK.</div>
					<PrimaryButton text='Get a Quote' action={getQuote} />
				</div>
			</div>


			<div className='message-3-img'>
				<img src={Logo} />

				<div className='message-3-img-show'>
					<div> <img src={img1} />  </div>
					<div> <img src={img2} />  </div>
					<div> <img src={img3} />  </div>
				</div>
			</div>

		</div>
	)
}