import '../style.css'
import '../style.mobile.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editValue } from '../../../Redux/Quote.js'
import { PrimaryButton, SecondaryButton } from '../../../Components/Buttons.jsx'

export function SecondQuote () {

	const [errMsg, setErrMsg] = useState('')
	const navigate = useNavigate()
	const waste_type = useSelector(state => state.quote.value.wasteType)
	const dispatch = useDispatch()

	function changeHandler (e) {
		dispatch(editValue({ name: 'wasteType', value: e.target.value }))
	}

	function prevPage () {
		navigate('/quote')
	}

	function nextPage () {
		if (!waste_type || waste_type == '') {
				setErrMsg("Input Waste type")

				setTimeout(() => {
					setErrMsg('')
				}, 800)
			return;
		}

		navigate('/quote/3')
	}

	return (
		<div className='quote-1'>
			<div className='quote-1-cnt'>
				<div className='quote-1-hdr'>
					<div> Choosing Your Mission: What's Your Type of Adventure?</div>
					
					<div>
						Every hero faces a different villain. Describe your organic waste in one sentence, and we’ll tackle it head-on.
						If you know your waste code, don't forget to add it.
					</div>

				</div>

				<div className='quote-form'>
					<div className='quote-1-other'>
						<span>Waste Type</span>
						<input type='text' placeholder='Enter text here' value={waste_type} onChange={changeHandler} />
					</div>

					{
						errMsg
						?
						<div className='err'>
							{errMsg}
						</div>
						:
						<></>
					}
				</div>
				
			</div>

			<div className='quote-extra'>
				<span>Not sure? Give us a call.</span> <span>0303 133 5737</span>
			</div>

			<div className='quote-btns'>
				<SecondaryButton text='Previous' action={prevPage} />
				<PrimaryButton text='Next' action={nextPage} />
			</div>
		</div>
	)
}