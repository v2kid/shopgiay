import { useState } from "react"
import { Product } from "types/product.type"

interface PostItemProps {
    product : Product
    startEdit: (id: string) => void
    handleDeletePost: (id: string) => void
  }
export default function ProductItem(props: PostItemProps){
    const { product, startEdit, handleDeletePost } = props
    const [mainImage, setMainImage] = useState(product.imageUrl[0]);
    return(
      <div className="flex flex-col justify-center ">
  <div className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-lg p-3 max-w-xs md:max-w-3xl mx-auto border border-white bg-white">
    <div className="w-full md:w-1/3 bg-white grid place-items-center">
      <img src={`${mainImage}`} alt="tailwind logo" className="rounded-xl h-48 w-64" />
      <div className="grid grid-cols-8">
           {product.imageUrl.map((imageUrl, index) => (
             <img
              className='object-cover h-12 w-12'
               key={index}
               src={imageUrl}
              alt={`Image ${index}`}
               onClick={() => setMainImage(imageUrl)}
             />
           ))}
         </div>
        </div>
    <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
      <div className="flex justify-between item-center">
        <p className="text-gray-500 font-medium hidden md:block">{product.brand}</p>
        <button
              type='button'
              className='rounded-r-lg border-t border-b border-r border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
              onClick={() => handleDeletePost(product.id)}>
              Delete
            </button>
      </div>
      <h3 className="font-black text-gray-800 md:text-3xl text-xl">{product.name}</h3>
      <p className="md:text-lg text-gray-500 text-base">{product.description}</p>
      <p className="text-xl font-black text-gray-600">
        ${product.price}
      </p>
    </div>
  </div>
</div>

      // <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
      // <div className='blogentrypage_LatestNewsContainer_3_5ne grid grid-cols-3 gap-x-6 gap-y-8 md:grid-cols-1 '>
      //  <a className='blogcapsule_BlogCapsule_3OBoG'>
      //            <div
      //              className='blogcapsule_Entry_2P4kN bg-cover bg-center'
      //              style={{ backgroundImage: `url('${mainImage}')` }}
      //            >
      //              <div className='fade_FadeContainer_1JDI3 fade_Bottom_1NXAh'>
      //                <div
      //                  className='fade_Fade_1keus'
      //                  style={{
      //                    background:
      //                      'linear-gradient(rgba(19, 23, 28, 0) 60%, rgba(19, 23, 28, 0.733) 70%, rgb(19, 23, 28) 90%)'
      //                  }}
      //                />
      //              </div>
      //              <div className='blogcapsule_Desc_471NM'>
      //                {product.description}
                    
      //              </div>
      //              <div className='blogcapsule_Title_39UGs'>{product.name}</div>
      //              <div className='blogcapsule_Date_3kp_O'> {product.brand}-{product.style}</div>
      //            </div>
      //            <div className="grid grid-cols-8">
      //     {product.imageUrl.map((imageUrl, index) => (
      //       <img
      //         className='object-cover h-16 w-16'
      //         key={index}
      //         src={imageUrl}
      //         alt={`Image ${index}`}
      //         onClick={() => setMainImage(imageUrl)}
      //       />
      //     ))}
      //   </div>
      //          </a>
      //  </div>
      //  </section>
    )
}