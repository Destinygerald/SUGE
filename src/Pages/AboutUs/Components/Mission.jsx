import '../style.css'
import '../style.mobile.css'
import img1 from '/images/SUGE IMAGES/2.2 Tanker in AD1 Plant.webp'

export function Mission () {
	return (
		<div className='mission'>
			<div className='mission-info'>
				<div>Our Mission</div>

				<div className='mission-info-cnt'>
					<div>Huge Impact, Zero Waste.</div>
					
					<div>
						Every hero has an origin story. Ours began with one man, one truck, and one mission: to stop organic waste from ending up in landfills.<br />
						What started as one man’s vision has grown into the UK’s trusted organic waste management partner for the food and drink industry and businesses producing tonnes of organic waste. At SUGE, we believe waste isn’t the end of the story. It’s the start of something better.
					</div>
				</div>
			</div>

			<div className='mission-img'>
				<img src={img1} />
			</div>
		</div>
	)
}