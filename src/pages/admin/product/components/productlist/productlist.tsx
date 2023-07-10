import { Fragment } from "react";
import SkeletonPost from "../SkeletonPost";
import { useDeleteProductMutation, useGetProductsQuery } from "../../manageproduct.service";
import Product from "pages/product/product";
import ProductItem from "../productitem/productitem";

export default function Productlist(){
  const [deleteProduct] = useDeleteProductMutation()
  const handleDeletePost = (id: string) => {
    deleteProduct(id)
  }
    const {data,isFetching} = useGetProductsQuery({})
    return (
        <div className='bg-white py-6 sm:py-8 lg:py-12'>
        <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
          <div className='mb-10 md:mb-16'>
            <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'> Blog</h2>
            <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
              Yesterday is history, tormorrow is mystery, but today is a gift, that why we call it's a present
            </p>
          </div>
          <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8'>
            {isFetching && (
              <Fragment>
                <SkeletonPost />
                <SkeletonPost />
              </Fragment>
            )}
            {!isFetching &&
              data?.map((product) => (
                <ProductItem key={product.id} product={product} startEdit={() => { } }  handleDeletePost={handleDeletePost}/>
              ))}
          </div>
          <div></div>
        </div>
      </div>
    )
}