import { createContext } from "react";

export const CustomerContext = createContext()

export const CustomerProvider = (props) => {
    const  addCartItem = (cartObj) => {
        return fetch("http://localhost:8088/cartObjects",{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(cartObj)
        })
    }
    const getCartItemsByCustomerId = (id) => {
        return fetch(`http://localhost:8088/cartObjects/?customerId=${id}&_expand=flower&_expand=customer&_expand=retailer`)
        .then(res=>res.json())
    }
    return(
        <CustomerContext.Provider value={{addCartItem, getCartItemsByCustomerId}}>
            {props.children}
        </CustomerContext.Provider>
    )
}