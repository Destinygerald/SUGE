import './style.css'
import './style.1600.css'
import './style.mobile.css'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import img1 from  '/images/SUGE ASSETS/Lighting Black.webp'
import { BlogCard } from './Components/BlogCard.jsx'
import { BlogPage } from './Components/BlogPage.jsx'
import { BlogTemplate1 } from './Components/BlogTemplates/BlogTemplate1.jsx'
import { BlogTemp } from './Components/BlogTemplates/BlogTemplateAssig.jsx'
import { fetchBlogs } from '../../Api/FetchData.js'
import { BlogPlaceholder } from './Components/PlaceholderData.js'
import { useDispatch, useSelector } from 'react-redux'
import { setBlogList } from '../../Redux/BlogList.jsx'

function Index () {
	
		const blogList = useSelector(state => state.blogList.value)
		const dispatch = useDispatch()
	
	
		async function handleBlog() {

			if (blogList[0]) return;

			const blog = await fetchBlogs()

			dispatch(setBlogList([...blog.result]))
			
		}

	

	useEffect(() => {
		handleBlog()
	}, [])

	return (
		<div className='blog-index'>
			<div className='blog-index-hdr'>
				<div>Our Blog</div>

				<div>
					Welcome to our Suge Blog, where sustainability meets innovation. Our mission is to provide you with the knowledge, tools, and inspiration needed to reduce waste, recycle responsibly, and create a cleaner, greener future for all. Whether you're a business owner, community leader, or eco-conscious individual, we're here to guide you through every step of managing waste effectively. Join us on this journey towards a more sustainable world, one waste-free choice at a time.
				</div>
			</div>

			<div className='blog-index-grid'>
				{
					blogList?.map((item, i) => (
						<BlogCard key={'blog-card-' + i} id={item?._id} image={item?.img} title={item?.title} content={item?.content} readtime={item?.readTime} date={item?.dateAdded} />
					))
				}
			</div>

		</div>
	)
}

function Page () {
	return (
		<div className='blog'>
			<Routes>
				<Route index element={<Index />} />
				<Route path='/:id' element={<BlogTemp />} />
				<Route path="/template" element={<BlogTemp />} />
			</Routes>

			<div className='blog-flash'> <img src={img1} /> </div>
		</div>
	)
}

export default Page;