import '../style.css'
import '../style.mobile.css'
import { useState, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { CiSearch, CiMenuFries } from 'react-icons/ci'
import { MdHistory } from 'react-icons/md'
import { FaRegNewspaper } from 'react-icons/fa'
import Logo from '/images/SUGE LOGO.webp'
import { QuoteHistory } from './QuoteHistory.jsx'
import { QuoteInfo } from './QuoteInfo.jsx'
import { Blog } from './Blog.jsx'
import { profileChecker, getCookie } from '../../../Api/FetchData.js'



function Topbar () {

	const [search, setSearch] = useState('')
	const pathname = useLocation()

	function searchHandler (e) {
		setSearch(e.target.value)
	}

	useEffect(() => {

	}, [])

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
				{/* <SidebarItem text='Order History' icon={<MdHistory />} nav='' classCheck={pathname.split('/')[2] == 'dashboard' && pathname.split('/')[3] != 'blog'} /> */}
				<SidebarItem text='Blogs' icon={<FaRegNewspaper />} nav='blog' classCheck={true} />
			</div>
		</div>
	)
}

function MobileNav () {
	return (
		<div className='admin-nav'>
			<img src={Logo} />

			<span className='mobile-menu'>
				<CiMenuFries />				
			</span>

		</div>
	)
}

export function Dashboard ({ loginCheck }) {

	const navigate = useNavigate()

	
	async function checkForProfile() {
	
		const res = await profileChecker()

		if (!res) {
			// console.log("Profile not found")
			return navigate('/admin')
		}


		if (res.status != 'Ok') {
			navigate('/admin')	
		}
		
	}

	useEffect(() => {

		let admin_auth = getCookie()

		if (!loginCheck){ // Forgive the unnecessary nesting😣
			if (!admin_auth) {
				navigate('/admin')
				return;
			}
		}


		checkForProfile()
	}, [])


	return (
		<div className='admin-dashboard'>
			<Sidebar />

			<div className='admin-dashboard-main'>
				<MobileNav />

				<Topbar />

				<div className='admin-dashboard-cnt'>
					<Routes>
						<Route index element={<Blog   />} />
						<Route path='/blog/*' element={<Blog  />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}