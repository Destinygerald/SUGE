import './style.css'
import './style.1600.css'
import './style.mobile.css'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import img1 from  '/images/SUGE ASSETS/Lighting Black.webp'
import { BlogCard } from './Components/BlogCard.jsx'
import { BlogPage } from './Components/BlogPage.jsx'
import { fetchBlogs } from '../../Api/FetchData.js'

function Index () {

	const [blogList, setBlogList] =  useState([])

	async function handleBlog() {
		const blog = await fetchBlogs()

		if (!blog?.responses) return;

		setBlogList(blog.responses)
	}

	useEffect(() => {
		handleBlog()
	}, [])

	console.log(blogList)

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
					blogList.map((item,i) => (
						<BlogCard key={i} id={item?.responseId} title={item?.answers['1cc11b4c'].textAnswers.answers[0].value} readtime={item?.answers["59fe0f02"]?.textAnswers.answers[0].value} content={item?.answers["3dfaead8"]?.textAnswers.answers[0].value} date={item?.createTime} />
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
				<Route path='/:id' element={<BlogPage />} />
			</Routes>

			<div className='blog-flash'> <img src={img1} /> </div>
		</div>
	)
}

export default Page;