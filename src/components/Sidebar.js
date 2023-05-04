import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import {IoMdArrowForward} from 'react-icons/io'
//  import {FaRegTrashAlt} from 'react-icons/fe'
import CartItem from '../components/CartItem'
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';


const Sidebar = () => {
  const {isOpen, setIsOpen , handleClose} = useContext(SidebarContext)
  const {cart, clearCart, totalPrice, itemQuantity } = useContext(CartContext)

  return (
    <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
    <div className='flex items-center justify-between py-6 border-b '>
      <div className='uppercase text-sm font-semibold '> Shopping Bag ({itemQuantity})</div>
        <div className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward onClick={handleClose} className='text-2xl' />
        </div>
    </div>
    {/* Cart Items  */}
    <div className='flex flex-col gap-y-2 h-[520px] lg:h-[640px] overflow-y-auto overflow-x-hidden border-b' >
      {
        cart.map(item => {
          return <CartItem item={item} key={item.id}/>
        })
      }
    </div>
    {/* Subtotal Section  */}
<div className=' flex flex-col gap-y-3 py-4 mt-4'>
  <div className=' flex w-full justify-between items-center'>
    <div className='uppercase font-semibold'>
      <span className='mr-2'>Total :</span> $ {parseFloat(totalPrice).toFixed(2)}
    </div>
    <div onClick={clearCart} className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl '>DEL</div>
  </div>
</div>
    </div>
  )
};

export default Sidebar;
