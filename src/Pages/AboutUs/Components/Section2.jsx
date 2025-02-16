import '../style.css'
import '../style.mobile.css'
import img1 from '/images/SUGE IMAGES/1.1 Mercedes Field  copy 2 1.webp'

export function Section2 () {
	return (
		<div className='mission-section-2'>

			<div className='mission-section-2-img'>
				<img src={img1} />
			</div>
			
			<div>
				<span> We ensure every haul is done simple, efficient, and sustainable. From partnering with Anaerobic Digestion (AD) plants to supporting circular economy solutions, we’re committed to making organic waste work for the planet.</span>

				<span> Today, SUGE is the UK’s organic waste management hero, taking on organic waste with precision and purpose. Think of us as your 00-Agent in the war against waste—only with less martinis and more recycling.</span>
			</div>
			
		</div>
	)
}