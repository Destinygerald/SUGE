import '../style.css'
import '../style.mobile.css'


function ServicesInfoCard ({ title, content, index }) {
	return (
		<div className='services-info-cnt-card' id={`suge-services-2-info-card-${index}`}>
			<span>{title}</span>

			<div>{content}</div>
		</div>
	)
}

export function ServicesInfo () {
	return (
		<div className='services-info' id='suge-services-2-info'>
			<span>Our Expertise</span>

			<div className='services-info-cnt'>
				<ServicesInfoCard index='0' title='Liquid Waste Types (EWC Codes)' content='19 13 08, 02 01 01, 02 02 01, 19 08 05, 02 03 01 and much more' />
				<ServicesInfoCard index='1' title='Coverage Area' content='England' />
			</div>
		</div>
	)
}