import '../style.css'
import '../style.mobile.css'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { fetchBlogContent, addBlog, deleteBlogs, editBlogs } from '../../../Api/FetchData.js'
import { useDispatch } from 'react-redux'
import { setBlogData } from '../../../Redux/Blogs.jsx'

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


function BlogParagraph ({ hdr , i, handleClick, cnt, image, changeHandler, setBlogInfo, blogInfo, list}) {

    const [ asList, setAsList ] = useState(false)
    const { id } = useParams()
    const { pathname } = useLocation()

    function handleImage(e) {
       
        let reader = new FileReader();

        reader.readAsDataURL(e.target.files[0]);
        
        const prevCnt = blogInfo.content.slice(0, i)
        const nextCnt = blogInfo.content.slice(i + 1)
        
        try {
            reader.onload = () => {
                
                const editedCnt = {
                    ...blogInfo.content?.at(i),
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
    
    function paragraphListChangeHandler(e, index) {
        const prevCnt = blogInfo.content.slice(0, i)
        const nextCnt = blogInfo.content.slice(i + 1)


        const listPrevCnt = blogInfo.content?.at(i)?.list.slice(0, index)
        const listNextCnt= blogInfo.content?.at(i)?.list.slice(index + 1)

        const listEditedCnt = {   
            ...blogInfo.content?.at(i)?.list?.at(index),
            [e.target.name] : e.target.value
        }
        
        const editedCnt = {
            ...blogInfo.content?.at(i),
            list : [
                ...listPrevCnt, listEditedCnt, ...listNextCnt
            ]
        }

        const newArray = [...prevCnt, editedCnt, ...nextCnt]

        setBlogInfo({...blogInfo, content: [...newArray] })
    }


    function addList () {
        const prevCnt = blogInfo.content.slice(0, i)
        const nextCnt = blogInfo.content.slice(i + 1)

        
        const editedCnt = {
            ...blogInfo.content?.at(i),
            list : [
                ...blogInfo.content?.at(i)?.list,
                {
                    title: '',
                    description: ''
                }
            ]
        }

        const newArray = [...prevCnt, editedCnt, ...nextCnt]

        setBlogInfo({...blogInfo, content: [...newArray] })
    }

    function toggleAsList () {

        const prevCnt = blogInfo.content.slice(0, i)
        const nextCnt = blogInfo.content.slice(i + 1)
        
        let editedCnt;
        
        if (asList) {
            editedCnt = {
                ...blogInfo.content?.at(i),
                list: [
                    {
                        title: '',
                        description: ''
                    }
                ]
            }
        } else {
            editedCnt = {
                ...blogInfo.content?.at(i),
                content: ''
            }
        }

        const newArray = [...prevCnt, editedCnt, ...nextCnt]
        
        setBlogInfo({...blogInfo, content: [...newArray] })
        
        setAsList(!asList)
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
                <textarea placeholder='Paragraph Content' value={cnt} name='content' onChange={changeHandler}></textarea>
                :
                <>
                    <div className='paragraph-list-toggle'>
                        <button className='paragraph-list-toggle-btn' onClick={toggleAsList}>{ !asList ? 'Switch to List' : 'Switch to Paragraph'}</button>
                        {
                            asList
                            ?
                            <div className='paragraph-list-container'>
                                {
                                    list.map((listItem, index) => (
                                        <div className='paragraph-list-item' key={`list-item-${index}`}>
                                            <input type='text' placeholder={'List Item ' + (index+1) }  value={list[index]?.title} name='title' onChange={(e) => paragraphListChangeHandler(e, index)} />
                                            <textarea value={list[index]?.description} name='description' placeholder={'List Content ' + (index+1)} onChange={(e) => paragraphListChangeHandler(e, index)}></textarea>
                                        </div>
                                    ))
                                }

                                <button className='add-list-btn' onClick={addList}>Add List Item</button>
                            </div>
                            :
                            <textarea placeholder='Paragraph Content' value={cnt} name='content' onChange={changeHandler}></textarea>
                        }
                    </div>
                </>
            }
            
            {
                pathname.includes('create') && (i != 0 && i != 2) && (id == 'template-1' || id == 'template-4')
                ?
                <input type="file" accept="image/png, image/jpeg" name='image' onChange={handleImage} />
                :
                pathname.includes('create') && i != 2 && (id == 'template-2' || id == 'template-3')
                ?
                <input type="file" accept="image/png, image/jpeg" name='image' onChange={handleImage} />
                :
                pathname.includes('create') && i == 0  && id == 'template-5'
                ?
                <input type="file" accept="image/png, image/jpeg" name='image' onChange={handleImage} />
                :
                <></>
            }

            {
                image
                ?
                <>
                    <div className="paragraph-img">
                        <img src={image} className='paragraph-img-cnt' />
                    </div>

                    <button className='paragraph-img-btn' onClick={removeImage}>Remove</button>
                </>
                :
                <></>
            }

            {/* <span className='admin-blog-paragraph-remove' onClick={handleClick}>-</span> */}
        </div>
    )
}


export function CreateBlog({ msg, setMsg }) {

    const [blogInfo, setBlogInfo] = useState(
        {
            title: '',
            readTime: '',
            content: [
                {
                    header: '',
                    content: '',
                    image: '',
                    list: [
                        {
                            title: '',
                            description: ''
                        }
                    ]
                },
                {
                    header: '',
                    content: '',
                    image: '',
                    list: [
                        {
                            title: '',
                            description: ''
                        }
                    ]
                },
                {
                    header: '',
                    content: '',
                    image: '',
                    list: [
                        {
                            title: '',
                            description: ''
                        }
                    ]
                }
            ],
        }
    )

    const [blogContentNum, setBlogContentNum] = useState(3)
    const [click, setClick] = useState(false)

    const navigate = useNavigate()
    const { pathname } = useLocation()
    const { id } = useParams()
    const dispatch = useDispatch()

    function deleteParagrah(i) {
        
        if (blogContentNum <= 1) return;

        setBlogContentNum(blogContentNum => blogContentNum -= 1)

        let contents = [...blogInfo?.content]

        // console.log(contents)

        contents = contents.filter((content, index) => {
            // console.log(content)
            if (i != index) {
                return content
            }
        })

        // console.log(contents)


        setBlogInfo({
            ...blogInfo,
            content : [...contents]
        })
    }

    function addParagraph() {
        if (pathname.split('/').includes('create')){
            setBlogContentNum(blogContentNum => blogContentNum += 1)

            

            let addedContent = [...blogInfo.content, {
                header: '',
                content: '',
                image: '',
                list: [
                    {
                        title: '',
                        description: ''
                    }
                ]
            }]

            setBlogInfo({...blogInfo, content: [...addedContent]})

        } else {
            let addedContent = [...blogInfo.content, {
                header: '',
                content: '',
                image: '',
                list: [
                    {
                        title: '',
                        description: ''
                    }
                ]
            }]

            setBlogInfo({...blogInfo, content: [...addedContent]})
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
    
    function preview () {

        let template;

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

        dispatch(setBlogData({ ...blogInfo, template: template, dateAdded: Date.now() }))
        navigate('/admin/dashboard/blog/preview')
    }

    useEffect(() => {
        if (!pathname.split('/').includes('create')) {
            fetchEditData()
            return;
        }
    }, [])

    return (
        <div className='create-blog'>
            <div className='create-blog-hdr'>
                <span onClick={() => navigate(-1)}>{'<'}</span>
                <span>{pathname.split('/').includes('create') ? 'Create' : 'Edit'} Blog</span>
            </div>


            <div className='create-blog-main'>
                <input type='text' placeholder='Blog Title' value={blogInfo?.title} name='title' onChange={changeHandler} />
                <input type='number' placeholder='Read time [in minutes]' min={3} value={blogInfo?.readTime} name='readTime' onChange={changeHandler} />
                {  
                    pathname.split('/').includes('create')
                    ?
                    blogInfo?.title || blogInfo?.readTime || blogInfo?.content[0]
                    ?
                        blogInfo?.content?.map((item, i) => (
                            <BlogParagraph i={i} key={i} handleClick={() => deleteParagrah(i)}  list={item?.list} hdr={item?.header} cnt={item?.content} image={item?.img} changeHandler={(e) => paragraphChangeHandler(e, i)} setBlogInfo={setBlogInfo} blogInfo={blogInfo} />
                        ))
                    :
                        Array.from(Array(blogContentNum))?.map((item, i) => (
                            <BlogParagraph i={i} key={i} handleClick={() => deleteParagrah(i)} changeHandler={(e) => paragraphChangeHandler(e, i)} setBlogInfo={setBlogInfo} blogInfo={blogInfo} />
                        ))
                    :
                    blogInfo?.content?.map((item, i) => (
                        <BlogParagraph i={i} key={i} handleClick={() => deleteParagrah(i)}  list={item?.list} hdr={item?.header} cnt={item?.content} image={item?.img} changeHandler={(e) => paragraphChangeHandler(e, i)} setBlogInfo={setBlogInfo} blogInfo={blogInfo} />
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
                {/* <button onClick={addParagraph} className='add-p-btn'>Add Paragraph</button> */}

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
