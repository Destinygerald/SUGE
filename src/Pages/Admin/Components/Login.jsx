import '../style.css'
import '../style.mobile.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Login () {

	const [login, setLogin] = useState({
		email: '',
		password: ''
	})

	const navigate = useNavigate()

	function changeHandler(e) {
		setLogin({...login, [e.target.name]: e.target.value })
	}

	function clickHandler () {
		navigate('/admin/dashboard')
	}

	return (
		<div className='admin-login'>
			<div className='admin-login-cnt'>
				<div className='admin-login-hdr'> Login </div>
			
				<div className='admin-login-form'>
					<input type='email' placeholder='Email' name='email' value={login.email} onChange={changeHandler} />
					<input type='password' placeholder='Password' name='password' value={login.password} onChange={changeHandler} />

					<button onClick={clickHandler}>Login</button>
				</div>

			</div>


		</div>
	)
}