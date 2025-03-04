import '../style.css'
import '../style.mobile.css'
import '../style.1600.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IoCalendarOutline } from 'react-icons/io5'
import { GoClock } from 'react-icons/go'
import { fetchBlogContent } from '../../../Api/FetchData'


const DAYS = [
	'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
]

const MONTH = [
	'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]


function Paragraph ({ cnt, hdr, img }) {

	return (
		<div className='paragraph'>
			{
					hdr
					?
					<div className='paragraph-hdr'> {hdr} </div>
					:
					<></>
				}

				{
					!img
					?
					<div className='paragraph-noimg-nolist'>
						{cnt}
					</div>
					:
					<div className='paragraph-with-img'>
						<div className='paragraph-with-img-cnt'>
							{cnt}
						</div>

						<div className='paragraph-with-img-container'>
							<img src={img} />
						</div> 
					</div>
				}
		</div>
	)
}

export function BlogPage () {

	const [ blogData, setBlogData ] = useState({})
	const [ dateConvert, setDateConvert ] = useState('')

	const { id } = useParams()

	async function fetchDataInfo() {
		const info = await fetchBlogContent(id)

		setBlogData({...info?.data})

		let convertedDate = new Date(info?.data.dateAdded)

		setDateConvert(convertedDate)
	}

	useEffect(() => {
		fetchDataInfo()
	}, [])


	return (
		<div className='blog-page'>
			<div className='blog-page-hdr'>
				<div>{ blogData?.title || '-------------------------------'}</div>

				<div>
					<div>
						<span> <IoCalendarOutline /> </span>
						<span>{ dateConvert ? `${DAYS[dateConvert.getDay()]} ${MONTH[dateConvert.getMonth()]} ${dateConvert.getFullYear()} ` : '10 Jan 2025'}</span>
					</div>

					<div />

					<div>
						<span> <GoClock /> </span>
						<span>{blogData?.readTime || '--'} mins</span>
					</div>
				</div>
			</div>



			<div className='blog-paragraphs'>
				{
					blogData?.content?.length > 0
					?
					blogData?.content?.map((item, i) => (
						<Paragraph hdr={item?.header} cnt={item?.content} img={item?.img} />
					))
					:
					<></>
				}
			</div>
		</div>
	)
}


// 293733d9