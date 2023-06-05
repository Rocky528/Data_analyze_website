import { createSlice } from '@reduxjs/toolkit'
export const InputSlice = createSlice({
  name: 'input',
  initialState: {
    AAAO1: 0,
    AAAO2: 0,
    EEEO1: 0,
    MMMO1: 1,
    CCCO1: 0,
    EEEO3: 0,
    EEEO2: 0,
    CCCO2: 0,
    IIIO1: 0,
    JJJO1: 0,
    GGGO1: 0,
    Currency: '$',
    Auth: false
  },
  reducers: {
    InputAAAO1: (state, action) => {
      state.AAAO1 = action.payload
    },
    InputAAAO2: (state, action) => {
      state.AAAO2 = action.payload
    },
    InputEEEO1: (state, action) => {
      state.EEEO1 = action.payload
    },
    InputMMMO1: (state, action) => {
      state.MMMO1 = action.payload
    },
    InputCCCO1: (state, action) => {
      state.CCCO1 = action.payload
    },
    InputEEEO3: (state, action) => {
      state.EEEO3 = action.payload
    },
    InputEEEO2: (state, action) => {
      state.EEEO2 = action.payload
    },
    InputCCCO2: (state, action) => {
      state.CCCO2 = action.payload
    },
    InputGGGO1: (state, action) => {
      state.GGGO1 = action.payload
    },
    InputIIIO1: (state, action) => {
      state.IIIO1 = action.payload
    },
    InputJJJO1: (state, action) => {
      state.JJJO1 = action.payload
    },
    InputCurrency: (state, action) => {
      state.Currency = action.payload
    },
    InputAuth: (state, action) => {
      state.Auth = action.payload
    }
  },
})
export const { InputAAAO1, InputAAAO2, InputEEEO1, InputMMMO1, InputCCCO1, InputEEEO3, InputEEEO2, InputCCCO2, InputGGGO1, InputIIIO1, InputJJJO1, InputCurrency, InputAuth } = InputSlice.actions
export default InputSlice.reducer