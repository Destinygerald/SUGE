import './style.css'
import './style.1600.css'
import './style.mobile.css'
import { Route, Routes } from 'react-router-dom'
import img1 from  '/images/SUGE ASSETS/Lighting Black.webp'
import { BlogCard } from './Components/BlogCard.jsx'
import { BlogPage } from './Components/BlogPage.jsx'

function Index () {
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
					Array.from(Array(6)).map((_,i) => (
						<BlogCard key={i} id={i} />
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