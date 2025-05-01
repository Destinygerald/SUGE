import '../style.css'
import '../style.mobile.css'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchBlogContent, addBlog, deleteBlogs, editBlogs, add_image, URL } from '../../../Api/FetchData.js'
import { useDispatch } from 'react-redux'
import { useContextSelector } from '../../../context/Contexts.jsx'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function MessageDisplay ({ msg, setMsg }) {

    setTimeout(() => {
        setMsg('')
    }, 2000)

    return (
        <div className='alert-message'>
            {msg}
        </div>
    )
}


function returnInput (pathname, i, id, handleImage, blogInfo) {
    if (pathname.includes('create') && (i == 1) && (id == 'template-1' || id == 'template-4')) {
        return (
            <input type="file" accept="image/png, image/jpeg" name='image' onChange={handleImage} />
        )
    } else if (pathname.includes('create') && i != 2 && (id == 'template-2' || id == 'template-3')) {
        return (
            <input type="file" accept="image/png, image/jpeg" name='image' onChange={handleImage} />
        )
    } else if (pathname.includes('create') && i == 0  && id == 'template-5') {
        return (
            <input type="file" accept="image/png, image/jpeg" name='image' onChange={handleImage} />
        )
    } else if (!pathname.includes('create') && (i != 2) && (blogInfo.template == 2 || blogInfo.template == 3)) {
        return (
            <input type="file" accept="image/png, image/jpeg" name='image' onChange={handleImage} />
        )
    } else if (!pathname.includes('create') && (i == 1) && (blogInfo.template == 1 || blogInfo.template == 4)) {
        return (
            <input type="file" accept="image/png, image/jpeg" name='image' onChange={handleImage} />
        )
    } else if (!pathname.includes('create') && (i == 0) && (blogInfo.template == 5)) {
        // check later - Semms incomplete
        return (
            <input type="file" accept="image/png, image/jpeg" name='image' onChange={handleImage} />
        )
    } else {
        return (
            <></>
        )
    }
}


function BlogParagraph ({ hdr , i, cnt, image, changeHandler, setBlogInfo, blogInfo, list, textEditorChange}) {

    const { id } = useParams()
    const { pathname } = useLocation()

    const formData = new FormData()

    function display_image (data) {
        let reader = new FileReader();

        reader.readAsDataURL(data);

        try {
            reader.onload = () => {               
                if (reader.result){
                    document.querySelector(`#paragraph-img-cnt-${i}`).src =  reader.result
                }               
            };

        } catch (err) {
            return ("err", err)
        }

        reader.onerror = () => {
            console.log("Error : ", error)
        }
    }

    function handleImage(e) {

        formData.append('image', e.target.files[0])
        
        const prevCnt = blogInfo.content.slice(0, i)
        const nextCnt = blogInfo.content.slice(i + 1)
        
        const editedCnt = {
            ...blogInfo.content?.at(i),
            img : formData
        }

        const newArray = [...prevCnt, editedCnt, ...nextCnt]
                
        setBlogInfo({...blogInfo, content: [...newArray] })
        
        // console.log('called')
        display_image(formData.get('image'))
    }

    function removeImage () {
        const prevCnt = blogInfo.content.slice(0, i)
        const nextCnt = blogInfo.content.slice(i + 1)

        const editedCnt = {
            ...blogInfo.content?.at(i),
            img : ''
        }

        const newArray = [...prevCnt, editedCnt, ...nextCnt]
                
        setBlogInfo({...blogInfo, content: [...newArray] })

    }

    useEffect(() => {

        // console.log(typeof blogInfo?.content[i].img)

        if (blogInfo?.content[i]?.img && typeof blogInfo?.content[i]?.img == 'object' ) {
            display_image(blogInfo?.content[i].img?.get('image'))
        }

    }, [blogInfo?.content[i].img])


    return (
        <div className='admin-blog-paragraph'>
            <span>Paragraph {i + 1}</span>
            {
                pathname.includes('create') && i != 0
                ?
                <input type='text' placeholder='Paragraph Heading' value={hdr} name='header' onChange={changeHandler} />
                :
                <></>
            }
            
            {
                i == 0
                ?
                <>
                    <ReactQuill name='content' value={cnt} onChange={textEditorChange} />
                </>
                :
                <>
                    <div className='paragraph-list-toggle'>

                        {
                            <>
                                <ReactQuill name='content' value={cnt} onChange={textEditorChange} />
                            </>
                        }
                    </div>
                </>
            }
            
            <>
                {
                    returnInput(pathname, i, id, handleImage, blogInfo)
                }
            </>

            {
                typeof image == 'object'
                ?
                <>
                   <div className="paragraph-img">
                        <img src='' className='paragraph-img-cnt' id={`paragraph-img-cnt-${i}`} />
                    </div>

                    <button className='paragraph-img-btn' onClick={removeImage}>Remove</button>
                </>
                :
                image && !image.includes('undefined') && typeof image != 'object' && image != `${URL}/blog/blog-image/`
                ?
                <>
                    <div className="paragraph-img">
                        <img src={`${URL}/blog/blog-image/${image}`} className='paragraph-img-cnt' />
                    </div>

                    <button className='paragraph-img-btn' onClick={removeImage}>Remove</button>
                </>
                :
                <></>
            }
        </div>
    )
}


