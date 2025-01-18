import '../style.css'
import '../style.mobile.css'
import Flash1 from '/images/FLASH (5).png'
import Infographics from '/images/Infographics 1.png'


export function Message () {
	return (
		<div className='message'>
			<div className='message-cnt'>
				<div>We're not just handling organic waste. We're rewriting its destiny.</div>
				<div>At SUGE, we don't believe in landfill. Every bit of waste is recycled or repurposed. Turning problems into solutions, scraps into energy and organic waste into a greener planet. From farm to fork, we are hauling towards a zero waste future .</div>
			</div>

			<div className='message-img'>
				<img src={Infographics} />
			</div>

			<div className='message-flash'>
				<img src={Flash1} />
			</div>
		</div>
	)
}