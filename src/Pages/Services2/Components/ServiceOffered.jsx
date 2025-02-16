import '../style.css'
import '../style.mobile.css'
import image from '/images/SUGE IMAGES/IMG_5681 a1-2.webp'

export function ServiceOffered () {
	return (
		<div className='service-2-banner'>
			<span>Here Comes The Rains</span>

			<div className='service-2-banner-main'>
				<div className='service-2-banner-main-cnt'>
					<div>
						Waste Water <br /> 
						Tankering <br />
						Service 
					</div>

					<div>
						Our supercharged tankers and highly skilled engineers are experts in flood water extraction. With powerful 3, 4 & 6-inch hoses and the capacity to transport up to 30,000 liters of liquid, we can suck up floodwater faster than you can say "umbrella!" Hundreds of gallons gone in minutes, leaving your premises clear and back to business as usual.
					</div>

				</div>

				<div className='service-2-banner-img'>
					<img src={image} />
				</div>


			</div>			
		</div>
	)
}