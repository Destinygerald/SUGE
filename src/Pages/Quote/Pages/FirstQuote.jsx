import '../style.css'
import '../style.mobile.css'
import { useState, useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosCheckmark } from 'react-icons/io'
import { editValue } from '../../../Redux/Quote.js'
import { PrimaryButton } from '../../../Components/Buttons.jsx'
import img1 from '/images/SUGE IMAGES/Component 2.webp'
import img2 from '/images/SUGE IMAGES/Component 3.webp'
import img3 from '/images/SUGE IMAGES/Component 4.webp'
import img4 from '/images/SUGE IMAGES/Component 6.webp'
import img5 from '/images/SUGE IMAGES/Component 7.webp'

function FirstQuoteCard ({ imgSource, text }) {
	const business_type = useSelector(state => state.quote.value.businessType)
	const dispatch = useDispatch()

	function handleClick () {
		dispatch(editValue({ name: 'businessType', value: text }))
	}

	return (
		<div className={business_type == text ? 'quote-1-card quote-1-card-selected' : 'quote-1-card'} onClick={handleClick}>
			<div>
				<img src={imgSource} />
			</div>

			{
				business_type == text
				?
				<div className='quote-1-card-check'>
					<IoIosCheckmark />
				</div>
				:
				<></>
			}

			<div>{text}</div>
		</div>
	)
}

export function FirstQuote () {

	const [quote1Input, setQuote1Input] = useState('')
	const [errMsg, setErrMsg] = useState('')
	const navigate = useNavigate()
	const business_type = useSelector(state => state.quote.value.businessType)
	const dispatch = useDispatch()


	function changeHandler (e) {
		dispatch(editValue({ name: 'businessType', value: e.target.value }))
		setQuote1Input(e.target.value)
	}

	function nextPage () {
		if (!business_type || business_type == '') {
				setErrMsg("Select business type (or specify if it's not included above)")

				setTimeout(() => {
					setErrMsg('')
				}, 800)
			return;
		}

		navigate('/quote/2')
	}

	useLayoutEffect(() => {
		document.documentElement.scrollTo(90, 0)
	}, [])

	return (
		<div className='quote-1'>
			<div className='quote-1-cnt'>
				<div className='quote-1-hdr'>
					<div> Choosing Your Mission: What's Your Type of Adventure?</div>
					<div>Every hero needs a worthy cause. Choose your business type, and we’ll craft the perfect waste management solution. Whether you're feeding the community or building the future, SUGE has the power to support your mission!</div>
				</div>

				<div className='quote-1-imgs'>
					<FirstQuoteCard text='Food and Beverage Manufacture' imgSource={img1} />
					<FirstQuoteCard text='Farming' imgSource={img2} />
					<FirstQuoteCard text='Transfer Station' imgSource={img3} />
					<FirstQuoteCard text='Council' imgSource={img4} />
					<FirstQuoteCard text='Others' imgSource={img5} />

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

				<div className='quote-1-other'>
					<span>Other (Please Specify)</span>
					<input type='text' placeholder='Enter text here' value={quote1Input} onChange={changeHandler} />
				</div>
			</div>

			<PrimaryButton text='Next' action={nextPage} />
		</div>
	)
}