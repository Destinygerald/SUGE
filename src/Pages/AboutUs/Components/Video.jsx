import '../style.css'
import '../style.mobile.css'
import img1 from '/images/SUGE IMAGES/WhatsApp Image 2025-01-09 at 23.06.31_6b9adbc7.webp'
import Flash from '/images/FLASH/Lighting Black.webp'
import ReactPlayer from 'react-player'

export function Video () {
	return (
		<div className='yt-video'>
			<div>
				{/*<img src={img1} />*/}
				<ReactPlayer url='https://youtu.be/rArvIwPmK8E?si=_Uucq1MFYdSlHAmg' contols={true} />
			</div>

			<div className='yt-flash'>
				<img src={Flash} />
			</div>

			<div className='yt-blur' /> 
		</div>
	)
}

// https://youtu.be/rArvlwPmK8E?si=_Uucq1MFYdSIHAmg