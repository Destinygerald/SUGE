import '../style.css'
import '../style.mobile.css'
import Logo from '/images/Asset 5300 2.png'

export function Message3 () {
	return (
		<div className='message-3'>
			
			<div className='message-3-cnt'>
				<div>
					Waste Management and Recycling that Adapts to Your Industry
				</div>

				<div className='message-3-cnt-info'>
					<div>Our promise to you is hassle-free recycling. Leveraging our in-house haulage system, we guarantee efficient and cost-effective recycling and waste management solutions across the UK.</div>
					<button> Get a Quote <span>→</span> </button>
				</div>
			</div>


			<div className='message-3-img'>
				<img src={Logo} />

				<div className='message-3-img-show'>
					<div />
					<div />
					<div />
				</div>
			</div>

		</div>
	)
}