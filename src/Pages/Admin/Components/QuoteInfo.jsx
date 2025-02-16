import '../style.css'
import '../style.mobile.css'
import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { IoMdArrowBack } from 'react-icons/io'

export function QuoteInfo () {

	const {id} = useParams()
	const navigate = useNavigate()

	function goBack () {
		navigate(-1)
	}

	useEffect(() => {
		// fetch data with the id

	}, [])

	return (
		<div className='quote-info'>
			
			<div className='quote-info-hdr'>
				<div>
					<span className='quote-info-back' onClick={goBack}> <IoMdArrowBack /> </span>
					<span> Quote #{id} </span>
				</div>

				<div className='quote-info-status'>
					<span>Status:</span>
					<span>Completed</span>
				</div>
			</div>

			<div className='quote-info-contact'>
				<div> Name: John Doe </div>
				<div> Email: Johndoe@gmail.com </div>
				<div> Phone: +120 678 68798 </div>
				<div> Date: Mon, 12 September 2024 </div>
			</div>

			<div className='quote-info-main'>
				<div>
					<span>Business Type:</span> 
					<span>Animal Husbandry and Fishery</span>
				</div>

				<div>
					<span>Location:</span> 
					<span>Animal Husbandry and Fishery</span>
				</div>

				<div>
					<span>Waste Type:</span> 
					<span>Animal Husbandry and Fishery</span>
				</div>

				<div>
					<span>Frequency:</span> 
					<span>Weekly</span>
				</div>
			</div>

			<div className='quote-info-btns'>
				<button>Mark As Complete</button>
				<button>Cancel Quote</button>
				<button>Delete Quote</button>
			</div>
		</div>
	)
}