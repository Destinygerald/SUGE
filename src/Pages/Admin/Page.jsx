import './style.css'
import './style.mobile.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Components/Login.jsx'
import { Dashboard } from './Components/Dashboard.jsx'
import { useState } from 'react'

function Page () {

	const [loginCheck, setLoginCheck] = useState(false) 

	return (
		<div className='admin'>
			<Routes>
				<Route index element={<Login setLoginCheck={setLoginCheck} />} />
				<Route path='*' element={<Login setLoginCheck={setLoginCheck} />} />
				<Route path='/dashboard/*' element={<Dashboard loginCheck={loginCheck}/>} />
			</Routes>
		</div>
	)
}

export default Page