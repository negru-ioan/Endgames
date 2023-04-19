import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { IoMdClose } from 'react-icons/io'
import { CartContext } from '../Contexts/CartContext'; 

const CartItem = ({item}) => {
  const {removeFromCart} = useContext(CartContext)
  const {id, title, thumbnail} = item

  return(
  <div className='flex gap-x-4 pu-2 lg:px-6 border-b border-gray-200 w-full font-light text-white'>
    <div className='w-full min-h-[100px] flex items-center gap-x-4'>
      <Link to={`/game/${id}`}>
        <img src={thumbnail} alt={title} className='max-w-[120px] rounded-md cursor-pointer'/>
      </Link>
      <div className='w-full flex flex-col'>
        <div className='flex justify-between mb-2'>
          <Link to={`/game/${id}`}
          className='text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'>
              {title}
          </Link>
          <div 
          onClick={() => removeFromCart(id)} 
          className='text-xl cursor-pointer'>
          <IoMdClose className='text-gray-500 hover:text-red-500 transition'/>
          </div>
        </div>
      </div>
    </div>
  </div>)
};

export default CartItem;

