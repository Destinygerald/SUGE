import { createSlice } from '@reduxjs/toolkit'

const QuoteSlice = createSlice({
	name: 'quote',
	initialState: {
		value: {
			businessType: '',
			wasteType: '',
			frequency: '',
			location: '',
			contact: {
				name: '',
				email: '',
				phone: ''
			}
		}
	},
	reducers: {
		editValue: (state, actions) => {
			state.value = {
				...state.value, [actions.payload.name]: actions.payload.value
			}
		},

		resetValue: (state, actions) => {
			state.value = {
				businessType: '',
				wasteType: '',
				frequency: '',
				location: '',
				contact: {
					name: '',
					email: '',
					phone: ''
				}
			}
		}
	}
})

export default QuoteSlice.reducer

export const { editValue, resetValue } = QuoteSlice.actions