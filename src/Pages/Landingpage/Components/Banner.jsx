import '../style.css'
import '../style.mobile.css'
import Truck from '/images/New truck.png'

export function Banner () {
	return (
		<div className='banner'>
			<div className='banner-cnt'>
				
				<div>Got Waste? <br/> Think <span>SUGE</span>.</div>

				<div> Your waste management heroes reporting for duty. Reliable, sustainable, and 100% diverted away from landfill. </div>

				<div className='banner-btn'>
					<button>Get a Quote <span>→</span></button>
					<button>Learn More</button>
				</div>
			</div>

			<div className='bck-img'>
				<img src={Truck} />
			</div>
		</div>
	)
}