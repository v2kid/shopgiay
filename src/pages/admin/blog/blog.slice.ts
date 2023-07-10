import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { blogApi } from './blog.service'

interface BlogState {
  postId: string
}

const initialState: BlogState = {
  postId: ''
}

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    startEditPost: (state, action: PayloadAction<string>) => {
      state.postId = action.payload
    },
    cancelEditPost: (state) => {
      state.postId = ''
    },
    detailid: (state, action: PayloadAction<string>) => {
      state.postId = action.payload
    },
    closedetail: (state, action: PayloadAction<string>) => {
      state.postId = ''
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(blogApi.endpoints.updatePost.matchFulfilled, (state, action) => {
      state.postId = ''
    })
  }
})

const blogReducer = blogSlice.reducer
export const { cancelEditPost, startEditPost, detailid, closedetail } = blogSlice.actions
export default blogReducer
