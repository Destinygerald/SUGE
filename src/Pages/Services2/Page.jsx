import './style.css'
import './style.mobile.css'
import './style.1600.css'
import { ServiceOffered } from './Components/ServiceOffered.jsx'
import { ServicesInfo } from './Components/ServicesInfo.jsx'
import { ServiceContact } from './Components/ServiceContact.jsx'
import Truck from '/images/SUGE IMAGES/Truck.webp'
import { SEO } from '../../Components/SEO.jsx'

function Page () {
	return (
		<div className='service-2'>
			<SEO title={`Suge - What we Offer | Sustainable Organic Waste Collection & Management UK`} link="https://www.suge.uk.co/services/2" />

			<ServiceOffered />
			<ServicesInfo />

			<div className='service-2-img'>
				<img src={Truck} alt='suge-truck-image' />
			</div>

			<ServiceContact />


		</div>
	)
}

export default Page