import { createSlice } from "@reduxjs/toolkit";

const BlogList = createSlice({
    name: 'blogList',
    initialState: {
        value: []
    },
    reducers : {
     setBlogList  : (state, actions) => {
            state.value = [...actions.payload]
        }
    }
})


export default  BlogList.reducer

export const { setBlogList } = BlogList.actions