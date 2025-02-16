import '../style.css'
import '../style.mobile.css'
import { useState, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { PrimaryButton, SecondaryButton } from '../../../Components/Buttons.jsx'
import { Success } from '../../../Components/Popup.jsx'
import { sendQuote } from '../../../Redux/MessageFunction.js'
import { resetValue } from '../../../Redux/Quote.js'

export function SixthQuote () {

	const [quote1Input, setQuote1Input] = useState('')
	const [popup, setPopup] = useState(false)
	const navigate = useNavigate()

	const dispatch = useDispatch()

	const info = useSelector(state => state.quote.value)


	function prevPage () {
		navigate('/quote/5')
	}

	async function submit () {

		await sendQuote(info)

		setPopup(true)

		dispatch(resetValue())
	}

	useLayoutEffect(() => {
		if (!info.businessType || !info.wasteType || !info.frequency || !info.location || !info.contact.name || !info.contact.email || !info.contact.phone) {
			// navigate('/quote')
		}
	}, [])

	return (
		<div className='quote-1'>
			<div className='quote-1-cnt'>

				<div className='quote-confirmation'>
					<span> Review and Confirmation </span>

					<div className='quote-confirmation-cnt'>
						<div className='quote-confirmation-text'>
							<span>Business Type</span>
							<span>{info.businessType}</span>
						</div>

						<div className='quote-confirmation-text'>
							<span>Waste Type</span>
							<span>{info.wasteType}</span>
						</div>

						<div className='quote-confirmation-text'>
							<span>Frequency</span>
							<span>{info.frequency}</span>
						</div>

						<div className='quote-confirmation-text'>
							<span>Location</span>
							<span>{info.location}</span>
						</div>

						<div className='quote-confirmation-text'>
							<span>Contact Info</span>
							
							<div className='quote-confirmation-contact'>
								<span> {info.contact.name} </span>
								<span> {info.contact.email} </span>
								<span> {info.contact.phone} </span>
							</div>
						</div>

					</div>
				</div>
				
			</div>

			<div className='quote-btns'>
				<SecondaryButton text='Previous' action={prevPage} />
				<PrimaryButton text='Submit' hasIcon={false} action={submit} />
			</div>

			{
				popup
				?
				<Success setPopup={setPopup} />
				:
				<></>
			}
		</div>
	)
}