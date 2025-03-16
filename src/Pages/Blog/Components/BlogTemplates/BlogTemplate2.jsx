import '../../style.css'
import '../../style.mobile.css'
import '../../style.1600.css'
import { IoCalendarOutline } from 'react-icons/io5'
import { GoClock } from 'react-icons/go'
import { useState, useEffect } from 'react'
import { DAYS, MONTH } from '../PlaceholderData.js'
import { BlogTemplate2ListItem } from './BlogTemplateListItem.jsx'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet-async'

export function BlogTemplate2 () {

    const [ cntAsList, setCntAsList ] = useState(true)
    const [ dateConvert, setDateConvert ] = useState('')

    const blogData = useSelector(state => state.blogData.value.data)


    function parseDateValue() {
        let convertedDate = new Date(blogData?.dateAdded)
        setDateConvert(convertedDate)
    }

    useEffect(() => {
        console.log(blogData)
        parseDateValue()
    }, [])

    return (
        <div className="blog-page">

            <Helmet>
            <meta name="description" content={`${blogData?.meta_data_title}`} data-rh='true' />
            <title>{`${blogData?.meta_data_title}` || 'blog [---]'}</title>
				<link rel="canonical" href={`https://www.suge.uk.co/blog/${blogData?.id}`} />
			</Helmet>

            <div className='blog-page-hdr' id='suge-blog-temp-2-hdr'>
                <h1>{ blogData?.title}</h1>

                <div id='suge-blog-temp-2-hdr-cnt'>
                    <div>
                        <span> <IoCalendarOutline /> </span>
                        <span>{ dateConvert ? `${DAYS[dateConvert.getDay()]} ${MONTH[dateConvert.getMonth()]} ${dateConvert.getFullYear()} ` : '10 Jan 2025'}</span>
                    </div>

                    <div />

                    <div>
                        <span> <GoClock /> </span>
                        <span>{blogData?.readTime} mins</span>
                    </div>
                </div>
            </div>


            <div className='blog-template-2'>
                <div className='blog-template-2-hdr-img'>
                    <img src={blogData?.content[0]?.img || blogData?.content[1]?.img || blogData?.content[2]?.img} alt='blog-image' />
                </div>

                <p className='blog-template-2-paragraph' id='suge-blog-temp-2-paragraph'>
                    {
                        blogData?.content[0]?.content
                    }
                </p>


                <div className='blog-template-2-frame' id='suge-blog-temp-2-frame'>

                    {
                        blogData?.content[1].list[0] && (blogData?.content[1].list[0].title || blogData?.content[1].list[0].description)
                        ?
                        <div className='blog-template-2-frame-list'>
                            <span>{blogData?.content[1].header}</span>
                            <div className='blog-template-2-frame-list-cnt'>
                               {
                                    blogData.content[1].list?.map((item, i) => (
                                        <BlogTemplate2ListItem key={i} index={i + 1} title={item?.title} content={item?.description} />
                                    ))
                                }
                            </div>
                        </div>

                        :

                        <div className='blog-template-2-frame-paragraph' id='suge-blog-temp-2-frame-paragraph'>
                            <span>{blogData?.content[1].header}</span>
                            <p>
                                {
                                    blogData.content[1].content
                                }
                            </p>
                        </div>
                    }

                    <div className='blog-template-2-frame-img'>
                        <img src={blogData?.content[1]?.img || blogData?.content[2]?.img || blogData?.content[0]?.img} alt='blog-image' />
                    </div>
                </div>


                <div className='blog-template-2-frame-2' id='suge-blog-temp-2-second-frame'>
                    <span>{blogData?.content[2]?.header}</span>
                    {
                        blogData?.content[2].list[0] && (blogData?.content[2].list[0].title || blogData?.content[2].list[0].description)
                        ?
                        <div className='blog-template-2-frame-list-cnt' id='suge-blog-temp-2-list-frame'>
                            {
                                blogData.content[2].list?.map((item, i) => (
                                    <BlogTemplate2ListItem key={i} index={i + 1} title={item?.title} content={item?.description} />
                                ))
                            }
                        </div>
                        :
                        
                        <p id='suge-blog-temp-2-paragraph-frame'>
                            {
                                blogData?.content[2]?.content
                        }
                        </p>
                    }
                </div>
            </div>


        </div>
    )
}