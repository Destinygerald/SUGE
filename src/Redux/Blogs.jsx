import { createSlice } from "@reduxjs/toolkit";
import { Blog } from "../Pages/Admin/Components/Blog";

const BlogData = createSlice({
    name: 'blogData',
    initialState: {
        value: {
            data: {
                _id: '',
                meta_data_title: '',
                template: '',
                readTime: 0,
                title: '',
                content: []
            }
        } 
    },
    reducers : {
     setBlogData  : (state, actions) => {
            state.value.data._id = actions.payload._id
            state.value.data.meta_data_title = actions.payload.meta_data_title
            state.value.data.template = actions.payload.template
            state.value.data.dateAdded = actions.payload.dateAdded
            state.value.data.readTime = actions.payload.readTime
            state.value.data.title = actions.payload.title
            state.value.data.content = [...actions.payload.content]
        },
        clearBlogData : (state, actions) => {
            state.value.data._id = ''
            state.value.data.meta_data_title = ''
            state.value.data.template = ''
            state.value.data.dateAdded = ''
            state.value.data.readTime = ''
            state.value.data.title = ''
            state.value.data.content = []
        }
    }
})


export default  BlogData.reducer

export const { setBlogData, clearBlogData } = BlogData.actions