import '../style.css'
import '../style.mobile.css'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchBlogContent, addBlog, deleteBlogs, editBlogs } from '../../../Api/FetchData.js'


function MessgaeDisplay ({ msg, setMsg }) {

    setTimeout(() => {
        setMsg('')
    }, 2000)

    return (
        <div className='alert-message'>
            {msg}
        </div>
    )
}


function BlogParagraph ({ hdr , i, handleClick, cnt, image, changeHandler, setBlogInfo, blogInfo}) {

    const [imgUrl, setImgUrl] = useState(null)

    function handleImage(e) {
       
        let reader = new FileReader();

        reader.readAsDataURL(e.target.files[0]);
        
        const prevCnt = blogInfo.content.slice(0, i - 1)
        const nextCnt = blogInfo.content.slice(i)
        
        try {
            reader.onload = () => {
                // setImgUrl(reader.result)
                
                // console.log(i)
                // console.log(prevCnt)
                // console.log(nextCnt)
                // console.log(blogInfo.content?.at(i - 1))

                const editedCnt = {
                    ...blogInfo.content?.at(i - 1),
                    img : reader.result
                }
        
                const newArray = [...prevCnt, editedCnt, ...nextCnt]

                // console.log(newArray)
            };

        } catch (err) {
            return ("err", err)
        }

        reader.onerror = () => {
            console.log("Error : ", error)
        }
            
    //    console.log(blogInfo)

       


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


export function CreateBlog() {

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
        
        // console.log(blogContentNum)
        if (blogContentNum <= 1) return;

        setBlogContentNum(blogContentNum => blogContentNum -= 1)

        let contents = [...blogInfo?.content]

        contents.splice(i, i+1)


        setBlogInfo({
            ...blogInfo,
            content : [...contents]
        })
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

            setBlogInfo({...blogInfo, content: addedContent})
            setBlogContentNum(blogContentNum => blogContentNum += 1)
        }
        
        
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

        // console.log(res.data)

        if (res.status == 'OK') {
            setBlogInfo(res.data)
        }

        setBlogContentNum(res.data.content.length)
    }

    async function createBlog() {
        const res = await addBlog(blogInfo)
        
        // console.log(res)
        if (res.status == 'Created') {
            setMsg('Successfully created blog')
            
            setTimeout(() => {
                navigate(-1)
            }, 2000)

            return;
        }

        setMsg('Error creating blog; Try again')
    }

    async function deleteThisBlog () {
        const res = await deleteBlogs(id)

        if (res.status == 'Ok') {
            setMsg('Successfully Deleted blog')
            
            setTimeout(() => {
                navigate(-1)
            }, 2000)

            return;
        }

        setMsg('Error deleting blog; Try again')
    }

    async function editBlogCnt() {
        const res = await editBlogs(id, blogInfo)

        if (res.status == 'Ok') {
            setMsg('Successfully Deleted blog')
            
            setTimeout(() => {
                navigate(-1)
            }, 2000)

            return;
        }

        setMsg('Error Editing blog; Try again')
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
                    <button onClick={editBlogCnt}>Edit</button>
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
