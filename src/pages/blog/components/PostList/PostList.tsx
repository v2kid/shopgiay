import { Fragment, SetStateAction, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PostItem from '../PostItem'
import SkeletonPost from '../SkeletonPost'
import { Post } from 'types/blog.type'

// import { detailid, startEditPost } from 'pages/admin/pages/blog/blog.slice'
import { RootState } from 'store'
import Detailpost from '../DetailPost'
import { detailid, startEditPost } from 'pages/admin/blog/blog.slice'
import { useDeletePostMutation, useGetPostsQuery } from 'pages/admin/blog/blog.service'

export default function PostList() {
  // isLoading chỉ dành cho lần fetch đầu tiên
  // isFetching là cho mỗi lần gọi API
  const [page, setPage] = useState(1)
  const [per_page, setPer_page] = useState(4)
  const [keyword, setkeyword] = useState('')
  const { data, isLoading, isFetching } = useGetPostsQuery({ keyword, page })
  const [deletePost] = useDeletePostMutation()
  const dispatch = useDispatch()




  const next = () => {
    if (data && page < data.length -1) {
      setPage(page + 1)
    }
  }
  // function click(event) {
  //   const value = event.target.textContent;
  //   console.log(value);
  // }
  

  const prev = () => {
    if (page > 1) {
      setPage((page) => page - 1)
    }
  }

  const handleSearch = (searchTerm: SetStateAction<string>) => {
    setkeyword(searchTerm)
  }
  // console.log(data, isLoading, isFetching)
  const startEdit = (id: string) => {
    dispatch(startEditPost(id))
  }
  const detailPost = (id: string) => {
    dispatch(detailid(id))
  }
  const handleDeletePost = (id: string) => {
    deletePost(id)
  }
  const postId = useSelector((state: RootState) => state.blog.postId)
  // const { refetch } = useGetPostQuery(postId, {
  //   skip: !postId
  // })

  return (
    // <section className='to-white-500 bg-gradient-to-r from-slate-50 via-blue-100'>
    //   <div className='container mx-auto px-6 py-10'>
    //     <div className='mx-auto max-w-screen-xl px-4 md:px-8'>
    //       <div className='mb-10 md:mb-16'>
    //         <h2 className='mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl'> Blogs</h2>
    //         <p className='mx-auto max-w-screen-md text-center text-gray-500 md:text-lg'>
    //           "Yesterday is history, tomorrow is mystery, but today is a gift, that why we call it's present"
    //         </p>
    //       </div>
    //       {Boolean(postId) && (
    //         <Fragment>
    //           <Detailpost />
    //         </Fragment>
    //       )}
    //       {!Boolean(postId) && (
    //         <div className='grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-8'>
    //           {isFetching && (
    //             <Fragment>
    //               <SkeletonPost />
    //               <SkeletonPost />
    //             </Fragment>
    //           )}
    //           {!isFetching &&
    //             data?.map((post: Post) => (
    //               <PostItem key={post.id} post={post} detailPost={detailPost} handleDeletePost={handleDeletePost} />
    //             ))}
    //           <div className='inline-flex'>
    //             <button
    //               onClick={prev}
    //               className='group relative h-12 w-48 overflow-hidden rounded-2xl bg-gray-500 text-lg font-bold text-white'
    //             >
    //               Prev
    //               <div className='absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30'></div>
    //             </button>
    //             <button
    //               onClick={next}
    //               className='group relative h-12 w-48 overflow-hidden rounded-2xl bg-gray-500 text-lg font-bold text-white'
    //             >
    //               Prev
    //               <div className='absolute inset-0 h-full w-full scale-0 rounded-2xl transition-all duration-300 group-hover:scale-100 group-hover:bg-white/30'></div>
    //             </button>
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </section>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
  {isFetching && (
                 <Fragment>
                   <SkeletonPost />
                   <SkeletonPost />
                 </Fragment>
              )}
               {!isFetching &&
                 data?.map((post: Post) => (
                   <PostItem key={post.id} post={post} detailPost={detailPost} handleDeletePost={handleDeletePost} />
               ))}
              <div className='inline-flex'>
              </div>
             <div className="blogoverviewpage_Pages_BieN0">
</div>

</div>
  )
}
