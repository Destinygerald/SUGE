import '../style.css'
import '../style.mobile.css'
import { useState, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosCheckmark } from 'react-icons/io'
import { editValue } from '../../../Redux/Quote.js'
import { PrimaryButton, SecondaryButton } from '../../../Components/Buttons.jsx'
import img1 from '/images/SUGE ASSETS/Asset 1300 1.webp'
import img2 from '/images/SUGE ASSETS/Asset 1300 1-1.webp'
import img3 from '/images/SUGE ASSETS/Asset 1300 1-2.webp'
import img4 from '/images/SUGE ASSETS/Asset 1300 1 (2).webp'

function ThirdQuoteCard ({ imgSource, text }) {

	const frequency = useSelector(state => state.quote.value.frequency)
	const dispatch = useDispatch()

	function handleClick () {
		dispatch(editValue({ name: 'frequency', value: text }))
	}

	return (
		<div className={frequency == text ? 'quote-3-card quote-1-card-selected' : 'quote-3-card'} onClick={handleClick}>
			<div>{text}</div>

			{
				frequency == text
				?
				<div className='quote-1-card-check'>
					<IoIosCheckmark />
				</div>
				:
				<></>
			}

			<img src={imgSource} />
		</div>
	)
}

export function ThirdQuote () {

	const [quote1Input, setQuote1Input] = useState('')
	const [errMsg, setErrMsg] = useState('')
	const navigate = useNavigate()
	
	const frequency = useSelector(state => state.quote.value.frequency)
	const wasteType = useSelector(state => state.quote.value.wasteType)

	const dispatch = useDispatch()

	function changeHandler (e) {
		setQuote1Input(e.target.value)
		dispatch(editValue({ name: 'frequency', value: e.target.value }))
	}

	function prevPage () {
		navigate('/quote/2')
	}

	function nextPage () {

		if (!frequency) {
			setErrMsg('Select Frequency (or specify for other manner of frequency)')
			

			setTimeout (() => {
				setErrMsg('')
			}, 800)
			return
		}

		navigate('/quote/4')
	}

	useLayoutEffect(() => {
		if (!wasteType) {
			navigate('/quote/2')
		}
	}, [])

	return (
		<div className='quote-1'>
			<div className='quote-1-cnt'>
				<div className='quote-1-hdr'>
					<div>Suiting Up: How Often Will You Need Us on the Frontlines?</div>
					<div>Like any good hero, we’re here whenever you need us. Let us know how often (frequency) you need a waste hauling sidekick, and we’ll be there to handle the heavy lifting on your schedule.</div>
				</div>

				<div className='quote-3-imgs'>
					<span>Frequency</span>

					<div>
						<ThirdQuoteCard text='Daily' imgSource={img1} />
						<ThirdQuoteCard text='Weekly' imgSource={img2} />
						<ThirdQuoteCard text='Fortnightly' imgSource={img3} />
						<ThirdQuoteCard text='One Off Collection' imgSource={img4} />

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

				<div className='quote-form'>
					<div className='quote-1-other'>
						<span>Other</span>
						<input type='text' placeholder='Enter text here' value={quote1Input} onChange={changeHandler} />
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