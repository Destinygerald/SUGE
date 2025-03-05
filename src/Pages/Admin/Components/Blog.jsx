import '../style.css'
import '../style.mobile.css'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchBlogs } from '../../../Api/FetchData.js'
import { BlogCard } from '../../Blog/Components/BlogCard.jsx'
import {  CreateBlog } from './BlogForm.jsx'



function BlogComponentHeader() {

    const navigate = useNavigate()

    return (
        <div className='admin-blog-hdr'>
            <span>Blogs</span>
            <button onClick={() => {navigate('/admin/dashboard/blog/create')}}> Create New Blog </button>
        </div>
    )
}


function BlogIndex () {

    const [ blogs, setBlogs ] = useState([])

    async function getAllBlogs () {
        const res = await fetchBlogs()

        if (!res?.result) return;

		setBlogs(res.result)
    }

    useEffect(() => {
        getAllBlogs()
    }, [])

    return (
        <div className="admin-blog">
            <BlogComponentHeader />

            <div className='admin-blog-cnt'>
                <div className='admin-blog-grid'>
                    {
                        blogs.map((item, i) => (
                            <BlogCard key={'admin-blog-card-' + i} id={item?._id} image={item?.content[0]?.img} title={item?.title} content={item?.content[0]?.content} readtime={item?.readTime} date={item?.dateAdded} />
                        ))
                    }
                </div>
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
                <Route path='/:id' element={<CreateBlog />} />
            </Routes>
        </>
    )
}