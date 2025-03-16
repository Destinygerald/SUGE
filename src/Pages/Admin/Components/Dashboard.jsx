import '../style.css'
import '../style.mobile.css'
import { useState, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { CiSearch, CiMenuFries } from 'react-icons/ci'
import { FaRegNewspaper } from 'react-icons/fa'
import { MdHistory } from 'react-icons/md'
import { BsX } from 'react-icons/bs'
import Logo from '/images/SUGE LOGO.webp'
import { Blog } from './Blog.jsx'
import { QuoteHistory } from './QuoteHistory.jsx'
import { profileChecker, getCookie } from '../../../Api/FetchData.js'



function Topbar ({ search, setSearch}) {

	
	function searchHandler (e) {
		setSearch(e.target.value)
	}

	return (
		<div className='admin-topbar'>
			<div className='admin-topbar-search'>
				<span> <CiSearch /> </span>
				<input type='text' value={search} onChange={searchHandler} placeholder='Search'  />
			</div>

		</div>
	)
}

function SidebarItem ({ text, icon, nav, classCheck }) {

	const navigate = useNavigate()

	return (
		<div className={ classCheck ? 'admin-sidebar-item admin-sidebar-item-active' : 'admin-sidebar-item' } onClick={() => {navigate(nav)}}>
			<span>{icon}</span>
			<span>{text}</span>

			{
				classCheck
				?
				<div className='active-side' />
				:
				<></>
			}
		</div>
	)
}

function Sidebar () {

	
	const { pathname } = useLocation()

	return (
		<div className='admin-sidebar'>
			<img src={Logo} />

			<div className='admin-sidebar-cnt'>
				<SidebarItem text='Order History' icon={<MdHistory />} nav='/admin/dashboard' classCheck={!pathname.split('/').includes('blog')} />
				<SidebarItem text='Blogs' icon={<FaRegNewspaper />} nav='blog' classCheck={pathname.split('/').includes('blog')} />
			</div>
		</div>
	)
}

function MobileNav ({ setMenu }) {
	return (
		<div className='admin-nav'>
			<img src={Logo} />

			<span className='mobile-menu' onClick={() => setMenu(true)}>
				<CiMenuFries />				
			</span>

		</div>
	)
}

function MobileSlider ({ setMenu }) {
	
	const { pathname } = useLocation()	

	return (
		<div className='admin-slider'>
			<span className='admin-slider-exit' onClick={() => setMenu(false)}> <BsX /> </span>

			<div className='admin-sidebar-cnt'>
				<SidebarItem text='Order History' icon={<MdHistory />} nav='/admin/dashboard' classCheck={!pathname.split('/').includes('blog')} />
				<SidebarItem text='Blogs' icon={<FaRegNewspaper />} nav='blog' classCheck={pathname.split('/').includes('blog')} />
			</div>

		</div>
	)
}

export function Dashboard ({ loginCheck }) {

	const [search, setSearch] = useState('')
	const [menu, setMenu] = useState(false)
	const { pathname } = useLocation()
	const navigate = useNavigate()

	
	async function checkForProfile() {
	
		const res = await profileChecker()

		console.log(res)

		if (!res) {
			setTimeout(() => {
				navigate('/admin')
			}, 200)
			return
		}


		if (res.status != 'Ok') {
			setTimeout(() => {
				navigate('/admin')
			}, 200)	
		}
		
	}

	function checkForCookies () {
		let admin_auth = getCookie()

		if (!admin_auth) {			
			setTimeout(() => {
				navigate('/admin')
			}, 200)
			
			return;
		}
		
	}

	useEffect(() => {
		checkForCookies()
		checkForProfile()
	}, [])

	useEffect(() => {
		setMenu(false)
	}, [pathname])


	return (
		<div className='admin-dashboard'>
			<Sidebar />

			<div className='admin-dashboard-main'>
				<MobileNav setMenu={setMenu} />
				{
					menu
					?
					<MobileSlider setMenu={setMenu} />
					:
					<></>
				}

				<Topbar search={search} setSearch={setSearch} />

				<div className='admin-dashboard-cnt'>
					<Routes>
						{/* <Route index element={<QuoteHistory />} /> */}
						
						<Route index element={<div className='unavailable'>Orders are unavailable for now.</div>} />	
						<Route path='/*' element={<div className='unavailable'>Orders are unavailable for now.</div>} />				
						<Route path='/blog/*' element={<Blog search={search} />} />
						{/* <Route path='/*' element={<QuoteHistory />} /> */}
					</Routes>
				</div>
			</div>
		</div>
	)
}