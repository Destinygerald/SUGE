import '../style.css'
import '../style.mobile.css'
import { useState, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { CiSearch, CiMenuFries } from 'react-icons/ci'
import { MdHistory } from 'react-icons/md'
import { FaRegNewspaper } from 'react-icons/fa'
import Logo from '/images/SUGE LOGO.webp'
import { QuoteHistory } from './QuoteHistory.jsx'
import { QuoteInfo } from './QuoteInfo.jsx'


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

function SidebarItem ({ text, icon, nav }) {

	const { pathname } = useLocation()

	// console.log(pathname.split('/'))

	return (
		<div className={pathname.split('/')[2] == nav ? 'admin-sidebar-item admin-sidebar-item-active' : 'admin-sidebar-item' }>
			<span>{icon}</span>
			<span>{text}</span>

			{
				pathname.split('/')[2] == nav
				?
				<div className='active-side' />
				:
				<></>
			}
		</div>
	)
}

function Sidebar () {
	return (
		<div className='admin-sidebar'>
			<img src={Logo} />

			<div className='admin-sidebar-cnt'>
				<SidebarItem text='Order History' icon={<MdHistory />} nav='dashboard' />
				<SidebarItem text='Blogs' icon={<FaRegNewspaper />} />
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

export function Dashboard () {

	return (
		<div className='admin-dashboard'>
			<Sidebar />

			<div className='admin-dashboard-main'>
				<MobileNav />

				<Topbar />

				<div className='admin-dashboard-cnt'>
					<Routes>
						<Route index element={<QuoteHistory />} />
						<Route path='/:id' element={<QuoteInfo />} />
					</Routes>
				</div>
			</div>
		</div>
	)
}