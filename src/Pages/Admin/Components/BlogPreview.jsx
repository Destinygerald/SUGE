import '../style.css'
import '../style.mobile.css'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import { BlogTemplate1 } from '../../Blog/Components/BlogTemplates/BlogTemplate1'
import { BlogTemplate2 } from '../../Blog/Components/BlogTemplates/BlogTemplate2'
import { BlogTemplate3 } from '../../Blog/Components/BlogTemplates/BlogTemplate3'
import { BlogTemplate4 } from '../../Blog/Components/BlogTemplates/BlogTemplate4'
import { BlogTemplate5 } from '../../Blog/Components/BlogTemplates/BlogTemplate5'
import { useNavigate, useLocation } from 'react-router-dom'
import { add_image, addBlog } from '../../../Api/FetchData.js'

import { useContextSelector } from '../../../context/Contexts.jsx'

import img1 from  '/images/SUGE ASSETS/Lighting Black.webp'
import { clearBlogData } from '../../../Redux/Blogs.jsx'

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
    const blogPreview = useContextSelector('blogData')?.value
    // const blogPreview = useSelector(state => state.blogData.value.data)
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()

    let reqData;
    let img_ids = []

    function handleReqData () {
        let reqContents = blogPreview?.content        

        img_ids?.forEach(data => {
            reqContents[data.id].img = data.img
        })

        reqData = {...blogPreview, content: [...reqContents]}
    }

    async function createBlog() {
        setClick(true)

        for (let i = 0; i < 3; i++) {
            if (blogPreview.content[i].img) {
                const res = await add_image(blogPreview.content[i].img)

                img_ids.push({
                    id: i,
                    img: res.data.id
                })
            }
        }


        handleReqData()

        setTimeout(async() => {
            const res = await addBlog({ ...reqData, template: blogPreview.template})

            if (res.status == 'Created') {
                setMsg('Successfully created blog')
                
                setTimeout(() => {
                    navigate(`/admin/dashboard/blog`)
                    setClick(false)
                }, 2000)

                return;
            }

            setMsg('Error creating blog; Try again')
            
            setClick(false) 
        }, 1200)
    }

    function cancel () {
        if (!location?.state?.history) {
            navigate(`/admin/dashboard/blog`)
            dispatch(clearBlogData())
        } else {
                navigate(location.state.history)
            }
    }

    useEffect(() => {
        if(!blogPreview?.title) {
            navigate('/admin/dashboard/blog')
        }
    }, [])

    return (
        <div className='blog-preview'>
            <div className='blog-flash'> <img src={img1} alt='green-flash' /> </div>

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
                <button onClick={cancel}>Cancel</button>
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