import './style.css'
import './style.mobile.css'
import './style.1600.css'
import { Banner } from '../../Components/Banner.jsx'
import { GoClock, GoMail } from 'react-icons/go'
import { FiPhone } from 'react-icons/fi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { contactUs } from '../../Redux/MessageFunction.js'
import img1 from '/images/SUGE IMAGES/2.1 Tanker in field  copy.webp'

function ContactInfo () {
	return (
		<div className='contact-2-info'>
			<div className='contact-2-info-img'>
				<img src={img1} loading='lazy' />
			</div>

			<div className='contact-2-info-cnt'>
				<div className='contact-2-info-item'>
					<span> <GoClock /> </span>

					<div className='contact-2-time'>
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

				<div className='contact-2-info-item'>
					<span> <FiPhone /> </span>

					<div className='contact-2-info-details'>
						<span>Phone</span>
						<span>0330 133 5737</span>
					</div>
				</div>

				<div className='contact-2-info-item'>
					<span> <GoMail /> </span>

					<div className='contact-2-info-details'>
						<span>Email</span>
						<span>info@sugeltd.co.uk</span>
					</div>
				</div>				
			</div>
		</div>
	)
}

function ContactFormInput ({ name, value, placeholder, type, changeHandler, err }) {
	return (
		<div className='contact-2-form-input'>
			<span> {name} </span>

			<input type={type} name={name} value={value} placeholder={placeholder} onChange={changeHandler} />

			{
				err
				?
				<span className='err'>{err}</span>
				:
				<></>
			}
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

	const [ formErr, setFormErr ] = useState({
		name: '',
		email: '',
		company: '',
		phone: '',
		message: ''
	})

	const navigate = useNavigate()

	async function submitHandler (e) {
		e.preventDefault()

		if (!formDetails.name) {
			setFormErr({...formErr, name : 'Name is empty'})
			return
		}

		if (!formDetails.email) {
			setFormErr({...formErr, email : 'Email field is empty'})
			return
		}

		if (!formDetails.company) {
			setFormErr({...formErr, company : 'Company field is empty'})
			return
		}

		if (!formDetails.phone) {
			setFormErr({...formErr, phone : 'Phone field is empty'})
			return
		}

		if (!formDetails.message) {
			setFormErr({...formErr, message : 'Message field is empty'})
			return
		}

		await contactUs(formDetails)

		setFormDetails({
			name: '',
			email: '',
			company: '',
			phone: '',
			message: ''
		})

		navigate('/')
	}

	function changeHandler (e) {
		setFormDetails({...formDetails, [e.target.name]: e.target.value})

		setFormErr({
			name: '',
			email: '',
			company: '',
			phone: '',
			message: ''
		})
	}

	return (
		<div className='contact-form'>
			<div>
				<div>Need Waste?</div>
				<div>Please feel free to use any of the contact methods listed on this page to get in touch with us. We look forward to hearing from you!</div>
			</div>

			<form onSubmit={submitHandler}>
				<div>
					<ContactFormInput type='text' name='name' value={formDetails.name} placeholder='Enter Name' changeHandler={changeHandler} err={formErr.name} />
					<ContactFormInput type='email' name='email' value={formDetails.email} placeholder='Enter Email address' changeHandler={changeHandler} err={formErr.email} />
					<ContactFormInput type='text' name='company' value={formDetails.company} placeholder='Enter company name' changeHandler={changeHandler} err={formErr.company} />
					<ContactFormInput type='tel' name='phone' value={formDetails.phone} placeholder='Enter phone number' changeHandler={changeHandler} err={formErr.phone} />
					<ContactFormInput type='text' name='message' value={formDetails.message} placeholder='Enter text here' changeHandler={changeHandler} err={formErr.message} />
				</div>

				<button>Send</button>
			</form>
		</div>
	)
}

function Page () {
	return (
		<div className='contact-2'>
			<Banner page='Contact Us' />

			<div className='contact-2-cnt'>
				<ContactForm />
				<ContactInfo />

				<div className='contact-2-blur' />
			</div>
		</div>
	)
}

export default Page;