
import { useState } from 'react'
import { Product } from 'types/product.type'
import { useAddProductMutation } from '../../manageproduct.service';

export default function AddProduct() {
  const[addPost, addPostResult] = useAddProductMutation()
  const addImageUrlField = () => {
    setFormData((prevData) => ({
      ...prevData,
      imageUrl: [...prevData.imageUrl, '']
    }));
  };
 
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    try{
       await addPost(formData).unwrap()  
       setFormData(initialState)
      }  
     catch (error) {
      console.log(error)
    }
  }
  const handleImgChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = e.target;
    setFormData((prevData) => {
      const updatedImageUrls = [...prevData.imageUrl];
      updatedImageUrls[index] = value;
      return { ...prevData, imageUrl: updatedImageUrls };
    });
  };
  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const updatedColors = checked
      ? [...formData.color, value]
      : formData.color.filter((color) => color !== value);

    setFormData((prevFormData) => ({
      ...prevFormData,
      color: updatedColors,
    }));
  };
  const handleSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const updatedSizes = checked
    ? [...formData.size, value]
    : formData.size.filter((size) => size !== value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      size: updatedSizes,
    }));
  };
  const initialState: Product = {
      name: '',
      description: '',
      brand: '',
      price: 0,
      color: [],
      size: [],
      gender: '',
      material: '',
      style: '',
      isAvailable: true,
      imageUrl: [],
      id: Math.floor(Math.random() * 10000).toString()
  }

  const [formData, setFormData] = useState<Product>(initialState)

  return (
   
    <form onSubmit={handleSubmit}>
      {/* name */}
      <div>
      </div>
      <div className='mb-6'>
        <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-black'>Name Product</label>
        <input
          type='text'
          id='name'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          placeholder='name'
          required
          value={formData.name}
          onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
        />
      </div>
      {/* description */}
      <div>
        <label htmlFor='description' className='mb-2 block text-sm font-medium text-gray-900 dark:text-black'>
          Description
        </label>
        <textarea
          id='description'
          rows={4}
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          placeholder='description'
          value={formData.description}
          onChange={(event) => setFormData((prev) => ({ ...prev, description: event.target.value }))}
        />
      </div>
        {/* brand and price */}
      <div className='grid md:grid-cols-2 md:gap-6'>
        <div className='mb-6'>
          <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-black'>Brand</label>
          <input
            type='text'
            id='brand'
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            placeholder='Nike'
            required
            value={formData.brand}
          onChange={(event) => setFormData((prev) => ({ ...prev, brand: event.target.value }))}
          />
        </div>
        <div className='mb-6'>
          <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-black'>Price</label>
          <input
            type='number'
            id='price'
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            placeholder='Nike...'
            required
            value={formData.price}
            onChange={(event) => setFormData((prev) => ({ ...prev, price: Number(event.target.value) }))}
  />
        </div>
      </div>
 {/* color and size */}
 <div className='grid md:grid-cols-2 md:gap-6'>
  <div className='grid md:grid-cols-8 md:gap-6'>
  <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-black'>Color</label>
        <div className='mb-6'>
       <div>
  <input
   onChange={handleColorChange}
   value="red"
  defaultChecked id="red-checkbox" type="checkbox"  className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
  <label htmlFor="red-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Red</label>
</div>  
        </div>
        <div className='mb-6'>
       <div>
  <input
   onChange={handleColorChange}
   value="blue"
  defaultChecked id="red-checkbox" type="checkbox"  className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
  <label htmlFor="red-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Blue</label>
</div>  
        </div>
  </div>
  <div className='grid md:grid-cols-8 md:gap-6'>
  <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-black'>Size</label>
        <div className='mb-6'>
       <div>
  <input
   onChange={handleSizeChange}
   value='41'
  defaultChecked id="red-checkbox" type="checkbox"  className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
  <label htmlFor="red-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">41</label>
</div>  
        </div>
        <div className='mb-6'>
       <div>
  <input
   onChange={handleSizeChange}
   value="blue"
  defaultChecked id="red-checkbox" type="checkbox"  className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
  <label htmlFor="red-checkbox" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">42</label>
</div>  
        </div>
      </div>
</div>
   {/* size */}
      
  {/* gender */}
      <div className='mb-6 '>
      <div className='grid md:grid-cols-8 md:gap-6'>
  <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-black'>Gender</label>
  <div className=" items-center mb-4">
    <input id="default-radio-1" type="radio"  name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Male</label>
  </div>
  <div className=" items-center mb-4">
    <input id="default-radio-1" type="radio"  name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Female</label>
  </div>
  <div className=" items-center">
    <input defaultChecked id="default-radio-2" type="radio"  name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
    <label htmlFor="default-radio-2" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Unisex</label>
  </div>
</div>

      </div>

    {/*material */}
    <div className='mb-6'>
        <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-black'>Material</label>
        <input
          type='text'
          id='material'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          placeholder='material'
          required
          value={formData.material}
          onChange={(event) => setFormData((prev) => ({ ...prev, material: event.target.value }))}
        />
      </div>
       {/* style */}
      <div className='mb-6'>
        <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-black'>Material</label>
        <input
          type='text'
          id='style'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          placeholder='style'
          required
          value={formData.style}
          onChange={(event) => setFormData((prev) => ({ ...prev, style: event.target.value }))}
        />
      </div>
    {/* isAvailable */}   
      <div className='mb-6'>
        <label className='mb-2 block text-sm font-medium text-gray-900 dark:text-black'>isAvailable</label>
        <input
          type='checkbox'
          id='isAvailable'
          className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
          placeholder='name'
          required
          checked={formData.isAvailable}
          onChange={(event) => setFormData((prev) => ({ ...prev, isAvailable: event.target.checked }))}
        />
      </div>
      {formData.imageUrl.map((url, index) => (
        <div className='mb-4' key={index}>
          <label htmlFor={`img${index + 1}`} className='text:black mb-2 block'>
            Image {index + 1}:
          </label>
          <input
            type='text'
            id={`img${index + 1}`}
            name={`imageUrl[${index}]`}
            className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500'
            value={url}
            onChange={(e) => handleImgChange(e, index)}
          />
        </div>
      ))}
      <button
        type='button'
        className='group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400'
        onClick={addImageUrlField}
      >
       <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
          Add Img
        </span>
      </button>
      <button
        type='submit'
        className='group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 p-0.5 text-sm font-medium text-gray-900 focus:outline-none focus:ring-4 focus:ring-red-100 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 dark:focus:ring-red-400'
      >
        <span className='relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900'>
          submit
        </span>
      </button>
    </form>
  )
}
