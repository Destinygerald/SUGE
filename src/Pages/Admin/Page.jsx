import './style.css'
import './style.mobile.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Components/Login.jsx'
import { Dashboard } from './Components/Dashboard.jsx'

function Page () {
	return (
		<div className='admin'>
			<Routes>
				<Route index element={<Login />} />
				<Route path='*' element={<Login />} />
				<Route path='/dashboard/*' element={<Dashboard/>} />
			</Routes>
		</div>
	)
}

export default Page