import './style.css'
import './style.mobile.css'
import './style.1600.css'
import { BsX } from 'react-icons/bs'
import { CiSearch } from 'react-icons/ci'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const PATHS = [
    {
        nav: '/',
        class: 'landing-page'
    },
    {
        nav: '/about',
        class: 'about-us'
    },
    {
        nav: '/services',
        class: 'service'
    },
    {
        nav: '/services/2',
        class: 'service-2'
    },
    {
        nav: '/sustainability',
        class: 'sustainability'
    },
    {
        nav: '/contact',
        class: 'contact'
    },
    {
        nav: '/contact/2',
        class: 'contact-2'
    }
]

function checkIfElementBelongs (child) {
    PATHS.forEach(item => {
        let parent_element = document.querySelector(item?.class)

        if (!parent_element) return;

        if (Array.from(parent_element?.children)?.includes(child)) {
            return parent_element;
        } else {
            // Array.from(parent_element?.children).forEach()
        }
    })
}

export function SearchBox () {
    
    const [ search, setSearch ] = useState('')
    const [ searchRes, setSearchRes ] = useState([])
    const [searchParams, setSearchParams] = useSearchParams({ search: '' });
    const navigate = useNavigate()

    function exit () {
        navigate('/')
    }

    function handleChange(e) {
        setSearch(e.target.value)
    }


    function searchButton () {
        setSearchRes([])
        if (search == '') return;
        setSearchParams({ search: search })

        const divs = document.querySelectorAll('div')
        
        const p = document.querySelectorAll('p')

        const h1 = document.querySelectorAll('h1')
        
        const result_divs = Array.from(divs).filter(div => div.textContent.split(' ').some(item => item.toLowerCase() == search.toLowerCase()) && (div.children.length == 0 || Array.from(div.children)?.some(item => item.nodeName == "SPAN") || Array.from(div.children)?.some(item => item.nodeName == "SPAN") || Array.from(div.children)?.some(item => item.nodeName == "H1")) && !Array.from(div.classList).includes('search-box') )


        result_divs.forEach(item => {

            console.log('i. ', item?.parentElement?.className)
            console.log('ii. ', item?.parentNode.className)
        })

        setSearchRes([...result_divs])
    }

    function handleEnter(e) {
        if (e.key === 'Enter') {
            searchButton()
        }
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
                    <input className='search-input' type='text' placeholder='Search' value={search} onChange={handleChange} />
                    <span onClick={searchButton}> <CiSearch /> </span>
                </div>

                <div className='search-main-result'>
                    {
                        searchRes[0]
                        ?
                        searchRes?.map((item, i) => (
                            <p className='search-result-card'>
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