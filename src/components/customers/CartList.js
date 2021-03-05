import { useContext, useEffect, useState } from "react"
import { CartCard } from "./CartCard"
import { CustomerContext } from "./CustomerProvider"

export const CartList = () => {
    const customerId = parseInt(localStorage.getItem("thorns_customer"))
    const[cartItems, setCartItems] = useState([])
    const {getCartItemsByCustomerId} = useContext(CustomerContext)

    useEffect(()=>{
        getCartItemsByCustomerId(customerId)
        .then(cartItems => cartItems.sort((a, b)=> a.flowerId - b.flowerId))
        .then(setCartItems)
    },[])
    let flowerId = 0
    let price = 0
    let filteredCartItems
    let species
    let color
    let flowerAmount = 0 
    let sendFlowerId
    let flowerDisplayArray = []

    return (
        <>
        

        <div className="cartDisplay">
        {cartItems.forEach(CI => {
            if(CI.flower.id === flowerId){
            }
            else{
                filteredCartItems = cartItems.filter(cI => CI.flower.id === cI.flower.id )
                flowerAmount = filteredCartItems.length
                filteredCartItems.forEach(fci => {
                    price += fci.price
                    species = fci.flower.species
                    color = fci.flower.color
                    sendFlowerId= fci.flower.id
                })
                flowerId = CI.flower.id
                console.log(flowerId, color, species, flowerAmount, price.toFixed(2))
                flowerDisplayArray.push({
                    flowerId: sendFlowerId,
                    price: price,
                    species: species,
                    color: color,
                    amount: flowerAmount,
                })}})}
                {flowerDisplayArray.map(flower => <CartCard key={flower.flowerId}
                                                            flower= {flower}/>)}
        </div>
        </>
    )
}