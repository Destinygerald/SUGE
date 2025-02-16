import '../style.css'
import '../style.mobile.css'
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { CiMenuKebab, CiSearch } from 'react-icons/ci'
import { FaFilter } from 'react-icons/fa'

function QuoteHistoryHeader ({ listFilter, setListFilter }) {

	const [ search, setSearch ] = useState('')
	const [ filter, setFilter ] = useState('All') 
	const [ dropdown, setDropdown ] = useState(false)

	const ref = useRef(null)

	function handlerClick (arg) {
		setListFilter(arg)
	}

	function handleChange (e) {
		setSearch(e.target.value)
	}

	function toggleDropdown () {
		setDropdown(!dropdown)
	}

	function filterClick (arg) {
		setFilter(arg)
		setDropdown(false)
	}

	useEffect(() => {

	}, [])

	return (
		<div className='quote-history-hdr'>
			<div className='quote-history-hdr-nav'>
				<span className={listFilter == 'All' ? 'quote-hdr-nav-selected' : ''} onClick={() => {setListFilter('All')}}>All</span>
				<span className={listFilter == 'Completed' ? 'quote-hdr-nav-selected' : ''} onClick={() => {setListFilter('Completed')}}>Completed</span>
				<span className={listFilter == 'Cancelled' ? 'quote-hdr-nav-selected' : ''} onClick={() => {setListFilter('Cancelled')}}>Cancelled</span>
			</div>


			<div className='mobile-quote-hdr'>
				<div className='mobile-quote-hdr-search'>
					<span> <CiSearch /> </span>

					<input type='text' placeholder='Search' value={search} onChange={handleChange} />
				</div>

				<div className='mobile-quote-hdr-filter' onClick={toggleDropdown}>
					<FaFilter />
				</div>

				{
					dropdown
					?
					<div className='mobile-filter-options' ref={ref}>
						<span className={filter == 'All' ? 'mobile-filter-options-selected' : ''} onClick={() => filterClick('All')}> All </span>
						<span className={filter == 'Completed' ? 'mobile-filter-options-selected' : ''} onClick={() => filterClick('Completed')}> Completed </span>	
						<span className={filter == 'Cancelled' ? 'mobile-filter-options-selected' : ''} onClick={() => filterClick('Cancelled')}> Cancelled </span>
					</div>
					:
					<></>
				}


			</div>

		</div>
	)
}

function QuoteListItem ({id, name, email, phone, business, date, stat }) {
	
	const navigate = useNavigate()

	const id_num = id.slice(1, id.length)

	function viewQuote () {
		navigate(`/admin/dashboard/${id_num}`)
	}

	return (
		<div className='quote-list-item' onClick={viewQuote}>
			<span>{id}</span>
			<span>{name}</span>
			<span>{email}</span>
			<span>{phone}</span>
			<span>{business}</span>
			<span>{date}</span>
			<span>{stat}</span>
			{/*<span> <CiMenuKebab /> </span>*/}
		</div>
	)
}

function QuoteList () {
	return (
		<div className='quote-list'>
			<div className='quote-list-hdr'>
				<span>ID</span>
				<span>Name</span>
				<span>Email</span>
				<span>Phone</span>
				<span>Business</span>
				<span>Date</span>
				<span>Status</span>
				{/*<span>Action</span>*/}
			</div>

			<div className='quote-list-container'>
				<div className='quote-list-main'>
					{
						Array.from(Array(24)).map((item, i) => (
							<QuoteListItem key={i} id='#1579' name='John Doe' email='johndoe@gmail.com' phone='+154 618 8299' business='Fishery and Animal Husbandary' date={Date()} stat='Pending' />
						))
					}
				</div>
			</div>
		</div>
	)
}

export function QuoteHistory () {

	const [ listFilter, setListFilter ] = useState('All')

	return (
		<div className='quote-history'>
			<span>Quotes</span>

			<div className='quote-history-main'>
				<QuoteHistoryHeader listFilter={listFilter} setListFilter={setListFilter} />	

				<QuoteList />
			</div>
		</div>
	)
}