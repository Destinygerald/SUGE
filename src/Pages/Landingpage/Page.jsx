import './style.css'
import './style.mobile.css'
import './style.1600.css'
import { Suspense, lazy, useEffect } from 'react'
import { Banner } from './Components/Banner.jsx'
import { Patners } from './Components/Patners.jsx'
import { fetchBlogs, active_popups } from '../../Api/FetchData.js'
import { setBlogList } from '../../Redux/BlogList.jsx'
import { setActivePopup } from '../../Redux/PopupList.jsx'
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
import { SEO } from '../../Components/SEO.jsx'
import { LoadPopup } from '../../Components/LoadPopup.jsx'
import { useSelector, useDispatch } from 'react-redux'

function Page () {

	const load_popup = useSelector(state => state.loadPopup.value)
	const blogList = useSelector(state => state.blogList.value)
	const active_popup = useSelector(state => state.admin_popups.value.activePopup)
	const dispatch = useDispatch()

	async function handleBlog() {
	
		if (blogList[0]) return;

		const blog = await fetchBlogs()

		dispatch(setBlogList([...blog.result]))
	}

	async function getPopup () {
		if (active_popup?.title && active_popup?.content) return;

		const res = await active_popups()
		if (res.status != 'Ok') return;

		dispatch(setActivePopup({...res.data}))
	}

	useEffect(() => {
		handleBlog()
		getPopup()
	}, [])

	return (
		<div className='landing-page'>
		
			<SEO title={`SUGE | Sustainable Organic Waste Collection & Management UK`} description="SUGE - One mission. Zero landfill. SUGE leads the charge in sustainable organic waste collection, turning waste into power for a greener UK. Reliable, compliant, cost-saving waste collection for food production companies & businesses across the UK." />		

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
				load_popup && active_popup?.title
				?
				<LoadPopup />
				:
				<></>
			}

			
			{/* <div class="trustpilot-widget" data-locale="en-GB" data-template-id="56278e9abfbbba0bdcd568bc" data-businessunit-id="67dc5b64a57f6e869ad0e8a8" data-style-height="52px" data-style-width="100%">
				<a href="https://uk.trustpilot.com/review/suge.co.uk" target="_blank" rel="noopener">Trustpilot</a>
			</div> */}
			

		</div>
	)
}

export default Page