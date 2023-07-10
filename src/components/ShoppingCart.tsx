import { useDeleteCartitemMutation, useGetcartsQuery } from "pages/service/page.service";
import { useState } from "react";
import { Product } from "types/product.type";

interface ChildComponentProps {
  handleToggle: () => void;
}

interface PostItemProps {
  handleDeletePost: (id: string) => void
}
export default function ShoppingCart(props: ChildComponentProps){
const [deleteCartitem] = useDeleteCartitemMutation()

  const {data, isFetching} =useGetcartsQuery({})  
  const totalPrice: number = (data ?? []).reduce((sum: number, product: Product) => sum + product.price, 0);
    return(
     <div className="w-full h-full bg-black dark:bg-gray-900 bg-opacity-90 top-0 overflow-y-auto overflow-x-hidden fixed sticky-0" id="chec-div">
  <div className="w-full absolute z-10 right-0 h-full overflow-x-hidden transform translate-x-0 transition ease-in-out duration-700" id="checkout">
    <div className="flex items-end lg:flex-row flex-col justify-end " id="cart">
      <div className="lg:w-1/2 md:w-8/12 w-full lg:px-8 lg:py-14 md:px-6 px-4 md:py-8 py-4 bg-white dark:bg-gray-800  lg:h-screen h-auto" id="scroll">
        <div onClick={props.handleToggle} className="flex items-center text-gray-500 hover:text-gray-600 dark:text-white cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-left" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <polyline points="15 6 9 12 15 18" />
          </svg>
          <p className="text-sm pl-2 leading-none dark:hover:text-gray-200">Back</p>
        </div>
        <p className="lg:text-4xl text-3xl font-black leading-10 text-gray-800 dark:text-white pt-3"></p>
        {!isFetching &&
            data?.map((detail) => (
              <div className="md:flex items-strech py-8 md:py-10 lg:py-8 border-t border-gray-50">
          <div className="md:w-4/12 2xl:w-1/4 w-full">
            <img src={detail.imageUrl[0]} alt="Black Leather Purse" className="h-full object-center object-cover md:block hidden" />
            <img src={detail.imageUrl[0]} alt="Black Leather Purse" className="md:hidden w-full h-full object-center object-cover" />
          </div>  
          <div className="md:pl-3 md:w-8/12 2xl:w-3/4 flex flex-col justify-center">
            <p className="text-xs leading-3 text-gray-800 dark:text-white md:pt-0 pt-4">{detail.brand}</p>
            <div className="flex items-center justify-between w-full">
              <p className="text-base font-black leading-none text-gray-800 dark:text-white">{detail.name}</p>
            </div>
            <p className="text-xs leading-3 text-gray-600 dark:text-white pt-2">{detail.size[0]}</p>
            <p className="text-xs leading-3 text-gray-600 dark:text-white py-4">Color: {detail.color}</p>
            <p className="w-96 text-xs leading-3 text-gray-600 dark:text-white">Composition: {detail.material}</p>
            <div className="flex items-center justify-between pt-5">
              <div className="flex itemms-center">
                <p className="text-xs leading-3 underline text-gray-800 dark:text-white cursor-pointer">Add to favorites</p>
                <p onClick={() => deleteCartitem(detail.id)}  className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer" >Remove</p>
              </div>
              <p className="text-base font-black leading-none text-gray-800 dark:text-white">{detail.price}</p>
            </div>
          </div>
        </div>
            ))}
        
      </div>
      <div className="lg:w-96 md:w-8/12 w-full bg-gray-100 dark:bg-gray-900 h-full">
        <div className="flex flex-col lg:h-screen h-auto lg:px-8 md:px-7 px-4 lg:py-20 md:py-10 py-6 justify-between ">
          <div>
            <p className="lg:text-4xl text-3xl font-black leading-9 text-gray-800 dark:text-white">Summary</p>
            <div className="flex items-center justify-between pt-16">
              <p className="text-base leading-none text-gray-800 dark:text-white">Subtotal</p>
              <p className="text-base leading-none text-gray-800 dark:text-white">,000</p>
            </div>
            <div className="flex items-center justify-between pt-5">
              <p className="text-base leading-none text-gray-800 dark:text-white">Shipping</p>
              <p className="text-base leading-none text-gray-800 dark:text-white" />
            </div>
            <div className="flex items-center justify-between pt-5">
              <p className="text-base leading-none text-gray-800 dark:text-white">Tax</p>
              <p className="text-base leading-none text-gray-800 dark:text-white" />
            </div>
             <div>
            <div className="flex items-center pb-6 justify-between lg:pt-5 pt-20">
              <p className="text-2xl leading-normal text-gray-800 dark:text-white">Total</p>
              <p className="text-2xl font-bold leading-normal text-right text-gray-800 dark:text-white">{totalPrice}</p>
            </div>
            <button  className="text-base leading-none w-full py-5 bg-gray-800 border-gray-800 border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-white dark:hover:bg-gray-700">Checkout</button>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  </div>
</div>

    )
}