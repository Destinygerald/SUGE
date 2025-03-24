import './style.css'
import './style.mobile.css'
import './style.1600.css'
import { Suspense, lazy } from 'react'
import { Helmet } from 'react-helmet-async'
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
import { SEO } from '../../Components/SEO.jsx'

function Page () {
	return (
		<div className='about-us'>

			<SEO title={`Suge - About | Sustainable Organic Waste Collection & Management UK`} link="https://www.suge.uk.co/about" description="SUGE - One mission. Zero landfill. SUGE leads the charge in sustainable organic waste collection, turning waste into power for a greener UK. Reliable, compliant, cost-saving waste collection for food production companies & businesses across the UK." />
	
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