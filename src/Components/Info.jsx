import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { AiFillHeart, AiOutlineShoppingCart } from 'react-icons/ai'
import { CartContext } from '../Contexts/CartContext'


function Info({game}) {
  const [liked, setLiked] = useState(false)
  const [addedTocart, setAddedToCart] = useState(false)
  const { addToCart, removeFromCart } = useContext(CartContext)
  const [minRec, setMinRec] = useState(game?.minimum_system_requirements !== undefined && game?.minimum_system_requirements?.graphics !== null)

  useEffect(() => {
    setMinRec(game?.minimum_system_requirements !== undefined && game?.minimum_system_requirements?.graphics !== null)
  },[game])

  function handleAddToCart(){
    if(addedTocart){
      removeFromCart(game.id)
    } else {
      addToCart(game, game.id)
    }
    setAddedToCart(prev => !prev)
  }

  function scurtatorX5000(input){
    const divisors = [' or ', ',', '/']
    try{
      const max = Math.max(...divisors.map(div => input.indexOf(div)))
      if(max !== -1){
          return input.substr(0, max)
      }
    } catch(err){
      console.log(err)
    }
    return input
  }

  return (
    <div className='px-6 info_width'>
             <h2 className='text-2xl sm:text-3xl mb-8 text-center'>System Requirements</h2>
            <div>
              <div className='flex justify-between border-b-2 border-base-light mb-3 text-lg'>
                <div className='mr-8'>Graphics:</div>
                <div className='text-end'>
                  { minRec ? scurtatorX5000(game?.minimum_system_requirements?.graphics) : "Radeon HD 7700"}
                </div>
              </div>
              <div className='flex sm:flex justify-between border-b-2 border-base-light mb-3 text-lg'>
                <div className='mr-8'>Processor:</div>
                <div className='text-end'>
                  { minRec ? scurtatorX5000(game?.minimum_system_requirements?.processor) : "Intel Core i3-6300 3.8GHz"}
                </div>
              </div>
              <div className='flex justify-between border-b-2 border-base-light mb-3 text-lg'>
                <div>Os:</div>
                <div>{ minRec ? scurtatorX5000(game?.minimum_system_requirements?.os) : "64-bit Windows 10" }</div>
              </div>
              <div className='flex justify-between border-b-2 border-base-light mb-3 text-lg'>
                <div>Memory:</div>
                <div>{game?.minimum_system_requirements?.memory || "6GB"} RAM</div>
              </div>
              <div className='flex justify-between border-b-2 border-base-light mb-3 text-lg'>
                <div>Storage:</div>
                <div>{game?.minimum_system_requirements?.storage || "30 GB"}</div>
              </div> 
    

              <h2 className='text-2xl sm:text-3xl my-8 text-center'>Additional Information</h2>
              <div className='flex justify-between border-b-2 border-base-light mb-3 text-lg'>
                <div>Status:</div>
                <div>{game?.status}</div>
              </div>
              <div className='flex justify-between border-b-2 border-base-light mb-3 text-lg'>
                <div>Genre:</div>
                <div>{game?.genre}</div>
              </div>
              <div className='flex justify-between border-b-2 border-base-light mb-3 text-lg'>
                <div>Release date:</div>
                <div>{game?.release_date}</div>
              </div>
              <div className='flex justify-between border-b-2 border-base-light mb-3 text-lg'>
                <div>Publisher:</div>
                <div>{game?.publisher}</div>
              </div>

              <div className='flex'>
              <button className='bg-base-light text-white text-xl py-2 px-4 rounded-md mt-5 w-16 mr-2 justify-center'
                onClick={() => setLiked(prev => !prev)} style={{color: liked ? 'rgb(231, 51, 51)' : 'lightgray'}}>
                <AiFillHeart size={30} />
              </button>

              <button className='bg-base-light text-white text-xl py-2 px-4 rounded-md mt-5 w-full'>
                <a href={game?.game_url}>Visit website</a>
              </button>

              <button className='bg-base-light text-white text-xl py-2 px-4 rounded-md mt-5 w-16 ml-2 justify-center'
                onClick={() => handleAddToCart(game, game.id)}
                style={{color: addedTocart ? 'rgb(110 231 183)' : 'lightgray'}}>
                <AiOutlineShoppingCart size={30} />
              </button>
              </div>
            </div>
          </div>
  )
}

export default Info