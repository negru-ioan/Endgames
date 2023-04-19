import { useState, useContext } from 'react'
import { GoPlus } from  'react-icons/go'
import { AiFillHeart, AiFillWindows } from 'react-icons/ai'
import { BsBrowserChrome, BsCheck2 } from 'react-icons/bs'
import { BiLinkExternal } from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { CartContext } from '../Contexts/CartContext'

function Card({game}) {
    const [liked, setLiked] = useState(false)
    const {cart, addToCart, removeFromCart} = useContext(CartContext)
    const [addedToCart, setAddedToCart] = useState(cart.find(g => g.id === game.id))
    
    function handleAddToCart(e){
        if(!addedToCart){
            addToCart(game, game.id)
        } else {
            removeFromCart(game.id)
        }
        setAddedToCart(prev => !prev)
    }

  return (
    <div className='bg-special-gray hover:bg-[#303030] hover:scale-[101.5%] rounded-xl transition-all duration-300 relative card_max_width_365px'> 
        <Link to={`/game/${game.id}`}>
            <img className='rounded-t-xl'
                src={game.thumbnail}
            />
        </Link>

        <div className='p-2 flex justify-between items-center'>
            <div className='flex items-center text-gray-300 hoverAddToCart' 
                 style={{color: addedToCart ? 'lightgreen' : 'lightgray'}}
                 onClick={handleAddToCart}>
                <p className='text-md font-thin pr-1 pt-1'style={{color: addedToCart && 'lightgreen'}} >
                 { addedToCart ? "Added" : "Add to cart" }
                </p>
                { addedToCart ? <BsCheck2 size={15} /> : <GoPlus size={15}/> }
            </div>
            <div className='flex'>
                {game.platform === 'PC (Windows)' ? <AiFillWindows size={25} /> : <BsBrowserChrome size={25} />}
            </div>
        </div>
        <div className='p-2 flex flex-col mb-9'>
            <div className='flex-grow'>
                <p className='text-2xl'>{game.title}</p>
                <p className=' text-sm font-thin text-gray-300'>{ game.short_description.slice(0, 70).concat(game.short_description.length > 70 ? '...' : '') }</p>
            </div>
            
        </div>
            <div className='flex items-center justify-between absolute bottom-0 w-full px-2 py-1'>
                {/* <div className='p-1'>
                    { genres[game.genre ] }
                </div> */}
                <div>
                    <a href={game.game_url} className='text-gray-300 hoverAddToCart'> 
                        <BiLinkExternal size={25}/> 
                    </a>
                </div>
                <div onClick={() => setLiked(prev => !prev)} style={{color: liked ? 'rgb(231, 51, 51)' : 'lightgray'}} 
                     className='transform transition duration-300 hover:scale-110 focus:scale-125'>
                    <AiFillHeart size={25} />
                </div>
            </div>
    </div>
  )
}

export default Card