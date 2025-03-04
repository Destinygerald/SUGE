import '../style.css'
import '../style.mobile.css'
import { Routes, Route, useNavigate, useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchBlogs, fetchBlogContent, convertImageToBase64, addBlog, deleteBlogs } from '../../../Api/FetchData.js'
import { BlogCard } from '../../Blog/Components/BlogCard.jsx'

function MessgaeDisplay ({ msg, setMsg }) {

    setTimeout(() => {
        setMsg('')
    }, [])

    return (
        <div className='Alert Message'>
            {msg}
        </div>
    )
}

function BlogComponentHeader() {

    const navigate = useNavigate()

    return (
        <div className='admin-blog-hdr'>
            <span>Blogs</span>
            <button onClick={() => {navigate('blog/create')}}> Create New Blog </button>
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

function BlogParagraph ({ hdr , i, handleClick, cnt, image, changeHandler, setBlogInfo, blogInfo}) {

    function handleImage(e) {
        // Just add the image converter here.
    //    const res = convertImageToBase64(e)
        
    //    console.log(res)
       
    //    if (!res) {
    //     return;
    //    }

    //    console.log(blogInfo)

    //     const prevCnt = blogInfo.content.slice(0, i)
    //     const nextCnt = blogInfo.content.slice(i + 1)

    //     const editedCnt = {
    //         ...blogInfo.content?.at(i),
    //         img : res
    //     }
        
    //     const newArray = [...prevCnt, editedCnt, ...nextCnt]

    //     console.log(newArray)

        // setBlogInfo({...blogInfo, content: [...newArray] })

    }

    return (
        <div className='admin-blog-paragraph'>
            <input type='text' placeholder='Paragradh Heading' value={hdr} name='header' onChange={changeHandler} />
            <textarea placeholder='Paragradh Content' value={cnt} name='content' onChange={changeHandler}></textarea>
            <input type="file" accept="image/png, image/jpeg" value={image} name='image' onChange={handleImage} />

            <span className='admin-blog-paragraph-remove' onClick={handleClick}>-</span>
        </div>
    )
}

function CreateBlog() {

    const [blogInfo, setBlogInfo] = useState({
        title: '',
        readTime: '',
        content: [],
    })

    const [blogContentNum, setBlogContentNum] = useState(1)
    const [msg, setMsg] = useState('')

    const navigate = useNavigate()
    const { pathname } = useLocation()
    const {id} = useParams()

    function deleteParagrah(i) {
        
        console.log(blogContentNum)
        if (blogContentNum <= 1) return;

        setBlogContentNum(blogContentNum => blogContentNum -= 1)

        // console.log('ran')

        let contents = [...blogInfo?.content]

        contents.splice(i, i+1)


        setBlogInfo({
            ...blogInfo,
            content : [...contents]
        })

        // console.log(i)
    }

    function addParagraph() {
        if (pathname.split('/')[4] == 'create'){
            setBlogContentNum(blogContentNum => blogContentNum += 1)
        } else {
            let addedContent = [...blogInfo.content, {
                header: '',
                content: '',
                image: ''
            }]

            console.log(addedContent)
            setBlogInfo({...blogInfo, content: addedContent})
        }
        
        setBlogContentNum(blogContentNum => blogContentNum += 1)
    }

    function changeHandler(e) {
        setBlogInfo({...blogInfo, [e.target.name]: e.target.value})
    }

    function paragraphChangeHandler(e, i) {

        const prevCnt = blogInfo.content.slice(0, i)
        const nextCnt = blogInfo.content.slice(i + 1)
        const editedCnt = {
            ...blogInfo.content?.at(i),
            [e.target.name] : e.target.value
        }

        const newArray = [...prevCnt, editedCnt, ...nextCnt]

        setBlogInfo({...blogInfo, content: [...newArray] })
    }


    async function fetchEditData() {
        const res = await fetchBlogContent(id)

        if (res.status == 'OK') {
            setBlogInfo(res.data)
        }

        setBlogContentNum(res.data.content.length)
    }

    async function createBlog() {
        const res = await addBlog(blogInfo)
        
        console.log(res)
    }

    async function deleteThisBlog () {

    }

    useEffect(() => {
        if (pathname.split('/')[4] != 'create') {
            fetchEditData()
            return;
        }
    }, [])

    return (
        <div className='create-blog'>
            <div className='create-blog-hdr'>
                <span onClick={() => navigate(-1)}>{'<'}</span>
                <span>{pathname.split('/')[4] == 'create' ? 'Create' : 'Edit'} Blog</span>
            </div>


            <div className='create-blog-main'>
                <input type='text' placeholder='Blog Title' value={blogInfo?.title} name='title' onChange={changeHandler} />
                <input type='number' placeholder='Read time [in minutes]' min={3} value={blogInfo?.readTime} name='readTime' onChange={changeHandler} />
                {  
                    pathname.split('/')[4] == 'create'
                    ?
                    Array.from(Array(blogContentNum))?.map((item, i) => (
                        <BlogParagraph i={1} handleClick={() => deleteParagrah(i)} key={i} changeHandler={(e) => paragraphChangeHandler(e, i)} setBlogInfo={setBlogInfo} blogInfo={blogInfo} />
                    ))
                    :
                    blogInfo?.content?.map((item, i) => (
                        <BlogParagraph i={i} handleClick={() => deleteParagrah(i)} key={i} hdr={item?.header} cnt={item?.content} image={item?.image} changeHandler={(e) => paragraphChangeHandler(e, i)} setBlogInfo={setBlogInfo} blogInfo={blogInfo} />
                    ))
                }
            </div>
            
            <div className='create-blog-btn'>
                {  
                    pathname.split('/')[4] == 'create'
                    ?
                    <button onClick={createBlog}>Submit</button>
                    :
                    <button>Edit</button>
                }

                {
                    pathname.split('/')[4] != 'create'
                    ?
                    <button onClick={deleteThisBlog}>Delete</button>
                    :
                    <></>
                }
                <button onClick={addParagraph}>Add Paragragh</button>
            </div>

            {
                msg
                ?
                <MessgaeDisplay msg={msg} setMsg={setMsg} />
                :
                <></>
            }
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