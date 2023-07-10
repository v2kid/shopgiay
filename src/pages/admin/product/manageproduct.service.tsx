import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from 'types/product.type'
import { CustomError } from 'utils/helpers'

export const productApi = createApi({
  reducerPath: 'ProductApi', // Tên field trong Redux state
  tagTypes: ['Product'], // Những kiểu tag cho phép dùng trong blogApi
  keepUnusedDataFor: 10, // Giữ data trong 10s sẽ xóa (mặc định 60s)
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://e-c-server.vercel.app/',
  }),

  endpoints: (build) => ({ 
    
    getProducts: build.query<Product[],  {keyword:string}| any>({
      query: (variables) => {
        const { keyword } = variables
        return `products?name_like=${keyword}`
      },
      providesTags(result, error, variables) {
        if (result) {
          const final = [
            ...result.map(({ id }) => ({ type: 'Product' as const })),
            { type: 'Product' as const, id: 'LIST' }
          ]
          return final
        }
        return [{ type: 'Product', id: 'LIST' }]
      }
    }),
    addProduct: build.mutation<Product, Product>({
      query(body) {
        try {
          return {
            url: 'products',
            method: 'POST',
            body
          }
        } catch (error: any) {
          throw new CustomError(error.message)
        }
      },  
      invalidatesTags: (_result, error, _body) => (error ? [] : [{ type: 'Product', id: 'LIST' }])
    }),
    deleteProduct: build.mutation<{}, string>({
      query(id) {
        return {
          url: `products/${id}`,
          method: 'DELETE'
        }
      },
      invalidatesTags: (_result, _error, _id) => [{ type: 'Product', id: 'LIST' }]
    }),
  
  })
  
})
export const {  useAddProductMutation, useGetProductsQuery , useDeleteProductMutation} = productApi
