import './style.css'
import './style.mobile.css'
import './style.1600.css'
import { ServiceOffered } from './Components/ServiceOffered.jsx'
import { ServicesInfo } from './Components/ServicesInfo.jsx'
import { ServiceContact } from './Components/ServiceContact.jsx'
import Truck from '/images/SUGE IMAGES/Truck.webp'
import { Helmet } from 'react-helmet-async'

function Page () {
	return (
		<div className='service-2'>
			<Helmet>
				<title>Suge - service</title>
				<link rel="canonical" href="https://www.suge.uk.co/" />
			</Helmet>

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