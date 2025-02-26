import '../style.css'
import '../style.mobile.css'
import '../style.1600.css'
import { useParams } from 'react-router-dom'
import { IoCalendarOutline } from 'react-icons/io5'
import { GoClock } from 'react-icons/go'

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
					{
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
					}
				</div>
		</div>
	)
}

function ParagraphWithImageAndList ({ list, hdr, img }) {
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
					}
				</div>
			</div>

			<div className='paragraph-img-with-list'>
				<img src={img} />
			</div>
		</div>
	)	
}

function Paragraph ({ cnt, hasImg, hasList, hdr, img }) {
	return (
		<div className='paragraph'>
			
			{
				!hasImg && !hasList
				?
				<>
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
				</>
				:
				hasImg && hasList
				?
				<ParagraphWithImageAndList list={cnt} hdr={hdr} img={img} />
				:
				<></>
			}
		</div>
	)
}

export function BlogPage () {

	const { id } = useParams()

	return (
		<div className='blog-page'>
			<div className='blog-page-hdr'>
				<div>Understanding Waste Sorting: A Key to Effective Recycling</div>

				<div>
					<div>
						<span> <IoCalendarOutline /> </span>
						<span>{'10 Jan 2025'}</span>
					</div>

					<div />

					<div>
						<span> <GoClock /> </span>
						<span>{'3 min'}</span>
					</div>
				</div>
			</div>

			<div className='blog-paragraphs'>
				<Paragraph hasImg={false} hasList={false} cnt='Recycling is one of the simplest yet most effective ways to reduce waste and minimize our environmental impact. But did you know that the success of recycling largely depends on how we sort our waste? Waste sorting—separating recyclables from non-recyclables and organizing materials for proper disposal—is a crucial first step in ensuring that valuable resources don’t end up in landfills.
Why Waste Sorting Matters
When waste is mixed, recyclables like paper, plastic, glass, and metal can’t be processed efficiently. This results in contamination, making it difficult or even impossible for recycling facilities to extract usable materials. By sorting waste correctly, we increase the likelihood that these materials will be properly recycled and repurposed, rather than being discarded as trash.' />
			
				<Paragraph hasImg={true} hasList={true} cnt={List} hdr='How to Sort Waste Effectively'  />


				<Paragraph hasImg={false} hasList={false} cnt="Sorting waste isn’t just a responsibility—it’s an opportunity to make a difference. When done correctly, it ensures that recyclables are processed properly, reducing the need for virgin materials, saving energy, and cutting down on landfill waste. It also helps create a circular economy where products are reused and recycled, reducing our reliance on natural resources.
By understanding the importance of waste sorting, we can all take small steps that add up to big environmental changes. So, the next time you’re about to throw something away, take a moment to think about whether it can be recycled, composted, or reused—and help make the planet a little bit greener!" hdr='The Benefits of Proper Waste Sorting' />
			</div>
		</div>
	)
}