import Footer from 'components/Footer'
import Header from 'components/Header'
import Navbar from 'components/Navbar'
import Product from 'pages/product/product'

export default function Home() {
  return (
    <div className='flex flex-col bg-gray-200'>
      <Header />
      <div className='text-red text-center text-3xl '>Latest News</div>
      <Product />
      <Footer />
    </div>
  )
}
