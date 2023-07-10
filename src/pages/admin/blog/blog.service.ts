import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Post } from 'types/blog.type'
import { CustomError } from 'utils/helpers'

export const blogApi = createApi({
  reducerPath: 'blogApi', // Tên field trong Redux state
  tagTypes: ['Posts'], // Những kiểu tag cho phép dùng trong blogApi
  keepUnusedDataFor: 10, // Giữ data trong 10s sẽ xóa (mặc định 60s)
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://e-c-server.vercel.app/',
    prepareHeaders(headers) {
      const token = localStorage.getItem('token')
      headers.set('authorization', `Bearer ${token}`)
      return headers
    }
  }),
  endpoints: (build) => ({
    // Generic type theo thứ tự là kiểu response trả về và argument
    getPosts: build.query<Post[], { keyword: string; page: number }>({
      query: (variables) => {
        const { keyword } = variables
        const { page } = variables

        return `posts?page=${page}&per_page=6&keyword=${keyword}`
      },
      providesTags(result, error, variables) {
        const page = typeof variables === 'number' ? variables : 1
        const { keyword } = variables
        if (result) {
          const final = [
            ...result.map(({ id }) => ({ type: 'Posts' as const })),
            { type: 'Posts' as const, id: 'LIST', page, keyword }
          ]
          return final
        }
        return [{ type: 'Posts', id: 'LIST', page, keyword }]
      }
    }),

    addPost: build.mutation<Post, Omit<Post, 'id'>>({
      query(body) {
        try {
          return {
            url: 'posts',
            method: 'POST',
            body
          }
        } catch (error: any) {
          throw new CustomError(error.message)
        }
      },

      invalidatesTags: (_result, error, _body) => (error ? [] : [{ type: 'Posts', id: 'LIST' }])
    }),

    updatePost: build.mutation<Post, { id: string; body: Post }>({
      query(data) {
        return {
          url: `posts/${data.id}`,
          method: 'PUT',
          body: data.body
        }
      },
      invalidatesTags: (_result, error, _data) => (error ? [] : [{ type: 'Posts', id: 'LIST' }])
    }),
    deletePost: build.mutation<{}, string>({
      query(id) {
        return {
          url: `posts/${id}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (_result, _error, _id) => [{ type: 'Posts', id: 'LIST' }]
    }),
    getPost: build.query<Post, string>({
      query: (id) => ({
        url: `posts/${id}`
      })
    }),

    searchPost: build.query<Post[], void | string>({
      query: (keyword) => {
        return `posts?keyword=${keyword}`
      }
    })
  })
})

export const {
  useGetPostsQuery,
  useAddPostMutation,
  useGetPostQuery,
  useUpdatePostMutation,
  useDeletePostMutation,
  useSearchPostQuery
} = blogApi
