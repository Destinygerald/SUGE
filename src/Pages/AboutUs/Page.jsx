import './style.css'
import './style.mobile.css'
import { Banner } from '../../Components/Banner.jsx'
import { Mission } from './Components/Mission.jsx'
import { Section2 } from './Components/Section2.jsx'
import { Video } from './Components/Video.jsx'
import { SugeHeroes } from './Components/SugeHeroes.jsx'

function Page () {
	return (
		<div className='about-us'>
			<Banner page='About Us' />
			<Mission />
			<Section2 />
			<Video />
			<SugeHeroes />
		</div>
	)
}

export default Page