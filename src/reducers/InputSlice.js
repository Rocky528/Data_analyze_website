import { createSlice } from '@reduxjs/toolkit'
export const InputSlice = createSlice({
  name: 'input',
  initialState: {
    AAAO1: 0,
    AAAO2: 0,
    EEEO1: 0,
    MMMO1: 0,
    CCCO1: 0,
    EEEO3: 0,
  },
  reducers: {
    AAAO1: (state, action) => {
      state.AAAO1 = action.payload
    },
    AAAO2: (state, action) => {
      state.AAAO2 = action.payload
    },
    EEEO1: (state, action) => {
      state.EEEO1 = action.payload
    },
    MMMO1: (state, action) => {
      state.MMMO1 = action.payload
    },
    CCCO1: (state, action) => {
      state.CCCO1 = action.payload
    },
    EEEO3: (state, action) => {
      state.MMMO1 = action.payload
    }
  },
})
export const { AAAO1, AAAO2, EEEO1, MMMO1, CCCO1, EEEO3 } = InputSlice.actions
export default InputSlice.reducer