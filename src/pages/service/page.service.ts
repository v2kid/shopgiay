import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from 'types/product.type'
import { Talent } from 'types/talent.type'
import { CustomError } from 'utils/helpers'

export const pageApi = createApi({
  reducerPath: 'page', // Tên field trong Redux state
  tagTypes: ['Cart'], // Những kiểu tag cho phép dùng trong blogApi
  keepUnusedDataFor: 10, // Giữ data trong 10s sẽ xóa (mặc định 60s)
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://e-c-server.vercel.app/',
  }),

  endpoints: (build) => ({
    getposts: build.query<Talent, any>({
        query: (id) => ({
            url: `posts`
          })
      }),  
      getcarts: build.query<Product[], any>({
        query: () => {
          return `cart`
        },
        providesTags(result, error, variables) {
          if (result) {
            const final = [
              ...result.map(({ id }) => ({ type: 'Cart' as const })),
              { type: 'Cart' as const, id: 'LIST' }
            ]
            return final
          }
          return [{ type: 'Cart', id: 'LIST' }]
        }
      }),
      getproductdetail: build.query<Product, any>({
        query: (id) => ({
            url: `products/${id}`
          })
        
      }), 
      addtocart: build.mutation<Product, any>({
        query: (data) => {
          return {
           url: 'cart',
          method: 'POST',
          body: data
          }
        },
        invalidatesTags: (_result, error, _body) => (error ? [] : [{ type: 'Cart', id: 'LIST' }])
      }),
      deleteCartitem: build.mutation<{}, string | any>({
        query(id) {
          return {
            url: `cart/${id}`,
            method: 'DELETE'
          }
        },
        invalidatesTags: (_result, _error, _id) => [{ type: 'Cart', id: 'LIST' }]
      }),
     
  }),

  
})
export const { useGetpostsQuery , useGetproductdetailQuery ,useAddtocartMutation , useGetcartsQuery , useDeleteCartitemMutation} = pageApi
