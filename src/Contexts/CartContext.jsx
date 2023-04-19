import React, { createContext, useState} from 'react';


export const CartContext = createContext()

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

  const addToCart = (game, id) => {
    if(!cart.find(game => game.id == id)){
      setCart([...cart, game])
    }  
  }

  const removeFromCart = (id) => {
    const newCart = cart.filter(game => game.id !== id)
    setCart(newCart)
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider 
    value={{ cart, addToCart, removeFromCart, clearCart}}>
      {children}
    </CartContext.Provider>
  )
};

export default CartProvider;