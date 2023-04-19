import { BsController } from 'react-icons/bs'
import { GoSearch } from 'react-icons/go'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useContext } from 'react'
import { SidebarContext } from '../Contexts/SidebarContext'
import { CartContext } from '../Contexts/CartContext'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { SearchContext } from '../Contexts/SearchContext'

function Navbar() {
  const {isOpen, setIsOpen} = useContext(SidebarContext)
  const {cart} = useContext(CartContext)
  const [searchValue, setSearchValue] = useState('')
  const { handleSearch } = useContext(SearchContext)

  function handleSearchNavbar(e){
    handleSearch(searchValue)
  }

  const navigate = useNavigate();

  function onEnter(e){
    if(e.key === 'Enter'){
      handleSearch(searchValue)
      navigate(`/search/${searchValue}`)
    }
  }
  
  return (
    <div className='flex items-center px-3 sm:px-10 pt-4 justify-between mb-4'>
      <div className='flex'>
        <Link to='/'>
          <div className='flex items-center gap-2 mr-4 sm:mr-5'>
            <div className='pt-1 sm:pt-0'>
                <BsController size={'33px'}/>
            </div>
            <p className='text-lg pt-1 hidden lg:block'>Game Store</p>
          </div>
        </Link>
        <div className='flex text-sm'>
          <input 
            onKeyDown={onEnter}
            onChange={(e) => setSearchValue(e.target.value)}
            placeholder='Search games...' 
            className='w-[200px] sm:w-[350px] h-9 flex items-center rounded-md py-1 px-2 focus:outline-none'
          />
          <button className='text-gray-100  hover:text-gray-300 w-[50px] h-9 flex items-center rounded-md justify-center'
              onClick={handleSearchNavbar}>
                <Link to={`/search/${searchValue}`}>
                  <GoSearch size={25}/>
                </Link>
          </button>
        </div>
      </div>

        <div className='flex items-center'>
          <div className='flex items-center gap-4 cursor-pointer'>
            {/* <div className='flex items-center'>
              <AiOutlineHeart size={30} className='hover:text-red-400'/>
              <p className='ml-2 text-xl pt-1 hidden md:block'>Favorites: 0</p>
            </div> */}
            <div className='flex items-center'
                onClick={() => setIsOpen(!isOpen)} >
                <AiOutlineShoppingCart size={35} className='hover:text-emerald-300 relative'/>
              <div className='bg-red-500 absolute text-[12px] 
              w-[15px] text-white rounded-full flex justify-center items-center top-3 right-1 h-[15px] pt-[3px] sm:hidden'>
          {cart.length}
        </div>
              <p className='ml-2 text-xl pt-1 hidden md:block'>Cart: {cart.length}</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar