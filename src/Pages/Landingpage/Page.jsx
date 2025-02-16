import './style.css'
import './style.mobile.css'
import { Banner } from './Components/Banner.jsx'
import { Patners } from './Components/Patners.jsx'
import { Message } from './Components/Message.jsx'
import { Message2 } from './Components/Message2.jsx'
import { Message3 } from './Components/Message3.jsx'
import { GreenDiv } from './Components/GreenDiv.jsx'
import { LoadPopup } from '../../Components/LoadPopup.jsx'
import { useSelector } from 'react-redux'

function Page () {

	const load_popup = useSelector(state => state.loadPopup.value)

	return (
		<div className='landing-page'>
			<Banner />
			<Patners />
			<Message />
			<Message2 />
			<Message3 />
			<GreenDiv />

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