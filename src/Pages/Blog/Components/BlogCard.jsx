import '../style.css'
import '../style.mobile.css'
import '../style.1600.css'
import { useState, useEffect } from 'react'
import { IoCalendarOutline } from 'react-icons/io5'
import { GoClock } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'

const DAYS = [
	'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
]

const MONTH = [
	'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

export function BlogCard ({ id, image, title, content, readtime, date }) {

	const [ dateConvert, setDateConvert ] = useState('')

	const navigate = useNavigate()

	function readBlog () {
		navigate(`/blog/${id}`)
	}

	useEffect(() => {

		// console.log(date)

		if (!date) return;

		let convertedDate = new Date(date)

		setDateConvert(convertedDate)
	}, [date])

	return (
		<div className='blog-card' onClick={readBlog}>
			<div className='blog-card-img'>
				<img src={image} />
			</div>

			<div className='blog-card-cnt'>
				<div className='blog-card-title'>
					{
						title
						||
						'------'
					}
				</div>

				<div className='blog-card-datetime'>
					<div>
						<span> <IoCalendarOutline /> </span>
						<span>{ dateConvert ? `${DAYS[dateConvert.getDay()]} ${MONTH[dateConvert.getMonth()]} ${dateConvert.getFullYear()} ` : '10 Jan 2025'}</span>
					</div>

					<div />

					<div>
						<span> <GoClock /> </span>
						<span>{readtime || 3} mins</span>
					</div>
				</div>

				<div className='blog-card-content'>
					{
						content?.slice(0, 200)
						?
						content?.slice(0, 200) + '...'
						:
						'----'
					}
				</div>
			</div>

		</div>
	)
}