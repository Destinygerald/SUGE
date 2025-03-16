import './style.css'
import './style.mobile.css'
import './style.1600.css'
import { useNavigate } from 'react-router-dom'
import { Banner } from '../../Components/Banner.jsx'
import { Helmet } from 'react-helmet-async'

import img1 from '/images/Frame 1618868296.webp'
import img2 from '/images/Frame 1618868296-1.webp'
import img3 from '/images/Frame 1618868296-2.webp'
import img4 from '/images/Frame 1618868296-3.webp'

function ServiceCard ({ img_source, title, cnt, nav, index }) {

	const navigate = useNavigate()

	function handleClick () {
		navigate(nav)
	}

	return (
		<div className='service-card' onClick={handleClick}>
			<div className='service-card-img'>
				<img src={img_source} loading='lazy' alt='suge-services-type' />
			</div>

			<div className='service-card-cnt' id={`suge-service-1-card-${index}`}>
				<div>{title}</div>

				<div>{cnt}</div>
			</div>
		</div>
	)
}

function ServiceMain () {
	return (
		<div className='service-main'>
			<div className='service-main-cnt' id='blog-service-1-main'>
				<div>For Your Organic Waste Only.</div>
				<div>No matter the size of the mission, SUGE has the tools, tech, and trucks to handle it.</div>
			</div>

			<div className='service-main-grid'>
				<ServiceCard index='0' nav='/quote' img_source={img1} title='Organic Waste Haulage' cnt='Licensed to haul. Whether it’s farm scraps or food factory waste, we make it disappear—sustainably.' />
				<ServiceCard index='1' nav='/contact/2' img_source={img3} title='AD Plant Partnership' cnt='Zero landfill, 100% recycled. We team up with cutting-edge AD plants to ensure your waste gets a new lease of life.' />
				<ServiceCard index='2' nav='/services/2' img_source={img2} title='Waste Water Tankering' cnt='Waste water hates to see us coming—armed with up to 6-inch hoses and 30,000-liter capacity tankers, we clear it out: swift, clean, and without a trace.' />
				<ServiceCard index='3' nav='/contact' img_source={img4} title='Consultation & Support' cnt='Even the best agents need backup. We’ll guide you toward smarter, greener waste solutions.' />

				<div className='service-blur' />
			</div>
		</div>
	)
}

function Page () {
	return (
		<div className='service'>
			<Helmet>
				<title>Suge - Service | Sustainable Organic Waste Collection & Management UK</title>
				<link rel="canonical" href="https://www.suge.uk.co/" />
			</Helmet>

			<Banner page='Services' />
			<ServiceMain />
		</div>
	)
}

export default Page