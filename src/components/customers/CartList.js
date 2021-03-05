import { useContext, useEffect, useState } from "react"
import { CustomerContext } from "./CustomerProvider"

export const CartList = () => {
    const customerId = parseInt(localStorage.getItem("thorns_customer"))
    const[cartItems, setCartItems] = useState([])
    const {getCartItemsByCustomerId} = useContext(CustomerContext)

    useEffect(()=>{
        getCartItemsByCustomerId(customerId)
        .then(setCartItems)
    },[])

    return (
        <>
        {console.log(cartItems)}
        
        {cartItems.map(cartItem => <div key={cartItem.id}>{cartItem.flower.color} {cartItem.flower.species} {cartItem.price}</div>)}
        </>
    )
}