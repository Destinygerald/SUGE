import './style.css'
import './style.mobile.css'
import { GoArrowRight } from 'react-icons/go'

export function PrimaryButton ({ text, action, hasIcon=true }) {
	return (
		<button className='primary-btn' onClick={action}>
			{text}

			{
				hasIcon
				?
				<span> <GoArrowRight /> </span>
				:
				<></>
			}
		</button>
	)
}

export function SecondaryButton ({ text, action }) {
	return (
		<button className='secondary-btn' onClick={action}>
			{text}
		</button>
	)
}