import '../style.css'
import '../style.mobile.css'
import img1 from '/images/Severn_Trent_logo_(2010).svg.png'
import img2 from '/images/cropped-Biodynamic-logo 1.png'
import img3 from '/images/cropped-imageedit_2_4879414357-removebg-preview 1.png'
import img4 from '/images/bioganix-logo.png'
import img5 from '/images/website-logo.png'

function PatnersLogo ({ source }) {
	return (
		<div className='partners-logo'>
			<img src={source} />
		</div>
	)
}

export function Patners () {
	return (
		<div className='partners'>
			<span>Our Trusted Partners</span>

			<div className='partners-cnt'>
				<PatnersLogo source={img1} />
				<PatnersLogo source={img2} />
				<PatnersLogo source={img3} />
				<PatnersLogo source={img4} />
				<PatnersLogo source={img5} />
			</div>
		</div>
	)
}