import './style.css'
import './style.mobile.css'
import { useNavigate } from 'react-router-dom'
import { Banner } from '../../Components/Banner.jsx'
import img1 from '/images/Frame 1618868296.webp'
import img2 from '/images/Frame 1618868296-1.webp'
import img3 from '/images/Frame 1618868296-2.webp'
import img4 from '/images/Frame 1618868296-3.webp'

function ServiceCard ({ img_source, title, cnt, nav }) {

	const navigate = useNavigate()

	function handleClick () {
		navigate(nav)
	}

	return (
		<div className='service-card' onClick={handleClick}>
			<div className='service-card-img'>
				<img src={img_source} />
			</div>

			<div className='service-card-cnt'>
				<div>{title}</div>

				<div>{cnt}</div>
			</div>
		</div>
	)
}

function ServiceMain () {
	return (
		<div className='service-main'>
			<div className='service-main-cnt'>
				<div>For Your organic waste Only.</div>
				<div>No matter the size of the mission, SUGE has the tools, tech, and trucks to handle it.</div>
			</div>

			<div className='service-main-grid'>
				<ServiceCard nav='/quote' img_source={img1} title='Organic Waste Haulage' cnt='Licensed to haul. Whether it’s farm scraps or food factory waste, we make it disappear—sustainably.' />
				<ServiceCard nav='/contact/2' img_source={img3} title='AD Plant Partnership' cnt='Zero landfill, 100% recycled. We team up with cutting-edge AD plants to ensure your waste gets a new lease of life.' />
				<ServiceCard nav='/services/2' img_source={img2} title='Waste Water Tankering' cnt='Waste water hates to see us coming—armed with up to 6-inch hoses and 30,000-liter capacity tankers, we clear it out: swift, clean, and without a trace.' />
				<ServiceCard img_source={img4} title='Consultation & Support' cnt='Even the best agents need backup. We’ll guide you toward smarter, greener waste solutions.' />

				<div className='service-blur' />
			</div>
		</div>
	)
}

function Page () {
	return (
		<div className='service'>
			<Banner page='Service' />
			<ServiceMain />
		</div>
	)
}

export default Page