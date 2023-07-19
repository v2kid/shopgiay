import { useState } from "react";
import ShoppingCart from "./ShoppingCart";
import { useGetProductsQuery } from "pages/admin/product/manageproduct.service";
import ProductItem from "pages/admin/product/components/productitem/productitem";
import { Link } from "react-router-dom";

export default function Navbar(){
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const [keyword, setkeyword] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {data, isFetching} = useGetProductsQuery({keyword})
  console.log(data)
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };


    return(
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://shopgiay-two.vercel.app/" className="flex items-center">
      <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <div className="flex md:order-2">
     

   <div className="flex items-center space-x-4">
  <div className="relative hidden md:block">
    <input type="search" onClick={toggleDropdown} onChange={(event) => setkeyword(event.target.value)} defaultValue='' className="pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none text-black" placeholder="Search" />
    <svg className="h-6 w-6 text-gray-300 ml-2 mt-2 stroke-current absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
   
  </div>    
  <button onClick={handleToggle}><a href="#" className="flex h-10 items-center px-2 rounded-lg border border-gray-200 hover:border-gray-300 focus:outline-none hover:shadow-inner">
    <svg className="h-6 w-6 leading-none text-gray-300 stroke-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>1 
  </a></button>
  <button type="button" className="hidden md:block w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex justify-center items-center">
    <img src="https://avatars.dicebear.com/api/bottts/2.svg" alt="bottts" width={28} height={28} className="rounded-lg mx-auto" />
  </button>
</div>
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
      </button>
    </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="https://shopgiay-two.vercel.app/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="https://shopgiay-two.vercel.app/blog" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
        </li>
        <li>
          <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
        </li>
        <li>
          <a href="https://shopgiay-two.vercel.app/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
        </li>
      </ul>
    </div>
  </div>
  {isMenuOpen && (
        <ShoppingCart handleToggle={handleToggle}/>
      )}
    {isOpen && (
        <div className="dropdown-content">
          {!isFetching &&
        data?.map((product, index) => (
          <div key={index} className="p-2 flex bg-white hover:bg-gray-100 cursor-pointer border-b border-gray-100" style={{}}>
  <div className="p-2 w-16"><img src={product.imageUrl[0]} alt="img product" /></div>
  <div className="flex-auto text-sm w-32">
    <div className="font-bold text-black">{product.name}</div>
    <div className="truncate text-black">{product.brand}</div>
    <div className="text-gray-400 text-black">{product.price}</div>
  </div>
</div>
        ))}
        </div>
      )}
</nav>

    )
}