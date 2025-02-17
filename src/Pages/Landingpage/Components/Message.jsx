import '../style.css'
import '../style.mobile.css'
import Flash1 from '/images/FLASH/Lighting Black.webp'
import Infographics from '/images/Infographics 1.webp'
import Light_Infographics from '/images/LIGHT/Infohraphics 2.webp'


export function Message () {



	return (
		<div className='message'>
			<div className='message-cnt'>
				<div>We're not just handling organic waste. We're Rewriting its Destiny.</div>
				<div>At SUGE, we don't believe in landfill. Every bit of waste is recycled or repurposed. Turning problems into solutions, scraps into energy and organic waste into a greener planet. From farm to fork, we are hauling towards a zero waste future .</div>
			</div>

			<div className='message-img'>
				<img src={Infographics} />
			</div>

			<div className='message-1-flash'>
				<img src={Flash1} />
			</div>
		</div>
	)
}