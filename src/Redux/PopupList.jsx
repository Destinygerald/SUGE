import { createSlice } from "@reduxjs/toolkit";

const PopupSlice = createSlice({
    name: 'admin_popups',
    initialState: {
        value: {
            list: [],
            activePopup: {
                title: '',
                content: '',
                navigation: ''
            }
        }
    },
    reducers: {
        setPopups: (state, actions) => {
            state.value.list = [...actions.payload]
        },
        
        setActivePopup: (state, actions) => {
            state.value.activePopup.title = actions.payload?.title
            state.value.activePopup.content = actions.payload?.content
            state.value.activePopup.navigation = actions.payload?.navigation
        }
    }
})

export default PopupSlice.reducer
export const { setPopups, setActivePopup } = PopupSlice.actions