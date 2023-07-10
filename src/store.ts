import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { rtkQueryErrorLogger } from 'middleware'
import { blogApi } from 'pages/admin/blog/blog.service'
import blogReducer from 'pages/admin/blog/blog.slice'
import { productApi } from 'pages/admin/product/manageproduct.service'
import usertokenReducer, { loginuser } from 'pages/login/login.service'
import { pageApi } from 'pages/service/page.service'

export const store = configureStore({
  reducer: {
    blog: blogReducer,
    [pageApi.reducerPath]: pageApi.reducer,
    [productApi.reducerPath] :productApi.reducer,
    [blogApi.reducerPath]: blogApi.reducer
  },
  // Thêm api middleware để enable các tính năng như caching, invalidation, polling của rtk-query
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(
    productApi.middleware,
    blogApi.middleware,
    rtkQueryErrorLogger,
    pageApi.middleware
  )
})

// Optional, nhưng bắt buộc nếu dùng tính năng refetchOnFocus/refetchOnReconnect
setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
