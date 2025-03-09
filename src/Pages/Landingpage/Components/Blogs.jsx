import '../style.css'
import '../style.mobile.css'
import '../style.1600.css'
import { useSelector } from 'react-redux'
import { BlogCard } from '../../Blog/Components/BlogCard.jsx'

export function Blogs () {

    const blogList = useSelector(state => state.blogList.value)

    return (
        <div className='landing-page-blogs'>
            <span>Our Blogs</span>

            <div className='landing-page-blogs-grid'>
                {
                    blogList[0]
                    ?
                    blogList?.slice(0, 3).map((item, i) => (
                        <BlogCard key={'blog-card-' + i} id={item?._id} image={item?.img} title={item?.title} content={item?.content} readtime={item?.readTime} date={item?.dateAdded} />
                    ))
                    :
                    Array.from(Array(3)).map((_, i) => (
                        <BlogCard key={'blog-card-' + i} id={i} image={''} title={''} content={''} readtime={Date.now()} date={'---'} />
                    ))
                }
            </div>
        </div>
    )
}