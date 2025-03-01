import '../style.css'
import '../style.mobile.css'
import img1 from '/images/SUGE CEOs/Emmaa 1.webp'
import img2 from '/images/SUGE CEOs/Gediminas 2.webp'
import img3 from '/images/SUGE CEOs/Ingrida Grike.webp'
import img4 from '/images/SUGE CEOs/SUGE STAFF.webp'
import img5 from '/images/SUGE CEOs/Yos 1.webp'
import img6 from '/images/SUGE CEOs/Asset 5300 4.webp'

function SugeHeroesCard ({ imgSource, text }) {
	return (
		<div className='suge-heroes-card'>

			{
				text
				?
				<span>{text}</span>
				:
				<></>
			}

			<img src={imgSource} loading='lazy' />
		</div>
	)
}

export function SugeHeroes () {
	return (
		<div className='suge-heroes'>
			<div className='suge-heroes-cnt'>
				<div>Meet the SUGE Heroes</div>
				<div>From our team of dedicated drivers to our industry experts, everyone at SUGE is here to make sure our clients can focus on what they do best, while we manage organic waste with simplicity, efficiency, and that touch of heroism that sets us apart. Meet them.</div>
			</div>

			<div className='suge-heroes-grid'>
				<SugeHeroesCard imgSource={img2} />
				<SugeHeroesCard imgSource={img1} />
				<SugeHeroesCard imgSource={img4} />
				<SugeHeroesCard imgSource={img3} />
				<SugeHeroesCard imgSource={img5} />
				<SugeHeroesCard imgSource={img6} text='Join Our Team' />
			</div>

			<div className='suge-heroes-blur' />
		</div>
	)
}