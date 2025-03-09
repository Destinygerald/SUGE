import '../style.css'
import '../style.mobile.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { adminLogin } from '../../../Api/FetchData.js'

function Message ({ msg, setMsg }) {
	
	setTimeout(() => {
		setMsg('')
	}, 1200)
	
	return (
		<div className='alert-message'>
			{
				msg
			}
		</div>
	)
}

export function Login ({ setLoginCheck }) {

	const [login, setLogin] = useState({
		email: '',
		password: ''
	})

	const [ loading, setLoading ] = useState(false)
	const [ msg, setMsg ] = useState('')	

	const navigate = useNavigate()

	function changeHandler(e) {
		setLogin({...login, [e.target.name]: e.target.value })
	}

	async function clickHandler () {
		setLoading(true)
		const res = await adminLogin(login)

		setLoading(false)

		setMsg(res?.message || res?.response.data?.message)
		

		if (res.status === 'Ok') {
			setLoginCheck(true)
			navigate('/admin/dashboard')
			
			setLogin({
				email: '',
				password: ''
			})

			setLoading(false)
		}

		

		
		return;
	}

	return (
		<div className='admin-login'>
			<div className='admin-login-cnt'>
				<div className='admin-login-hdr'> Login </div>
			
				<div className='admin-login-form'>
					<input type='email' placeholder='Email' name='email' value={login.email} onChange={changeHandler} />
					<input type='password' placeholder='Password' name='password' value={login.password} onChange={changeHandler} />
					
					{
						!loading
						?
						<button onClick={clickHandler}>Login</button>
						:
						<div className='login-loading'>
							<div />
						</div>
					}
				</div>

			</div>

			{	
				msg
				?
				<Message msg={msg} setMsg={setMsg} />
				:
				<></>
			}

		</div>
	)
}