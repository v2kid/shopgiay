import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  token: string | any
  loading: boolean
  error: string | null
}

const initialState: UserState = {
  token: null,
  loading: false,
  error: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      console.log(action)
      state.token = action.payload
    }
  }
})

const userReducer = userSlice.reducer
export const { setToken } = userSlice.actions
export default userReducer
