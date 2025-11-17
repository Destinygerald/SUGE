import './style.css'
import './style.mobile.css'
import { BsX } from 'react-icons/bs'
import img1 from '/images/LOAD_POPUP/popup_img1.webp'
import img2 from '/images/LOAD_POPUP/popup_img2.webp'
import img3 from '/images/LOAD_POPUP/popup_img3.webp'
import { PrimaryButton } from './Buttons.jsx'
import { closePopup } from '../Redux/LoadPopup.js'
import { useDispatch, useSelector } from 'react-redux'
import { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export function LoadPopup () {

	const active_popup = useSelector(state => state.admin_popups.value.activePopup)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	function bookReview () {
		navigate('/contact')
	}

	function close () {
		document.querySelector('.load-popup').classList.add('load-popup-close')
		
		setTimeout(() => {
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
						<div> { active_popup?.title } </div>
						<div> { active_popup?.content } </div>
					</div>


					<PrimaryButton text='Book Your Free Review Now' hasIcon={false} action={bookReview} />
				</div>

				<div className='load-popup-right'>
					<img src={img1} alt='suge-logo-image' />
					<img src={img2} alt='suge-logo-image' />
					<img src={img3} alt='suge-logo-image' />
				</div>
			</div>
		</div>
	)
}