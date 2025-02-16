import './style.css'
import './style.mobile.css'
import { Banner } from '../../Components/Banner.jsx'
import { GoClock, GoMail } from 'react-icons/go'
import { FiPhone } from 'react-icons/fi'
import { useState } from 'react'
import { contactUs } from '../../Redux/MessageFunction.js'
import img1 from '/images/SUGE IMAGES/2.1 Tanker in field  copy.webp'


function ContactInfo () {
	return (
		<div className='contact-info'>
			<div className='contact-info-img'>
				<img src={img1} />
			</div>

			<div className='contact-info-cnt'>
				<div className='contact-info-item'>
					<span> <GoClock /> </span>

					<div className='contact-time'>
						<span>Opening Hours</span>

						<div>
							<span>Monday - Friday</span>
							<span>06:00 - 18:00</span>
						</div>

						<div>
							<span>Saturday</span>
							<span>08:00 - 17:00</span>
						</div>
					</div>
				</div>

				<div className='contact-info-item'>
					<span> <FiPhone /> </span>

					<div className='contact-info-details'>
						<span>Phone</span>
						<span>0330 133 5737</span>
					</div>
				</div>

				<div className='contact-info-item'>
					<span> <GoMail /> </span>

					<div className='contact-info-details'>
						<span>Email</span>
						<span>info@sugeltd.co.uk</span>
					</div>
				</div>				
			</div>
		</div>
	)
}

function ContactFormInput ({ name, value, placeholder, type, changeHandler }) {
	return (
		<div className='contact-form-input'>
			<span> {name} </span>

			<input type={type} name={name} value={value} placeholder={placeholder} onChange={changeHandler} />
		</div>
	)
}

function ContactForm () {

	const [ formDetails, setFormDetails ] = useState({
		name: '',
		email: '',
		company: '',
		phone: '',
		message: ''
	})

	function submitHandler (e) {
		e.preventDefault()

		contactUs(formDetails)

		setFormDetails({
			name: '',
			email: '',
			company: '',
			phone: '',
			message: ''
		})
	}

	function changeHandler (e) {
		setFormDetails({...formDetails, [e.target.name]: e.target.value})
	}

	return (
		<div className='contact-form'>
			<div>
				<div>Got Waste?</div>
				<div>Please feel free to use any of the contact methods listed on this page to get in touch with us. We look forward to hearing from you!</div>
			</div>

			<form onSubmit={submitHandler}>
				<div>
					<ContactFormInput type='text' name='name' value={formDetails.name} placeholder='Enter Name' changeHandler={changeHandler}/>
					<ContactFormInput type='email' name='email' value={formDetails.email} placeholder='Enter Email address' changeHandler={changeHandler}/>
					<ContactFormInput type='text' name='company' value={formDetails.company} placeholder='Enter company name' changeHandler={changeHandler}/>
					<ContactFormInput type='tel' name='phone' value={formDetails.phone} placeholder='Enter phone number' changeHandler={changeHandler}/>
					<ContactFormInput type='text' name='message' value={formDetails.message} placeholder='Enter text here' changeHandler={changeHandler}/>
				</div>

				<button>Send</button>
			</form>
		</div>
	)
}

function Page () {
	return (
		<div className='contact'>
			<Banner page='Contact Us' />

			<div className='contact-cnt'>
				<ContactInfo />
				<ContactForm />

				<div className='contact-blur' />
			</div>
		</div>
	)
}

export default Page;