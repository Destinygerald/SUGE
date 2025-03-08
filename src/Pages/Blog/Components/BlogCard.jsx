import '../style.css'
import '../style.mobile.css'
import '../style.1600.css'
import { useState, useEffect } from 'react'
import { IoCalendarOutline } from 'react-icons/io5'
import { GoClock } from 'react-icons/go'
import { useNavigate, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {  DAYS, MONTH, BlogPlaceholder } from './PlaceholderData.js'
import { setBlogData } from '../../../Redux/Blogs.jsx'


export function BlogCard ({ id, image, title, content, readtime, date }) {

	const [ dateConvert, setDateConvert ] = useState('')

	const navigate = useNavigate()
	const dispatch = useDispatch()
	const { pathname } = useLocation()

	function readBlog () {
		if (pathname.includes('admin')) {
			navigate(`/admin/dashboard/blog/${id}`)
			return;
		} else {
			dispatch(setBlogData({
                _id: '',
                template: '',
                readTime: 0,
                title: '',
                content: []
            }))
			navigate(`/blog/${id}`)
		}
	}


	useEffect(() => {

		if (!date) return;

		let convertedDate = new Date(date)

		setDateConvert(convertedDate)
	}, [date])

	return (
		<div className='blog-card' onClick={readBlog}>
			<div className='blog-card-img'>
				{
					image
					?
					<img src={image} />
					:
					<div className='blog-img-alt'>{content?.split('')[0]}</div>
				}
			</div>

			<div className='blog-card-cnt'>
				<div className='blog-card-title'>
					{
						title.length <= 60
						?
						title
						:
						title.slice(0, 60) + '...'
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
						pathname.includes('/admin')
						?
						content.slice(0, 40) + '...'
						:
						content?.slice(0, 200) + '...'
						:
						'----'
					}
				</div>
			</div>

		</div>
	)
}