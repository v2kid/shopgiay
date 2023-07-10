import DefaultLayout from 'pages/admin/layout/defaultLayout'
import PostList from './components/PostList'
import CreatePost from './components/CreatePost'

export default function Blog() {
  return (
    <DefaultLayout>
      <div className='p-5'>
        <CreatePost />
        <PostList />
      </div>
    </DefaultLayout>
  )
}
