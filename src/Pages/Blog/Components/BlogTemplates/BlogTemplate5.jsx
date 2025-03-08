import '../../style.css'
import '../../style.mobile.css'
import '../../style.1600.css'
import { IoCalendarOutline } from 'react-icons/io5'
import { GoClock } from 'react-icons/go'
import { useState, useEffect } from 'react'
import { DAYS, MONTH } from '../PlaceholderData.js'
import { BlogTemplate2ListItem } from './BlogTemplateListItem.jsx'
import { useSelector } from 'react-redux'

export function BlogTemplate5 () {

    const [ cntAsList, setCntAsList ] = useState(true)
    const [ dateConvert, setDateConvert ] = useState('')

    const blogData = useSelector(state => state.blogData.value.data)


    function parseDateValue() {
        let convertedDate = new Date(blogData?.dateAdded)
        setDateConvert(convertedDate)
    }

    useEffect(() => {
        parseDateValue()
    }, [])

    return (
        <div className="blog-page">
            <div className='blog-page-hdr'>
                <div>{ blogData?.title }</div>

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


            <div className='blog-template-2'>

                {
                    blogData?.content[0]?.img || blogData?.content[1]?.img || blogData?.content[2]?.img
                    ?
                    <div className='blog-template-2-hdr-img'>
                        <img src={blogData?.content[0]?.img || blogData?.content[1]?.img || blogData?.content[2]?.img} />
                    </div>
                    :
                    <></>
                }
                
                <p className='blog-template-2-paragraph'>
                    {
                        blogData?.content[0]?.content
                    }
                </p>



                <div className='blog-template-3-frame'>

                    {
                        blogData?.content[1].list[0] && (blogData?.content[1].list[0].title || blogData?.content[1].list[0].description)
                        ?
                        <div className='blog-template-3-frame-list'>
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

                        <div className='blog-template-3-frame-paragraph'>
                            <span>{blogData?.content[1].header}</span>
                            <p> </p>
                        </div>
                    }
                </div>


                <div className='blog-template-2-frame-2'>
                    <span>{blogData?.content[2]?.header}</span>
                    {
                        blogData?.content[2].list[0] && (blogData?.content[2].list[0].title || blogData?.content[2].list[0].description)
                        ?
                        <div className='blog-template-2-frame-list-cnt'>
                            {
                                blogData.content[2].list?.map((item, i) => (
                                    <BlogTemplate2ListItem key={i} index={i + 1} title={item?.title} content={item?.description} />
                                ))
                            }
                        </div>
                        :
                        
                        <p>
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