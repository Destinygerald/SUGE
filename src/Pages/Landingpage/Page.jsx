import './style.css'
import './style.mobile.css'
import './style.1600.css'
import { Suspense, lazy, useEffect } from 'react'
import { Banner } from './Components/Banner.jsx'
import { Patners } from './Components/Patners.jsx'
import { fetchBlogs } from '../../Api/FetchData.js'
import { setBlogList } from '../../Redux/BlogList.jsx'
import { Helmet } from 'react-helmet-async'

const Message = lazy(() => import('./Components/Message.jsx').then(module => {
	return { default: module.Message }
}))

const Message2 = lazy(() => import('./Components/Message2.jsx').then(module => {
	return { default: module.Message2 }
}))

const Message3 = lazy(() => import('./Components/Message3.jsx').then(module => {
	return { default: module.Message3 }
}))

const GreenDiv = lazy(() => import('./Components/GreenDiv.jsx').then(module => {
	return { default: module.GreenDiv }
}))

const Blogs = lazy(() => import('./Components/Blogs.jsx').then(module => {
	return { default: module.Blogs }
}))

import { StandIn } from '../../Components/Loader.jsx'
import { LoadPopup } from '../../Components/LoadPopup.jsx'
import { useSelector, useDispatch } from 'react-redux'

function Page () {

	const load_popup = useSelector(state => state.loadPopup.value)
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
		<div className='landing-page'>
			<Helmet>
				<title>SUGE | Sustainable Organic Waste Collection & Management UK</title>
				<link rel="canonical" href="https://www.suge.uk.co/" />
			</Helmet>

			<Banner />
			<Patners />

			<Suspense fallback={<StandIn />}>
				<Message />
				<Message2 />
				<Message3 />
				<Blogs />
				<GreenDiv />
			</Suspense>

			{	
				load_popup
				?
				<LoadPopup />
				:
				<></>
			}
			
			

		</div>
	)
}

export default Page