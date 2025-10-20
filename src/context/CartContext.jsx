/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const CartContext = createContext()
export function CartProvider({ children }) {
    const [cart, setCart] = useState([]) //guarda productos agregados al carrito

    const addToCart = (pizza) => { // addTo Cart agrega una pizza, si ya existe, aumenta la cantidad
        const existing = cart.find(item => item.id === pizza.id)
        if (existing) {
            setCart(cart.map(item =>
                item.id === pizza.id ? { ...item, count: item.count + 1 } : item))
        } else {
            setCart([...cart, { ...pizza, count: 1 }])
        }
    }
    const removeFromCart = (id) => { //removeFromCart (id) elimina una pizza del carrito
        setCart(cart.filter(item => item.id !== id))
    }
    const increment = (id) => { //suma una unidad del mismo producto
        setCart(cart.map(item => item.id === id ? { ...item, count: item.count + 1 } : item
        ))
    }
    const decrement = (id) => { // resta unidades del mismo producto
        setCart(cart.flatMap(item => item.id === id ? item.count > 1 ? [{ ...item, count: item.count - 1 }] : [] : item))
    }
    const total = cart.reduce((sum, item) => sum + item.price * item.count, 0)
    return (
        //CartContext.Provider permite compartit todo esto con los componentes hijos.
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, increment, decrement, total }}>{children}</CartContext.Provider>
    )
}