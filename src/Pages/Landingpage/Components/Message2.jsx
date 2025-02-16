import '../style.css'
import '../style.mobile.css'
import Flash from '/images/FLASH/Lighting Black-2.webp'
import Img1 from '/images/SUGE ASSETS/Barrel.webp'
import Img2 from '/images/Frame_2.webp'
import Img3 from '/images/Frame_3.webp'
import Img4 from '/images/Frame_4.webp'

function Message2Card ({ icon, title, cnt }) {
	return (
		<div className='message-2-card'>
			<div> <img src={icon}/> </div>

			<div className='message-2-card-main'>
				<div>{title}</div>
				<div>{cnt}</div>
			</div>
		</div>
	)
}

export function Message2() {
	return (
		<div className='message-2'>
			<div className='message-2-cnt'>
				<div>Nothing Goes to waste</div>
				<div>We're revolutionising waste management across the UK.<br /> With a commitment to simplicity and efficiency, we ensure every piece of waste we handle is 100% recycled.</div>
			</div>

			<div className='message-2-grid'>
				<Message2Card icon={Img2} title='Recycling and Waste Management' cnt='Zero-Landfill solution that turn waste streams into sustainable resources.' />
				<Message2Card icon={Img3} title='UK Food Waste Haulage' cnt='Simple, reliable and efficient bulk waste haulage across the UK. Any time, any day!' />
				<Message2Card icon={Img1} title='Liquid and By Products Solutions' cnt='Advance processing for complex liquid and by-product waste.' />
				<Message2Card icon={Img4} title='Specialized Food and ABP Service' cnt='Dedicated expertise in managing food production and ABP waste.' />
			</div>

			<div className='message-2-flash'>
				<img src={Flash} />
			</div>

			<div className='green-blur'/>
		</div>
	)
}