import './style.css'
import './style.mobile.css'
import './style.1600.css'
import { Routes, Route, useParams } from 'react-router-dom'
import { FirstQuote } from './Pages/FirstQuote.jsx'
import { SecondQuote } from './Pages/SecondQuote.jsx'
import { ThirdQuote } from './Pages/ThirdQuote.jsx'
import { FourthQuote } from './Pages/FourthQuote.jsx'
import { FifthQuote } from './Pages/FifthQuote.jsx'
import { SixthQuote } from './Pages/SixthQuote.jsx'
import { Helmet } from 'react-helmet-async'
import img1 from  '/images/SUGE ASSETS/Lighting Black.webp'
import { SEO } from '../../Components/SEO.jsx'



function Indicator ({ type }) {
	const params = useParams()

	// console.log(params['*'])

	return (
		<div className={type}>
			<div className='quote-id' id='suge-quote-id-business'> 
				<span className='green-id'>1</span>
				<span>Business Type</span>
			</div>

			<div className='quote-line' />

			<div className='quote-id' id='suge-quote-id-waste-type'> 
				<span className={params['*'] >= 2 ? 'green-id' : '' }>2</span>
				<span>Waste Type</span>
			</div>

			<div className='quote-line' />


			<div className='quote-id' id='suge-quote-id-vol'> 
				<span className={params['*'] >= 3 ? 'green-id' : '' }>3</span>
				<span>Volume/Frequency</span>
			</div>

			<div className='quote-line' />

			<div className='quote-id' id='suge-quote-id-loc'> 
				<span className={params['*'] >= 4 ? 'green-id' : '' }>4</span>
				<span>Location</span>
			</div>

			<div className='quote-line' />

			<div className='quote-id' id='suge-quote-id-contact'> 
				<span className={params['*'] >= 5 ? 'green-id' : '' }>5</span>
				<span>Contact Information</span>
			</div>

			<div className='quote-line' />

			<div className='quote-id' id='suge-quote-id-review'> 
				<span className={params['*'] >= 6 ? 'green-id' : '' }>6</span>
				<span>Review & Confirm</span>
			</div>

		</div>
	)
}

function Page () {
	return (
		<div className='quote'>

			<SEO title={`Suge - Quotes | Sustainable Organic Waste Collection & Management UK`} link="https://www.suge.uk.co/quote" />

			<Indicator type='quote-indicator-mobile' />

			<div className='quote-hdr' id='suge-quote-hdr'>
				<div>Ready to Conquer Waste? <br/> Let's Get You a Quote!</div>
				<div>We’re the heroes your business needs to tackle its organic waste problems. Whether you're a food manufacturer, farmer or a business generating tonnes of organic waste, our waste haulage solutions are designed to clean up your mess and fight for a greener future. Let’s get started on your mission!</div>
			</div>

			<div className='quote-flash'> <img src={img1} alt='green-flash' /> </div>

			<div className='quote-blur'/>

			<div className='quote-cnt'>
				<Indicator type='quote-indicator' />

				<div className='quote-main'>
					
					<Routes>
						<Route index element={<FirstQuote />} />
						<Route path='*' element={<FirstQuote />} />
						<Route path='/2' element={<SecondQuote />} />
						<Route path='/3' element={<ThirdQuote />} />
						<Route path='/4' element={<FourthQuote />} />
						<Route path='/5' element={<FifthQuote />} />
						<Route path='/6' element={<SixthQuote />} />
					</Routes>

				</div>
			</div>
		</div>
	)
}

export default Page;