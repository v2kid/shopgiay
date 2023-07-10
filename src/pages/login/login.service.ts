import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { createSlice } from '@reduxjs/toolkit'
import { CustomError } from 'utils/helpers'
export const loginuser = createApi({
  reducerPath: 'loginUser', // Tên field trong Redux state
  tagTypes: ['Posts'], // Những kiểu tag cho phép dùng trong blogApi
  keepUnusedDataFor: 10, // Giữ data trong 10s sẽ xóa (mặc định 60s)
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3001/',
    prepareHeaders: (headers, { getState }) => {
      const token = localStorage.getItem('token')
      headers.set('authorization', `Bearer ${token}`)
      return headers
    }
  }),
  endpoints: (build) => ({
    signIn: build.mutation({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
        header: {
          authorization: localStorage.getItem('token')
        }
      })
    }),
    Gsignin: build.query({
      query: () => ({
        url: `auth/google-redirect`
      })
    })
  })
})
interface UserState {
  token: string | any
}
const initialState: UserState = {
  token: false
}
const usersSlice = createSlice({
  name: 'usertoken',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(loginuser.endpoints.signIn.matchPending, (state, action) => {
      console.log(action)
    })
    builder.addMatcher(loginuser.endpoints.signIn.matchFulfilled, (state, action) => {
      state.token = action.payload
      localStorage.setItem('token', state.token)
    })
    // ... other extraReducers
  }
})
const usertokenReducer = usersSlice.reducer
export const { useSignInMutation, useGsigninQuery } = loginuser
export default usertokenReducer
