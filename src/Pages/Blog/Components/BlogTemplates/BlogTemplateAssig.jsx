import '../../style.css'
import '../../style.mobile.css'
import '../../style.1600.css'
import { useLayoutEffect, useState, Suspense } from 'react'

import { BlogTemplate1 } from './BlogTemplate1'
import { BlogTemplate2 } from './BlogTemplate2'
import { BlogTemplate3 } from './BlogTemplate3'
import { BlogTemplate4 } from './BlogTemplate4'
import { BlogTemplate5 } from './BlogTemplate5'
import { useDispatch, useSelector } from 'react-redux'
import { setBlogData } from '../../../../Redux/Blogs.jsx'

import { BlogPlaceholder } from '../PlaceholderData.js'

import { useNavigate, useParams } from 'react-router-dom'
import { fetchBlogContent } from '../../../../Api/FetchData.js'

function WaitingLoad () {
    return (
        <div className='wait-load-screen'>
            <div className='wait-loader' />
        </div>
    )
}

export function BlogTemp () {

    const [ tempType, setTempType ] = useState(1)
    const [ dataInfo, setDataInfo ] = useState({})
    const [ loading, setLoading ] = useState(true)
    const blogData = useSelector(state => state.blogData.value.data)
    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()


    
    async function fetchDataInfo() {

        if (!blogData?.title || blogData?._id != id) {
            const info = await fetchBlogContent(id)

            if (info.status != 'OK') {
                console.error('Try Again')
                navigate('/blog')
                return
            }
            setTimeout(() => {

                dispatch(setBlogData({...info?.data}))
                setLoading(false)
                setTempType(info?.data?.template)
            }, 100)

            
            return;
        }

        setTempType(blogData?.template)

    }
        
    useLayoutEffect(() => {
        if (!blogData) {
            navigate('/blog')
            return;
        }
        fetchDataInfo()
    }, [])

    return (
        <>
            {
                loading
                ?
                <WaitingLoad />
                :
                <>
                {
                    blogData?.title
                    ?
                    <>
                        {
                            tempType == 1 
                            ?
                            <BlogTemplate1 />
                            :
                            tempType == 2
                            ?
                            <BlogTemplate2 />
                            :
                            tempType == 3
                            ?
                            <BlogTemplate3 />
                            :
                            tempType == 4
                            ?
                            <BlogTemplate4 />
                            :
                            <BlogTemplate5 />
                        }
                    </>
                    :
                    <></>
                }
                </>
            }
        </>
    )
}