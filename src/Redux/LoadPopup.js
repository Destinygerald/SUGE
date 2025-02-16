import { createSlice } from '@reduxjs/toolkit'

const LoadPopup = createSlice({
	name: 'loadPopup',
	initialState: {
		value: true
	},
	reducers: {
		openPopup: (state, actions) =>  {
			state.value = true
		},

		closePopup: (state, actions) =>  {
			state.value = false
		}
	}
})

export default LoadPopup.reducer

export const { openPopup, closePopup } = LoadPopup.actions