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
    <a className="blogcapsule_BlogCapsule_3OBoG" href="https://www.dota2.com/newsentry/3718329360979838399"><div className="blogcapsule_Entry_2P4kN" style={{ backgroundImage: `url(${post.featuredImage})` }}>
        <div className="fade_FadeContainer_1JDI3 fade_Bottom_1NXAh">
          <div className="fade_Fade_1keus"  />
        </div>
        <div className="blogcapsule_Desc_471NM">
          As seasons go, spring doesn’t have much going for it. It’s wet, there’s too many insects, idiots
          are all over the place skipping through parks and falling in love.
        </div>
        <div className="blogcapsule_Title_39UGs">{post.title}</div>
        <div className="blogcapsule_Date_3kp_O">J{post.publishDate}</div>
      </div></a>
  )
}
