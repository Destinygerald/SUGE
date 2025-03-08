import '../style.css'
import '../style.mobile.css'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { BlogTemplate1 } from '../../Blog/Components/BlogTemplates/BlogTemplate1'
import { BlogTemplate2 } from '../../Blog/Components/BlogTemplates/BlogTemplate2'
import { BlogTemplate3 } from '../../Blog/Components/BlogTemplates/BlogTemplate3'
import { BlogTemplate4 } from '../../Blog/Components/BlogTemplates/BlogTemplate4'
import { BlogTemplate5 } from '../../Blog/Components/BlogTemplates/BlogTemplate5'
import { useNavigate } from 'react-router-dom'
import { addBlog } from '../../../Api/FetchData.js'

import img1 from  '/images/SUGE ASSETS/Lighting Black.webp'

function MessageDisplay ({ msg, setMsg }) {

    setTimeout(() => {
        setMsg('')
    }, 4000)

    return (
        <div className='alert-message'>
            {msg}
        </div>
    )
}

export function BlogPreview ({ msg, setMsg }) {

    const [ click, setClick ] = useState(false)
    const blogPreview = useSelector(state => state.blogData.value.data)
    const navigate = useNavigate()

    async function createBlog() {
        setClick(true)

        const res = await addBlog({...blogPreview})


        if (res.status == 'Created') {
            setMsg('Successfully created blog')

            
            setTimeout(() => {
                navigate(-1)
                setClick(false)
            }, 2000)

            return;
        }

        setMsg('Error creating blog; Try again')
        
        setClick(false) 
        
    }

    useEffect(() => {
        if(!blogPreview?.title) {
            navigate('/admin/dashboard/blog')
        }
    }, [])

    return (
        <div className='blog-preview'>
            <div className='blog-flash'> <img src={img1} /> </div>

            <div className='blog-preview-cnt'>    
                {
                    blogPreview.template == 1 
                    ?
                    <BlogTemplate1 />
                    :
                    blogPreview.template == 2
                    ?
                    <BlogTemplate2 />
                    :
                    blogPreview.template == 3
                    ?
                    <BlogTemplate3 />
                    :
                    blogPreview.template == 4
                    ?
                    <BlogTemplate4 />
                    :
                    blogPreview.template == 5
                    ?
                    <BlogTemplate5 />
                    :
                    <></>
                }
            </div>

            <div className='preview-btns'>
                <button onClick={() => navigate(-1)}>Cancel</button>
                <button disabled={click} onClick={createBlog}>Submit</button>
            </div>

            {
               msg
                ?
                <MessageDisplay msg={msg} setMsg={setMsg} />
                :
                <></>
            }
        </div>
    )
}