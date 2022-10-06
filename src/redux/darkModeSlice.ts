import { createSlice } from '@reduxjs/toolkit'

const darkModeSlice = createSlice({
  name: 'isDarkMode',
  initialState: false,
  reducers: {
    setIsDarkMode: (state, action) => {
      return (state = action.payload)
    },
  },
})

const { reducer, actions } = darkModeSlice
export const { setIsDarkMode } = actions
export default reducer
