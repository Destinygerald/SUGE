import { createContext, useContext, useState } from 'react'

const BlogContextLayout = {
    _id: '',
    meta_data_title: '',
    template: '',
    readTime: 0,
    title: '',
    content: []
}

const BlogContext = createContext(null)

export function BlogContextFunction () {
    return (
        useContext(BlogContext)
    )
}

export function BlogContextProvider ({ children }) {
    
    const [ blogData, blogDataSetter ] = useState({...BlogContextLayout})

    function clearBlogData () {
        blogDataSetter({...BlogContextLayout})
    }

    function setBlogData (info) {
        blogDataSetter({
            _id : info._id,
            meta_data_title : info.meta_data_title,
            template : info.template,
            dateAdded : info.dateAdded,
            readTime : info.readTime,
            title : info.title,
            content : [...info.content]
        })        
    }

    function setBlogImage (img, i) {

        let allContents = [...blogData.content]
        allContents[i].img = img

        blogDataSetter({
            ...blogData,
            content: [...allContents]
        })
    }

    const state = {
        value: blogData,
        actions: {
            setBlogData: (data) => setBlogData(data),
            clearBlogData: () => clearBlogData(),
            setBlogImage : (img, i) => setBlogImage(img, i)
        } 
    }

    return (
        <BlogContext.Provider value={state}>
            {children}
        </BlogContext.Provider>
    )
}