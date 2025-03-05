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

    function handleImage(e) {
       
        let reader = new FileReader();

        reader.readAsDataURL(e.target.files[0]);
        
        const prevCnt = blogInfo.content.slice(0, i - 1)
        const nextCnt = blogInfo.content.slice(i + 1)
        
        try {
            reader.onload = () => {
                
                const editedCnt = {
                    ...blogInfo.content?.at(i - 1),
                    img : reader.result
                }

                if (image){
                    document.querySelector('.paragraph-img-cnt').src =  reader.result
                }
        
                const newArray = [...prevCnt, editedCnt, ...nextCnt]
                
                setBlogInfo({...blogInfo, content: [...newArray] })
            };

        } catch (err) {
            return ("err", err)
        }

        reader.onerror = () => {
            console.log("Error : ", error)
        }
            
    //    console.log(blogInfo)

       


    }

    return (
        <div className='admin-blog-paragraph'>
            <input type='text' placeholder='Paragradh Heading' value={hdr} name='header' onChange={changeHandler} />
            <textarea placeholder='Paragradh Content' value={cnt} name='content' onChange={changeHandler}></textarea>
            <input type="file" accept="image/png, image/jpeg" name='image' onChange={handleImage} />
            {
                image
                ?
                <div className="paragraph-img">
                    <img src={image} className='paragraph-img-cnt' />
                </div>
                :
                <></>
            }

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
    const [click, setClick] = useState(false)

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

        if (res.status == 'OK') {
            setBlogInfo(res.data)
        }

        setBlogContentNum(res.data.content.length)
    }

    async function createBlog() {
        setClick(true)
        
        const res = await addBlog(blogInfo)


        if (res.status == 'Created') {
            setMsg('Successfully created blog')

            
            setTimeout(() => {
                navigate(-1)
                setClick(false)
            }, 2000)

            return;
        }

        setMsg('Error creating blog; Try again')
        setTimeout(() => {
            setClick(false) 
        }, 800)
    }

    async function deleteThisBlog () {
        setClick(true)
        const res = await deleteBlogs(id)


        if (res.status == 'Ok') {
            setMsg('Successfully Deleted blog')
            
            setTimeout(() => {
                navigate(-1)
                setClick(false)
            }, 2000)

            return;
        }

        setMsg('Error deleting blog; Try again')
        setTimeout(() => {
            setClick(false) 
        }, 800)
    }

    async function editBlogCnt() {
        setClick(true)
        const res = await editBlogs(id, blogInfo)


        if (res.status == 'Ok') {
            setMsg('Successfully Edited blog')
            
            setTimeout(() => {
                navigate(-1)
                setClick(false)
            }, 2000)

            return;
        }

        setMsg('Error Editing blog; Try again')
        setTimeout(() => {
            setClick(false) 
        }, 800)
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
                        <BlogParagraph i={i} handleClick={() => deleteParagrah(i)} key={i} hdr={item?.header} cnt={item?.content} image={item?.img} changeHandler={(e) => paragraphChangeHandler(e, i)} setBlogInfo={setBlogInfo} blogInfo={blogInfo} />
                    ))
                }
            </div>
            
            <div className='create-blog-btn'>
                {  
                    pathname.split('/')[4] == 'create'
                    ?
                    <button disabled={click} onClick={createBlog} className='submit-btn'>Submit</button>
                    :
                    <button disabled={click} onClick={editBlogCnt} className='submit-btn'>Edit</button>
                }

                {
                    pathname.split('/')[4] != 'create'
                    ?
                    <button disabled={click} onClick={deleteThisBlog} className='delete-btn'>Delete</button>
                    :
                    <></>
                }
                <button onClick={addParagraph} className='add-p-btn'>Add Paragragh</button>
            </div>

            {
               msg
                ?
                <MessgaeDisplay msg={msg} setMsg={setMsg} />
                :
                <></>
            }


            {
                click
                ?
                <div className='loader-x'>
                    <div className='loader-ball' />
                    <div className='loader-ball' />
                    <div className='loader-ball' />
                </div>
                :
                <></>
            }
        </div>
    )
}
