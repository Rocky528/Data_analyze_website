import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../reducers/counterSlice'
import InputSlice from '../reducers/InputSlice'
export default configureStore({
  reducer: {
    counter: counterReducer,
    InputValue: InputSlice,
  },
})