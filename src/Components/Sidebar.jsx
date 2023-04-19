import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {IoMdArrowForward} from 'react-icons/io'
import {FiTrash2} from 'react-icons/fi'
import { SidebarContext } from '../Contexts/SidebarContext';
import CartItem from '../Components/CartItem';
import { CartContext } from '../Contexts/CartContext';

const Sidebar = () => {
  const {isOpen, handleClose} = useContext(SidebarContext)
  const {cart, clearCart} = useContext(CartContext)
  return (
  <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-base fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}>
    <div className='flex items-center justify-between py-6 border-b'>
      <div className='uppercase text-sm font-semibold'> Shoping Bag </div>
      <div 
        className='cursor-pointer w-8 h-8 flex justify-center items-center'
        onClick={handleClose}>
        <IoMdArrowForward className='text-2xl'/>
      </div>
    </div>
    <div className='flex flex-col gap-y-2 h-[430px] overflow-y-auto overflow-x-hidden  border-b my-hide-scrollbar'>
      {cart.map(item => {
        return <CartItem item={item} key={item.id}/>
      })}
    </div>
    <div className='flex flex-col gap-y-3 py-4 mt-4 '>
      <div className='flex w-full justify-between items-center'>
        <div className='uppercase font-semibold'>
          <span>Total:</span> $ 0 
        </div>
        <div 
        onClick={clearCart}
        className='cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl'>
          <FiTrash2 />
        </div>
      </div>
      <Link to='cart' className='bg-gray-600 flex p-4 justify-center items-center text text-primary w-full font-medium'>
        View Cart
      </Link>
      <Link to='cart/' className='bg-gray-700 flex p-4 justify-center items-center text text-white w-full font-medium'>
        Checkout
      </Link>
    </div>
  </div>)
};

export default Sidebar;