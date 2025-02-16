import '../style.css'
import '../style.mobile.css'


function ServicesInfoCard ({ title, content }) {
	return (
		<div className='services-info-cnt-card'>
			<span>{title}</span>

			<div>{content}</div>
		</div>
	)
}

export function ServicesInfo () {
	return (
		<div className='services-info'>
			<span>Our Expertise</span>

			<div className='services-info-cnt'>
				<ServicesInfoCard title='Liquid Waste Types (EWC Codes)' content='19 13 08, 02 01 01, 02 02 01, 19 08 05, 02 03 01 and much more' />
				<ServicesInfoCard title='Coverage Area' content='England' />
			</div>
		</div>
	)
}