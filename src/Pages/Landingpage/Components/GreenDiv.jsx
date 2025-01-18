import '../style.css'
import '../style.mobile.css'
import Logo from '/images/set 7300 1.png'

export function GreenDiv () {
	return (
		<div className='green-div'>
			<img src={Logo} />

			<div className='green-div-cnt'>
				<div>
					<div>Handle Waste the Right Way</div>
					<div>Ready to start your journey towards efficient and responsible waste management? Contact Suge Ltd today and let us help you make a difference.</div>
				</div>

				<button>Get a Quote <span>→</span> </button>
			</div>
		</div>
	)
}