import './style.css'
import './style.mobile.css'
import { ServiceOffered } from './Components/ServiceOffered.jsx'
import { ServicesInfo } from './Components/ServicesInfo.jsx'
import { ServiceContact } from './Components/ServiceContact.jsx'
import Truck from '/images/SUGE IMAGES/Truck.webp'

function Page () {
	return (
		<div className='service-2'>
			<ServiceOffered />
			<ServicesInfo />

			<div className='service-2-img'>
				<img src={Truck} />
			</div>

			<ServiceContact />


		</div>
	)
}

export default Page