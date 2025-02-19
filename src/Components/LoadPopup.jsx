import './style.css'
import './style.mobile.css'
import { BsX } from 'react-icons/bs'
import img1 from '/images/LOAD_POPUP/popup_img1.webp'
import img2 from '/images/LOAD_POPUP/popup_img2.webp'
import img3 from '/images/LOAD_POPUP/popup_img3.webp'
import { PrimaryButton } from './Buttons.jsx'
import { closePopup } from '../Redux/LoadPopup.js'
import { useDispatch } from 'react-redux'
import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export function LoadPopup () {

	const dispatch = useDispatch()
	const navigate = useNavigate()

	function bookReview () {
		navigate('/contact')
	}

	function close () {
		document.querySelector('.load-popup').classList.add('load-popup-close')
		
		setTimeout(() => {
			// document.querySelector('.load-popup').classList.add('.load-popup-close')
			dispatch(closePopup())
		}, 1800)
		
	}

	useLayoutEffect(() => {
		document.querySelector('.load-popup').classList.remove('load-popup-close')
	}, [])

	return (
		<div className='load-popup'>
			<div className='load-bck' />

			<div className='load-popup-container'>
				<span className='load-popup-exit' onClick={close}> <BsX /></span>
				<div className='load-popup-main'>
					
					<div>
						<div>
							Time to Rethink <br />
							Your Waste <br />
							Strategy?
						</div>

						<div>
							It’s never too late to save more and waste less.<br />
							Claim your FREE Waste Review today. We’ll analyse your waste management and uncover cost-effective, greener solutions tailored to your business. <br /><br />

							This offer won’t last forever—act now!
						</div>
					</div>


					<PrimaryButton text='Book Your Free Review Now' hasIcon={false} action={bookReview} />
				</div>

				<div className='load-popup-right'>
					<img src={img1} />
					<img src={img2} />
					<img src={img3} />
				</div>
			</div>
		</div>
	)
}