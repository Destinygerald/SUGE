import './style.css'
import './style.mobile.css'
import Logo from '/images/Asset 5300 4.webp'
import Flash from '/images/FLASH/Lighting Black-2.webp'

export function Banner ({ page }) {
	return (
		<div className='banner-x'>
			<h1> {page} </h1>

			<div>
				<img src={Logo} loading='lazy' alt='suge-logo' />
			</div>

			<img src={Flash} className='banner-x-flash' alt='green-flash' />

			<div className='banner-x-line'/>
		</div>
	)
}