import '../style.css'
import '../style.mobile.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'

function BlogComponentHeader() {

    const navigate = useNavigate()

    return (
        <div className='admin-blog-hdr'>
            <span>Blogs</span>
            <button onClick={() => {navigate('create')}}> Create New Blog </button>
        </div>
    )
}

function BlogCard () {
    return (
        <div className='admin-blog-card'>
            <div className='blog-card-img'></div>

            <div className='blog-card-cnt'></div>
        </div>
    )
}

function BlogIndex () {
    return (
        <div className="admin-blog">
            <BlogComponentHeader />

            <div className='admin-blog-cnt'>
                <div className='admin-blog-grid'>
                    {
                        Array.from(Array(18)).map((_, i) => (
                            <BlogCard />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

function BlogParagraph ({ hdr , i, handleClick}) {

    return (
        <div className='admin-blog-paragraph'>
            <input type='text' placeholder='Paragradh Heading' value={hdr} name={`paragraph-hdr-${i}`} />
            <textarea placeholder='Paragradh Content'></textarea>
            <input type='image' placeholder='image'  />

            <span className='admin-blog-paragraph-remove' onClick={handleClick}>-</span>
        </div>
    )
}

function CreateBlog() {

    const [blogInfo, setBlogInfo] = useState({
        tile: '',
        readTime: 0,
        contents: [],
        img: ''
    })

    const [blogContentNum, setBlogContentNum] = useState(1)

    function deleteParagrah(i) {
        
        if (blogContentNum <= 1) return;

        setBlogContentNum(blogContentNum => blogContentNum -= 1)

        setBlogInfo({
            ...blogInfo,
            contents : blogInfo?.contents?.splice(i, i + 1)
        })
    }

    function addParagraph() {
        setBlogContentNum(blogContentNum => blogContentNum += 1)
    }

    return (
        <div className='create-blog'>
            <div className='create-blog-hdr'>
                <span>{'<'}</span>
                <span>Create Blog</span>
            </div>

            <div className='create-blog-main'>
                <input type='text' placeholder='Blog Title' />
                <input type='number' placeholder='Read time' min={3} />
                {
                    Array.from(Array(blogContentNum))?.map((item, i) => (
                        <BlogParagraph i={1} handleClick={() => deleteParagrah()} key={i} />
                    ))
                }
            </div>
            
            <div className='create-blog-btn'>
                <button>Submit</button>
                <button onClick={addParagraph}>Add Paragragh</button>
            </div>
        </div>
    )
}

export function Blog() {
    return (
        <>
            <Routes>
                <Route index element={<BlogIndex />} />
                <Route path='/create' element={<CreateBlog />} />
            </Routes>
        </>
    )
}