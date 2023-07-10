import { Post } from 'types/blog.type'

interface PostItemProps {
  post: Post
  startEdit: (id: string) => void
  handleDeletePost: (id: string) => void
}

export default function PostItem(props: PostItemProps) {
  const { post, startEdit, handleDeletePost } = props
  return (
    <div className='flex flex-col items-center overflow-hidden rounded-lg border md:flex-row'>
      <a className="blogcapsule_BlogCapsule_3OBoG"><div className="blogcapsule_Entry_2P4kN" style={{ backgroundImage: `url(${post.featuredImage})` }}>
    <div className="fade_FadeContainer_1JDI3 fade_Bottom_1NXAh">
      <div className="fade_Fade_1keus"  />
    </div>
    <div className="blogcapsule_Desc_471NM">
      As seasons go, spring doesn’t have much going for it. It’s wet, there’s too many insects, idiots
      are all over the place skipping through parks and falling in love.
    </div>
    <div className="blogcapsule_Title_39UGs">{post.title}</div>
    <div className="blogcapsule_Date_3kp_O">J{post.publishDate}</div>     
  </div>
  </a>
      {/* <div className='group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48'>
        <img
          src={post.featuredImage}
          loading='lazy'
          alt={post.title}
          className='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
        />
      </div>
      <div className='flex flex-col gap-2 p-4 lg:p-6'>
        <span className='text-sm text-gray-400'>{post.publishDate}</span>
        <h2 className='text-xl font-bold text-gray-800'>{post.title}</h2>
        <p className='text-sm- gray-500 hover:leading-loose '>{post.description}</p> */}
        <div>
          <div className='inline-flex rounded-md shadow-sm' role='group'>
            <button
              type='button'
              className='rounded-l-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
              onClick={() => startEdit(post.id)}
            >
              Edit
            </button>
            <button
              type='button'
              className='rounded-r-lg border-t border-b border-r border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
              onClick={() => handleDeletePost(post.id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div> 
  )
}
