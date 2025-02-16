import '../style.css'
import '../style.mobile.css'
import { useState } from 'react'
import { GoArrowRight } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { PrimaryButton, SecondaryButton } from '../../../Components/Buttons.jsx'
import { editValue } from '../../../Redux/Quote.js'

export function FourthQuote () {

	const [errMsg, setErrMsg] = useState('')
	const navigate = useNavigate()
	const location = useSelector(state => state.quote.value.location)
	const dispatch = useDispatch()

	function changeHandler (e) {
		dispatch(editValue({ name: 'location', value: e.target.value }))
	}

	function prevPage () {
		navigate('/quote/3')
	}

	function nextPage () {

		if (!location || location == '') {
				setErrMsg("Input postal code")

				setTimeout(() => {
					setErrMsg('')
				}, 800)
			return;
		}

		navigate('/quote/5')
	}

	return (
		<div className='quote-1'>
			<div className='quote-1-cnt'>
				<div className='quote-1-hdr'>
					<div> Mapping the Terrain: Where’s Your Base of Operations? </div>
					
					<div>
						Every hero needs a base. Let us know where we’ll be working our magic, so we can get the job done as efficiently as possible. We’ll show up on time and ready to clean up the battlefield.
					</div>

				</div>

				<div className='quote-form'>
					<div className='quote-1-other'>
						<span>Enter Post Code</span>
						<input type='text' placeholder='e.g AB1 2CD' value={location} onChange={changeHandler} />
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

			<div className='quote-btns'>
				<SecondaryButton text='Previous' action={prevPage} />
				<PrimaryButton text='Next' action={nextPage} />
			</div>
		</div>
	)
}