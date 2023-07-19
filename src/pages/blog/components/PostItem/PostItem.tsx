import { useGetPostQuery } from 'pages/admin/blog/blog.service'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'store'
import { Post } from 'types/blog.type'

interface PostItemProps {
  post: Post
  detailPost: (id: string) => void
  handleDeletePost: (id: string) => void
}

export default function PostItem(props: PostItemProps) {
  const { post, detailPost } = props
  const postId = useSelector((state: RootState) => state.blog.postId)
  const { data, refetch } = useGetPostQuery(postId, {
    skip: !postId
  })
  
  
  // const [postId , setPostid] = useState('')
  // const { data, refetch } = useGetPostQuery(postId, {
  //   skip: !postId,

  // })
  // const  detailpost =(id: string) =>{
  //   setPostid(id)
  // }
  return (
    <div className="md:p-8 p-2 bg-white">
    <img className="rounded-lg w-full" src={post.featuredImage}
     />
    <p className="text-indigo-500 font-semibold text-base mt-2">{post.publishDate}</p>
    <h1 className="font-semibold text-gray-900 leading-none text-xl mt-1 capitalize truncate">
      {post.title}
    </h1>
    <div className="max-w-full">
      <p className="text-base font-medium tracking-wide text-gray-600 mt-1">
        {post.description}
      </p>
    </div>
  </div>
  )
}
