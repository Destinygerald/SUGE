import './style.css'
import './style.mobile.css'
import './style.1600.css'
import { BsX } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { useSearchParams, useNavigate, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

export function SearchBox ({ closeSlider }) {
    
    const [ search, setSearch ] = useState('')
    const [ searchRes, setSearchRes ] = useState([])
    const [searchParams, setSearchParams] = useSearchParams({ search: '' });
    const navigate = useNavigate()
    const { pathname } = useLocation()

    function exit () {
        navigate(pathname)
    }

    function handleChange(e) {
        setSearch(e.target.value)
    }


    function searchButton () {
        setSearchRes([])
        if (search == '') return;
        setSearchParams({ search: search })

        const divs = document.querySelectorAll('div')
    
        const result_divs = Array.from(divs).filter(div => div.textContent.split(' ').some(item => (item.toLowerCase() == search.toLowerCase() || item.toLowerCase().includes(search.toLowerCase()))) && (div.children.length == 0 || Array.from(div.children)?.some(item => item.nodeName == "SPAN") || Array.from(div.children)?.some(item => item.nodeName == "SPAN") || Array.from(div.children)?.some(item => item.nodeName == "H1")) && !Array.from(div.classList).includes('search-box') )

        setSearchRes([...result_divs])
    }

    function handleEnter(e) {
        if (e.key === 'Enter') {
            searchButton()
        }
    }

    function handleClick (item) {
        navigate(pathname, { state: { targetId: item?.id || item?.parentElement?.id || item?.parentElement?.parentElement?.id  } }); 
        closeSlider()
    }

    useEffect(() => {
        setSearch(searchParams.get('search'))
    }, [])

    useEffect(() => {

        let input_search = document.querySelector('.search-input')

        if (!input_search) return;

        input_search?.addEventListener('keyup', handleEnter)

        return () => input_search?.removeEventListener('keyup', handleEnter)
    }, [search])


    return (
        <div className='search-box'>
            <span className='search-exit' onClick={exit}> <BsX /> </span>

            <div className='search-main'>
                <div className='search-main-input'>
                    <input className='search-input' type='text' placeholder='Search In Page' value={search} onChange={handleChange} />
                    <span onClick={searchButton}> <CiSearch /> </span>
                </div>

                <div className='search-main-result'>
                    {
                        searchRes[0]
                        ?
                        searchRes?.map((item, i) => (
                            <p className='search-result-card' key={'search-result-' + i} onClick={() => handleClick(item)}>
                                {item?.textContent.slice(0, 72)}
                            </p>
                        ))
                        :
                        <></>
                    }
                </div>
            </div>

            <div className='search-box-bck' />
        </div>
    )
}