import './style.css'
import './style.mobile.css'
import { Banner } from '../../Components/Banner.jsx'


function ServiceCard ({ img_source, title, cnt }) {
	return (
		<div className='service-card'>
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
				<ServiceCard img_source='--' title='--' cnt='---' />
				<ServiceCard img_source='--' title='--' cnt='---' />
				<ServiceCard img_source='--' title='--' cnt='---' />
				<ServiceCard img_source='--' title='--' cnt='---' />
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