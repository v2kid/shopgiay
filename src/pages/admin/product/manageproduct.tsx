
import DefaultLayout from '../layout/defaultLayout'
import AddProduct from './components/addproduct/addproduct'
import Productlist from './components/productlist/productlist'

export default function ManageProduct() {
  return (
    <DefaultLayout>
      <div className='p-5'>
        <AddProduct />
        <Productlist />
      </div>
    </DefaultLayout>
  )
}
