import '../style.css'
import '../style.mobile.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GoArrowRight } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import { editValue } from '../../../Redux/Quote.js'
import { PrimaryButton, SecondaryButton } from '../../../Components/Buttons.jsx'

export function FifthQuote () {

	const [ nameErr, setNameErr ] = useState('')
	const [ emailErr, setEmailErr ] = useState('')
	const [ phoneErr, setPhoneErr ] = useState('')
	const contact_info = useSelector(state => state.quote.value.contact) 

	const navigate = useNavigate()
	const dispatch = useDispatch()

	function changeHandler (e) {
		dispatch(editValue({ name: 'contact', value: {...contact_info, [e.target.name] : e.target.value } }))
	}

	function prevPage () {
		navigate('/quote/4')
	}

	function nextPage () {

		if (!contact_info.name) {

			setNameErr("Name is Required")

			setTimeout(() => {
				setNameErr('')
			}, 800)

			return
		} else if (!contact_info.email) {

			setEmailErr("Input Email")

			setTimeout(() => {
				setEmailErr('')
			}, 800)

			return
		}  else if (!contact_info.phone) {

			setPhoneErr("Input phone number")

			setTimeout(() => {
				setPhoneErr('')
			}, 800)

			return
		}

		navigate('/quote/6')
	}

	return (
		<div className='quote-1'>
			<div className='quote-1-cnt'>
				<div className='quote-1-hdr'>
					<div> Calling in the Hero: Your Details—The Secret to Our Success! </div>
					
					<div>
						Every great hero needs a sidekick, and we need to know how to reach you. Drop your contact info, and we’ll be in touch faster than you can say 'mission accomplished.'
					</div>

				</div>

				<div className='quote-form'>
					<div className='quote-1-other'>
						<span>Name</span>
						<input type='text' name='name' placeholder='John Doe' value={contact_info.name} onChange={changeHandler} />
							{
								nameErr
								?
								<div className='err'>
									{nameErr}
								</div>
								:
								<></>
							}
					</div>

					<div className='quote-1-other'>
						<span>Work Email</span>
						<input type='email' name='email' placeholder='example@gmail.com' value={contact_info.email} onChange={changeHandler} />

							{
								emailErr
								?
								<div className='err'>
									{emailErr}
								</div>
								:
								<></>
							}
					</div>

					<div className='quote-1-other'>
						<span>Phone Number</span>
						<input type='tel' name='phone' placeholder='+44' value={contact_info.phone} onChange={changeHandler} />
							{
								phoneErr
								?
								<div className='err'>
									{phoneErr}
								</div>
								:
								<></>
							}
					</div>

				</div>
			</div>

			<div className='quote-btns'>
				<SecondaryButton text='Previous' action={prevPage} />
				<PrimaryButton text='Next' action={nextPage} />
			</div>
		</div>
	)
}