export function CreateBlog({ msg, setMsg }) {

    const [blogInfo, setBlogInfo] = useState(
        {   
            meta_data_title: '',
            template: '',
            title: '',
            readTime: '',
            content: [
                {
                    header: '',
                    content: '',
                    img: ''
                },
                {
                    header: '',
                    content: '',
                    img: ''
                },
                {
                    header: '',
                    content: '',
                    img: ''
                }
            ],
        }
    )

    const [blogContentNum, setBlogContentNum] = useState(3)
    const [click, setClick] = useState(false)

    const blogData = useContextSelector('blogData')?.value
    const { actions }  = useContextSelector('blogData')

    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { id } = useParams()
    const dispatch = useDispatch()
    
    const img_ids = []
    let reqData = {}

    function changeHandler(e) {
        setBlogInfo({...blogInfo, [e.target.name]: e.target.value})
    }

    function textEditorChange (e, i) {

        const prevCnt = blogInfo.content.slice(0, i)
        const nextCnt = blogInfo.content.slice(i + 1)
        const editedCnt = {
            ...blogInfo.content?.at(i),
            content : e
        }
        
        const newArray = [...prevCnt, editedCnt, ...nextCnt]

        setBlogInfo({...blogInfo, content: [...newArray] })
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

    function handleReqData () {
        let reqContents = blogInfo?.content        

        img_ids?.forEach(data => {
            reqContents[data.id].img = data.img
        })

        reqData = {...blogInfo, content: [...reqContents]}
    }

    async function createBlog() {
        setClick(true)
        let template;

        if (!blogInfo?.template) {
            switch(id) {
                case 'template-1':
                    template = 1;
                    break;
                case 'template-2':
                    template = 2;
                    break;
                case 'template-3':
                    template = 3;
                    break;
                case 'template-4':
                    template = 4;
                    break;
                case 'template-5':
                    template = 5;
                    break;
                default:
                    template = 1;
                    break;
            }
        } else {
            template = blogInfo?.template
        }


        for (let i = 0; i < 3; i++) {
            if (blogInfo.content[i].img) {
               const res = await add_image(blogInfo.content[i].img)

               img_ids.push({
                    id: i,
                    img: res.data.id
                })
            }
        }

        handleReqData()

        setTimeout(async() => {
    

            const res = await addBlog({...reqData, template: template})

            if (res.status == 'Created') {
                setMsg('Successfully created blog')

                
                setTimeout(() => {
                    navigate('/admin/dashboard/blog')
                    setClick(false)
                }, 2000)

                actions.clearBlogData()

                return;
            }

            setMsg('Error creating blog; Try again')
            setTimeout(() => {
                setClick(false) 
            }, 800)
        }, 1200)
        
    }

    async function deleteThisBlog () {
        setClick(true)
        const res = await deleteBlogs(id)


        if (res.status == 'Ok') {
            setMsg('Successfully Deleted blog')
            
            setTimeout(() => {
                navigate('/admin/dashboard/blog')
                setClick(false)
            }, 2000)

            actions.clearBlogData()
            return;
        }

        setMsg('Error deleting blog; Try again')
        setTimeout(() => {
            setClick(false) 
        }, 800)
    }

    async function editBlogCnt() {
        setClick(true)

        for (let i = 0; i < 3; i++) {
            if (blogInfo.content[i].img) {
               const res = await add_image(blogInfo.content[i].img)

               img_ids.push({
                    id: i,
                    img: res.data.id
                })
            }
        }

        handleReqData()

        setTimeout(async() => {
            const res = await editBlogs(id, blogInfo)


            if (res.status == 'Ok') {
                setMsg('Successfully Edited blog')
                
                setTimeout(() => {
                    navigate(-1)
                    setClick(false)
                }, 2000)

                dispatch(clearBlogData())

                return;
            }

            setMsg('Error Editing blog; Try again')
            setTimeout(() => {
                setClick(false) 
            }, 400)
        }, 1200)
    }
    
    function preview () {

        if (!blogInfo?.meta_data_title) {
            setMsg('Meta data title is missing!')

            setTimeout(() => {
                setMsg('')
            }, 800)

            return;
        }

        if (!blogInfo?.title) {
            setMsg('Title is missing!')

            setTimeout(() => {
                setMsg('')
            }, 800)

            return;
        }

        if (!blogInfo?.readTime) {
            setMsg('Read time is missing!')

            setTimeout(() => {
                setMsg('')
            }, 800)

            return;
        }

        let template;

        if (!blogInfo?.template) {
            switch(id) {
                case 'template-1':
                    template = 1;
                    break;
                case 'template-2':
                    template = 2;
                    break;
                case 'template-3':
                    template = 3;
                    break;
                case 'template-4':
                    template = 4;
                    break;
                case 'template-5':
                    template = 5;
                    break;
                default:
                    template = 1;
                    break;
            }
        } else {
            template = blogInfo?.template
        }

        actions.setBlogData({  ...blogInfo, template: template, dateAdded: Date.now() })

        navigate('/admin/dashboard/blog/preview', 
            { state: 
                {history : pathname} 
            }
        )
    }

    function goBack () {
        actions.clearBlogData()
        navigate('/admin/dashboard/blog/template')
    }

    useEffect(() => {

        if (blogData?.title) {
            
            setTimeout(() => {
                setBlogInfo({...blogData})
            }, 800)
        }

        if (!pathname.split('/').includes('create')) {
            fetchEditData()
            return;
        }
    }, [])


    return (
        <div className='create-blog'>
            <div className='create-blog-hdr'>
                <span onClick={goBack}>{'<'}</span>
                <span>{pathname.split('/').includes('create') ? 'Create' : 'Edit'} Blog</span>
            </div>


            <div className='create-blog-main'>
                <input type='text' placeholder='Meta data Title' name='meta_data_title' value={blogInfo?.meta_data_title} onChange={changeHandler} className='create-blog-main-input' />
                <input type='text' placeholder='Blog Title' value={blogInfo?.title} name='title' onChange={changeHandler} className='create-blog-main-input' />
                <input type='number' placeholder='Read time [in minutes]' min={3} value={blogInfo?.readTime} name='readTime' onChange={changeHandler} className='create-blog-main-input' />
                {  
                    pathname.split('/').includes('create')
                    ?
                    <>
                    {
                        blogInfo?.title || blogInfo?.readTime || blogInfo?.content[0]
                        ?
                        blogInfo?.content?.map((item, i) => (
                            <BlogParagraph i={i} key={i}  list={item?.list} hdr={item?.header} cnt={item?.content} image={item?.img} changeHandler={(e) => paragraphChangeHandler(e, i)} setBlogInfo={setBlogInfo} blogInfo={blogInfo} textEditorChange={(e) => textEditorChange(e, i)} />
                        ))
                        :
                        Array.from(Array(blogContentNum))?.map((item, i) => (
                            <BlogParagraph i={i} key={i} changeHandler={(e) => paragraphChangeHandler(e, i)} setBlogInfo={setBlogInfo} blogInfo={blogInfo} textEditorChange={(e) => textEditorChange(e, i)} />
                        ))
                    }
                    </>
                    :
                    blogInfo?.content?.map((item, i) => (
                        <BlogParagraph i={i} key={i}  list={item?.list} hdr={item?.header} cnt={item?.content} image={item?.img} changeHandler={(e) => paragraphChangeHandler(e, i)} setBlogInfo={setBlogInfo} blogInfo={blogInfo} textEditorChange={(e) => textEditorChange(e, i)} />
                    ))
                }
            </div>
            
            <div className='create-blog-btn'>
                {  
                    pathname.split('/').includes('create')
                    ?
                    <button disabled={click} onClick={createBlog} className='submit-btn'>Submit</button>
                    :
                    <button disabled={click} onClick={editBlogCnt} className='submit-btn'>Edit</button>
                }

                {
                    !pathname.split('/').includes('create')
                    ?
                    <button disabled={click} onClick={deleteThisBlog} className='delete-btn'>Delete</button>
                    :
                    <></>
                }
                
                <button className='add-p-btn' onClick={preview}>Preview</button>
            </div>

            {
               msg
                ?
                <MessageDisplay msg={msg} setMsg={setMsg} />
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
