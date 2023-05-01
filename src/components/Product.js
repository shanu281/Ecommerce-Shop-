import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import {BsPlus, BsEyeFill} from 'react-icons/bs'


const Product = ({product}) => {
  //Destructure product
  const {id, image, category, title, price} = product
  return (
    <div>
      <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
<div className='w-full h-full flex justify-center items-center'>
  {/* Image  */}
  <div className='w-[200px] mx-auto flex justify-center items-center'>

  <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt='image' />
  </div>
</div>
{/* Cart Button  */}
<div className='absolute top-6 right-11 group-hover:right-5 p-2 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300' >
  <button>
    <div className='flex justify-center items-center text-white bg-red-500 w-12 h-12'>
      <BsPlus className='text-3xl'/>
      </div>
      </button>
      <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl '><BsEyeFill /></Link>
</div>
      </div>
      {/* Product details  */}
      <div>
        <div className='text-sm capitalize text-gray-500 mb-1 '>{category}</div>
        <Link to = {`/product/${id}`}>
          <h2>{title}</h2>
          <h2 className='font-semibold '> $ {price}</h2>
        </Link>
      </div>
    </div>
  )
};

export default Product;
