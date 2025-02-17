import './style.css'
import './style.mobile.css'
import './style.1600.css'
import { Banner } from '../../Components/Banner.jsx'
import Infographics from '/images/Infographics 1.webp'
import Logo from '/images/SUGE ASSETS/Asset 5300 5.webp'
import { PrimaryButton } from '../../Components/Buttons.jsx'
import { useNavigate } from 'react-router-dom'
import Flash from '/images/SUGE ASSETS/Lighting (2).webp'

function Stat () {
	return (
		<div className='sustainability-stat'>
			<div className='sustainability-stat-left'>
				<div>Impact Statistics</div>

				<div>Our sustainability in numbers</div>
			</div>	

			<div className='sustainability-stat-right'>
				<div className='sustainability-stat-card'>
					<div>98%</div>
					<div>Client satisfaction rate for sustainability practices.</div>
				</div>

				<div className='sustainability-stat-card'>
					<div>67k+</div>
					<div>Tonnes of solid organic waste diverted from landfills</div>
				</div>

				<div className='sustainability-stat-card'>
					<div>21k+</div>
					<div>Landfill CO2e emissions saved</div>
				</div>

			</div>
		</div>
	)
}

function SustainabilityInfo () {

	const navigate = useNavigate()

	function toContact () {
		navigate('/contact')
	}

	return (
		<div className='sustainability-info'>
			<div>
				<img src={Logo} />
			</div>

			<div>
				<img src={Flash} />
			</div>

			<div>
				<span>Partner with Us</span>
				<PrimaryButton text='Contact Us' hasIcon={false} action={toContact} />
			</div>
		</div>
	)
}


function Page () {
	return (
		<div className='sustainability'>
			<Banner page='Sustainability' />
			<Stat />
			<div className='sustainability-img'>
				<img src={Infographics} />
			</div>
			<SustainabilityInfo />
			<div className='sustainability-blur'/>

		</div>
	)
}

export default Page