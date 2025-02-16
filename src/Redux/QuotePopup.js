import { createSlice } from '@reduxjs/toolkit'


const QuotePopup = createSlice({
	name: 'quote_popup',
	initialState: {
		value: false,
	},
	reducers: {
		openPopup: (state, actions) => {
			state.value.popup = true
		},

		closePopup: (state, actions) => {
			state.value.popup = false
		}
	}
})

export default QuotePopup.reducer

export const { openPopup, closePopup } = QuotePopup.actions