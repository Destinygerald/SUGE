import { createSlice } from "@reduxjs/toolkit";
import { Blog } from "../Pages/Admin/Components/Blog";

const BlogCreate = createSlice({
    name: 'blogCreate',
    initialState: {
        value: {
            data: {
                template: '',
                readTime: 0,
                title: '',
                content: []
            }
        } 
    },
    reducers : {
     setBlogCreate  : (state, actions) => {
            state.value.data.template = actions.payload.template
            state.value.data.dateAdded = actions.payload.dateAdded
            state.value.data.readTime = actions.payload.readTime
            state.value.data.title = actions.payload.title
            state.value.data.content = [...actions.payload.content]
        }
    }
})


export default  BlogCreate.reducer

export const { setBlogCreate } = BlogCreate.actions