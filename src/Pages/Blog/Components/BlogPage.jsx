import '../style.css'
import '../style.mobile.css'
import '../style.1600.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { IoCalendarOutline } from 'react-icons/io5'
import { GoClock } from 'react-icons/go'
import { fetchBlogContent } from '../../../Api/FetchData'

const List = [
	{
		title: "Know What Can Be Recycled",
		cnt: "Not all items are recyclable. Common recyclables include paper, cardboard, certain plastics, glass containers, and metals. However, items like greasy pizza boxes, plastic bags, or food waste should not be placed in the recycling bin. Always check local guidelines to ensure you're sorting correctly."
	},
	{
		title: "Separate Organics from Non-Organics",
		cnt: "Organic waste, such as food scraps and yard trimmings, should be kept separate for composting. Composting organic waste reduces landfill overflow and provides nutrient-rich material for gardens."
	},
	{
		title: "Use Clearly Marked Bins",
		cnt: "Label your bins for recyclables, compost, and trash. Having separate bins for each category makes it easier to avoid contamination and encourages proper sorting."
	},
	{
		title: "Clean Your Recyclables",
		cnt: "Before tossing items into the recycling bin, make sure they're clean and dry. Leftover food or liquids can ruin entire batches of recyclables and lead to contamination."
	}
]

const DAYS = [
	'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
]

const MONTH = [
	'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
]

function ParagraphWithListNoImage ({ list, hdr }) {
	return (
		<div className='paragraph-list-with-no-img'>
			{
					hdr
					?
					<div className='paragraph-hdr'> {hdr} </div>
					:
					<></>
				}

				<div className='paragraph-list'>
					{/* {
						list?.map((item, i) => (
							<div className='paragraph-list-item'>
								
								<span>{i + 1}.</span>

								<div className='paragraph-list-item-cnt'>
									<div>
										{item?.title}
									</div>

									<div>
										{item?.cnt}
									</div>
								</div>
							</div>
						))
					} */}
				</div>
		</div>
	)
}

function ParagraphWithImageAndList ({ list, hdr, img }) {
	// console.log(list.split('\n'))
	return (
		<div className='paragraph-with-list-and-img'>
			<div className='paragraph-list-with-img'>
				{
					hdr
					?
					<div className='paragraph-hdr'> {hdr} </div>
					:
					<></>
				}

				<div className='paragraph-list'>
					{
						list
						?
						list?.split('\n')?.map((item, i) => (
							<div className='paragraph-list-item' key={i}>
								
								<span>{i + 1}.</span>

								<div className='paragraph-list-item-cnt'>
									{/* <div>
										{item}
									</div> */}

									<div>
										{item}
									</div>
								</div>
							</div>
						))
						:
						<></>
					}
				</div>
			</div>

			<div className='paragraph-img-with-list'>
				<img src={img} />
			</div>
		</div>
	)	
}

function Paragraph ({ cnt, hdr }) {

	return (
		<div className='paragraph'>
			{
					hdr
					?
					<div className='paragraph-hdr'> {hdr} </div>
					:
					<></>
				}

				<div className='paragraph-noimg-nolist'>
					{cnt}
				</div>
		</div>
	)
}

export function BlogPage () {

	const [ blogData, setBlogData ] = useState({})

	const { id } = useParams()

	async function fetchDataInfo() {
		const info = await fetchBlogContent(id)

		console.log(info)

		setBlogData({...info})
	}

	useEffect(() => {
		fetchDataInfo()
	}, [])

	// title={item?.answers['1cc11b4c'].textAnswers.answers[0].value}
	// readtime={item?.answers["59fe0f02"].textAnswers.answers[0].value} 
	// content={item?.answers["2e2da32f"].textAnswers.answers[0].value} 
	// date={item?.createTime}

	return (
		<div className='blog-page'>
			<div className='blog-page-hdr'>
				<div>{ blogData?.answers ? blogData?.answers['1cc11b4c']?.textAnswers.answers[0].value : 'Understanding Waste Sorting: A Key to Effective Recycling'}</div>

				<div>
					<div>
						<span> <IoCalendarOutline /> </span>
						<span>{'10 Jan 2025'}</span>
					</div>

					<div />

					<div>
						<span> <GoClock /> </span>
						<span>{ blogData?.answers ? blogData?.answers["59fe0f02"]?.textAnswers.answers[0].value : 3} min</span>
					</div>
				</div>
			</div>



			<div className='blog-paragraphs'>
				
					
					<Paragraph title={blogData?.answers?.["73f8cc34"]?.textAnswers.answers[0].value}  cnt={blogData?.answers?.['3dfaead8']?.textAnswers.answers[0].value} />

					<ParagraphWithImageAndList title={blogData?.answers?.["73f8cc34"]?.textAnswers.answers[0].value} list={blogData?.answers?.["293733d9"]?.textAnswers.answers[0].value} />
					{/* <Paragraph hasImg={true} hasList={true} title={blogData?.answers?.["633b0cd6"]?.textAnswers.answers[0].value} cnt={blogData?.answers?.['293733d9']?.textAnswers.answers[0].value} /> */}

					<Paragraph cnt={blogData?.answers?.['3dfaead8']?.textAnswers.answers[0].value} />	
			</div>
		</div>
	)
}


// 293733d9