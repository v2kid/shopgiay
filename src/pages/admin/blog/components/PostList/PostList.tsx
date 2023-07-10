import { useDeletePostMutation, useGetPostsQuery, useSearchPostQuery } from '../../blog.service'
import { startEditPost } from '../../blog.slice'
import { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
import PostItem from '../PostItem'
import SkeletonPost from '../SkeletonPost'
import { Post } from 'types/blog.type'
import { toast } from 'react-toastify'

export default function PostList() {
  const [page, setPage] = useState(1)
  const [keyword, setkeyword] = useState('')
  // isFetching là cho mỗi lần gọi API
  const { data, isLoading, isFetching } = useGetPostsQuery({ keyword, page })
  const [deletePost] = useDeletePostMutation()
  const dispatch = useDispatch()
  const startEdit = (id: string) => {
    dispatch(startEditPost(id))
  }
  const handleDeletePost = (id: string) => {
    toast.success('id' + id)

    deletePost(id)
  }
  const next = () => {
    if (data && page < data.length) {
      setPage(page + 1)
    }
  }
  const prev = () => {
    if (page > 1) {
      setPage((page) => page - 1)
    }
  }

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
            data?.map((post) => (
              <PostItem key={post.id} post={post} startEdit={startEdit} handleDeletePost={handleDeletePost} />
            ))}
        </div>
        <div></div>

        <div>
          <a
            onClick={prev}
            className='inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            Previous
          </a>
          {/* Next Button */}
          <a
            onClick={next}
            className='ml-3 inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            Next
          </a>
        </div>
      </div>
    </div>
  )
}
