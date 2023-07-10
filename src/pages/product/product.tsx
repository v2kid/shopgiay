import SkeletonPost from 'pages/admin/product/components/SkeletonPost'
import { useGetProductsQuery } from 'pages/admin/product/manageproduct.service'
import { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../components/index.css'
export default function Product() {
  const [keyword, setkeyword] = useState('')
  const { data, isFetching } = useGetProductsQuery({keyword})
  console.log(data)
  return (
    <section className='mx-auto mt-10 mb-5 grid grid-cols-1 justify-center justify-items-center gap-y-20 gap-x-14 md:grid-cols-2 lg:grid-cols-3'>
      {isFetching && (
        <Fragment>
          <SkeletonPost />
          <SkeletonPost />
        </Fragment>
      )}
      {!isFetching &&
        data?.map((product, index) => (
          <Link to={`product/detail/${product.id}`}>
            <div
              key={index}
              className='w-full max-w rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-300'
            >
              <div className='box'>
                <img src={product.imageUrl[0]} alt='product image' />
                <div className='overlay'>
                  <h3 className='capitalize ...'>{product.name}</h3>
                  <p className='truncate text-justify '>
                    {product.description}
                  </p>
                  <p>Price : $ {product.price}</p>
                  <a href='#'>Detail</a>
                </div>
              </div>
            </div>{' '}
          </Link>
        ))}
    </section>
  )
}
