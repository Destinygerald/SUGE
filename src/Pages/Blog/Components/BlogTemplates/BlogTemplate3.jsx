import '../../style.css'
import '../../style.mobile.css'
import '../../style.1600.css'
import { IoCalendarOutline } from 'react-icons/io5'
import { GoClock } from 'react-icons/go'
import { useState, useEffect } from 'react'
import { DAYS, MONTH } from '../PlaceholderData.js'
import { SEO } from '../../../../Components/SEO.jsx'
import { useParams } from 'react-router-dom'
import { imageProcessor, parseCode } from './CodeParser.jsx'
import { useContextSelector } from '../../../../context/Contexts.jsx'

export function BlogTemplate3 () {

    const [ dateConvert, setDateConvert ] = useState('')
    const { id } = useParams()

    const blogData = useContextSelector('blogData')?.value

    function parseDateValue() {
        let convertedDate = new Date(blogData?.dateAdded)
        setDateConvert(convertedDate)
    }

    useEffect(() => {
        parseDateValue()
    }, [])

    useEffect(() => {    
        imageProcessor(blogData?.content[0].img, 'blog-paragraph-img-1')
    }, [blogData?.content[0].img])

    useEffect(() => {
        imageProcessor(blogData?.content[1].img, 'blog-paragraph-img-2')
    }, [blogData?.content[1].img])

    return (
        <div className="blog-page">

            <SEO title={`${blogData?.meta_data_title}` || 'blog [---]'} description={`${blogData?.meta_data_title}`} link={`https://www.suge.uk.co/blog/${id}`} />

            <div className='blog-page-hdr' id='suge-blog-temp-3-hdr'>
                <h1>{ blogData?.title }</h1>

                <div>
                    <div>
                        <span> <IoCalendarOutline /> </span>
                        <span>{ dateConvert ? `${DAYS[dateConvert.getDay()]} ${MONTH[dateConvert.getMonth()]} ${dateConvert.getFullYear()} ` : '10 Jan 2025'}</span>
                    </div>

                    <div />

                    <div>
                        <span> <GoClock /> </span>
                        <span>{blogData?.readTime || '--'} mins</span>
                    </div>
                </div>
            </div>



            <div className='blog-template-2' id='suge-blog-temp-3-cnt'>
                <p className='blog-template-2-paragraph blog-paragraph-frame' id='suge-blog-temp-3-cnt-paragraph'>
                    {
                        parseCode(blogData?.content[0]?.content)
                    }
                </p>
                
                {
                    blogData?.content[0]?.img || blogData?.content[1]?.img || blogData?.content[2]?.img
                    ?
                    <div className='blog-template-2-hdr-img'>
                        <img src='' alt='blog-image' id='blog-paragraph-img-1' />
                    </div>
                    :
                    <></>
                }


                <div className='blog-template-3-frame' id='suge-blog-temp-3-frame'>

                    <div className='blog-template-3-frame-paragraph' id='suge-blog-temp-3-frame-paragraph-cnt'>
                        <span>{blogData?.content[1].header}</span>
                        <p className='blog-paragraph-frame'>
                            {
                                parseCode(blogData.content[1].content)
                            }
                        </p>
                    </div>

                    {
                        blogData?.content[0]?.img || blogData?.content[1]?.img || blogData?.content[2]?.img
                        ?
                        <div className='blog-template-3-frame-img'>
                            <img src='' alt='blog-image' id='blog-paragraph-img-2' />
                        </div>
                        :
                        <></>
                    }
                </div>


                <div className='blog-template-2-frame-2' id='suge-blog-temp-3-second-frame'>
                    <span>{blogData?.content[2]?.header}</span>
                    
                    <p id='suge-blog-temp-3-second-frame-paragraph'  className='blog-paragraph-frame'>
                        {
                            parseCode(blogData?.content[2]?.content)
                        }
                    </p>

                </div>
            </div>


        </div>
    )
}