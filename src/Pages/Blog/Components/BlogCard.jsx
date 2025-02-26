import '../style.css'
import '../style.mobile.css'
import '../style.1600.css'
import { IoCalendarOutline } from 'react-icons/io5'
import { GoClock } from 'react-icons/go'
import { useNavigate } from 'react-router-dom'

export function BlogCard ({ id, image, title, content, readtime, date }) {
	
	const navigate = useNavigate()

	function readBlog () {
		navigate(`/blog/${id}`)
	}

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
						'Understanding Waste Sorting: A Key to Effective Recycling'
					}
				</div>

				<div className='blog-card-datetime'>
					<div>
						<span> <IoCalendarOutline /> </span>
						<span>{date || '10 Jan 2025'}</span>
					</div>

					<div />

					<div>
						<span> <GoClock /> </span>
						<span>{readtime || '3 min'}</span>
					</div>
				</div>

				<div className='blog-card-content'>
					{
						content
						||
						'Zero landfill, 100% recycled. We team up with cutting-edge AD plants to ensure your waste gets a new lease of life.'
					}
				</div>
			</div>

		</div>
	)
}