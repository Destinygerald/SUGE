import './style.css'
import './style.mobile.css'
import './style.1600.css'
import { Suspense, lazy } from 'react'
import { Banner } from './Components/Banner.jsx'
import { Patners } from './Components/Patners.jsx'

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

import { StandIn } from '../../Components/Loader.jsx'
import { LoadPopup } from '../../Components/LoadPopup.jsx'
import { useSelector } from 'react-redux'

function Page () {

	const load_popup = useSelector(state => state.loadPopup.value)

	return (
		<div className='landing-page'>
			<Banner />
			<Patners />

			<Suspense fallback={<StandIn />}>
				<Message />
				<Message2 />
				<Message3 />
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