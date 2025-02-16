import './style.css'
import './style.mobile.css'
import Logo from '/images/Asset 5300 4.webp'
import Flash from '/images/FLASH/Lighting Black-2.webp'
// import Logo from '/images/Frame 1618868463.webp'

export function Banner ({ page }) {
	return (
		<div className='banner-x'>
			<div> {page} </div>

			<div>
				<img src={Logo} />
			</div>

			<img src={Flash} className='banner-x-flash' />

			<div className='banner-x-line'/>
		</div>
	)
}