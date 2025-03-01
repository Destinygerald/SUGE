import './style.css'
import './style.mobile.css'
import './style.1600.css'
import { Suspense, lazy } from 'react'
import { Banner } from '../../Components/Banner.jsx'
import { Mission } from './Components/Mission.jsx'

const Section2 = lazy(() => import('./Components/Section2.jsx').then(module => {
	return { default: module.Section2 }
}))

const Video = lazy(() => import('./Components/Video.jsx').then(module => {
	return { default: module.Video }
}))

const SugeHeroes = lazy(() => import('./Components/SugeHeroes.jsx').then(module => {
	return { default: module.SugeHeroes }
}))

import { StandIn } from '../../Components/Loader.jsx'

function Page () {
	return (
		<div className='about-us'>
			<Banner page='About Us' />
			<Mission />

			<Suspense fallback={<StandIn />}>
				<Section2 />
				<Video />
				<SugeHeroes />
			</Suspense>
		</div>
	)
}

export default Page