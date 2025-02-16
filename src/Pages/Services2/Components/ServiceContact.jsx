import '../style.css'
import '../style.mobile.css'
import { PrimaryButton } from '../../../Components/Buttons.jsx'
import { useState } from 'react'

function ServiceContactCard ({title, cnt}) {
	return (
		<div className='service-2-contact-cnt-info'>
			<span>{title}</span>
			<span>{cnt}</span>
		</div>
	)
}

function ServiceContactFormInput ({name, display, type, value, placeholder, changeHandler}) {
	return (
		<div className='service-2-contact-input'>
			<span>{display}</span>

			<input type={type} value={value} placeholder={placeholder} onChange={changeHandler} name={name} />
		</div>
	)
}

function ServiceContactForm () {

	const [ serviceForm, setServiceForm ] = useState({
		name: '',
		email: '',
		phone: '',
		frequency: '',
		message: ''
	})

	function changeHandler (e) {
		setServiceForm({
			...serviceForm,
			[e.target.name]: e.target.value
		})
	}

	return (
		<div className='service-2-contact-form-body'>
			<ServiceContactFormInput name='name' display='Name' type='text' value={serviceForm.name} placeholder='Enter Name' changeHandler={changeHandler}  />
			<ServiceContactFormInput name='email' display='Email' type='email' value={serviceForm.email} placeholder='Enter Email address' changeHandler={changeHandler}  />
			<ServiceContactFormInput name='phone' display='Phone' type='tel' value={serviceForm.phone} placeholder='Enter phone number' changeHandler={changeHandler}  />
			<ServiceContactFormInput name='frequency' display='Liquid Waste Collection Frequency' type='text' value={serviceForm.frequency} placeholder='e.g Daily' changeHandler={changeHandler}  />

			<div className='service-2-contact-input'>
				<span>Message</span>
				
				<textarea name='message' value={serviceForm.message} onChange={changeHandler} placeholder='Enter text here'></textarea>
			</div>
		</div>
	)
}

export function ServiceContact () {
	return (
		<div className='service-2-contact'>
			<div className='service-2-contact-cnt'>
				<div>
					<span>Why Choose Us</span>

					<div>EXPERT WASTE WATER MANAGEMENT.</div>
				</div>

				<div>
					<ServiceContactCard title='Liquid Waste Recycling' cnt='Our team specializes in sustainable and efficient liquid waste collection and recycling, ensuring compliance with all regulations and standards.' />
					<ServiceContactCard title='Custom Solutions' cnt='Tailored waste water management solutions to meet specific client needs and requirements.' />
					<ServiceContactCard title='24/7 Service' cnt='We offer round-the-clock services to address any emergency waste water management needs.' />
				</div>


			</div>

			<div className='service-2-contact-form'>
				<div className='service-2-contact-form-glass' />

				<div className='service-2-contact-form-hdr'>
					<span>EMERGENCY WASTE WATER EXTRACTION</span>
					<span>Contact us for efficient and eco-friendly waste water tankering solutions. Fill out this simple form or call us for a quicker response</span>
				</div>

				<div className='service-2-contact-form-cnt'>
					<ServiceContactForm />

					<PrimaryButton text='Contact us now' hasIcon={false} />

				</div>

			</div>
		</div>
	)
}