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
import { setBlogData, setBlogImage } from '../../../../Redux/Blogs.jsx'


import { useNavigate, useParams } from 'react-router-dom'
import { fetch_image, fetchBlogContent } from '../../../../Api/FetchData.js'

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


    const arrayBufferToBase64 = buffer => {
        let binary = '';
        let bytes = new Uint8Array(buffer);
        let len = bytes.byteLength;
        
        for (let i = 0; i < len; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
    
        return window.btoa(binary);
    };

    async function getImage (id, no) {
        if (id) {
            const res = await fetch_image(id)

            console.log("id: ", id)
            console.log(res.data.img)

            
            
            if (res.data.img) {

                console.log('trying')

                const base64 = arrayBufferToBase64(res.data.img.data)
                console.log(base64)

                dispatch(setBlogImage({ index: no, img: `image/png;base64,${base64String}` }))
            }
        }
    }

    
    async function fetchDataInfo() {

        if (!blogData?.title || blogData?._id != id) {
            const info = await fetchBlogContent(id)

            // console.log(info)

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

            
            return info;
        }

        setTempType(blogData?.template)

    }

        
    useLayoutEffect(() => {
        if (!blogData) {
            navigate('/blog')
            return;
        }
        fetchDataInfo()
        .then((res) => {
            setTimeout(() => {
                getImage(res.data?.content[0]?.img, 0)
                getImage(res.data?.content[1]?.img, 1)
                getImage(res.data?.content[2]?.img, 2)
            }, 1200)
        })


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