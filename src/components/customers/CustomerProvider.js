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
    return(
        <CustomerContext.Provider value={{addCartItem}}>
            {props.children}
        </CustomerContext.Provider>
    )
}