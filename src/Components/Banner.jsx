import './style.css'
import './style.mobile.css'
import Logo from '/images/Asset 5300 4.png'

export function Banner ({ page }) {
	return (
		<div className='banner-x'>
			<div> {page} </div>

			<div>
				<img src={Logo} />
			</div>

			<div className='banner-x-line'/>
		</div>
	)
}