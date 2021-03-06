import React from "react"
import { Route } from "react-router-dom"
import { CartList } from "./customers/CartList"
import { CustomerProvider } from "./customers/CustomerProvider"
import { DistributorList } from "./distributors/DistributorList"
import { DistributorProvider } from "./distributors/DistributorProvider"
import { NurseryList } from "./nurseries/NurseryList"
import { NurseryProvider } from "./nurseries/NurseryProvider"
import { RetailerList } from "./retailers/RetailerList"

export const ApplicationViews = () =>{
    return(
        <>
            <Route exact path="/nurseries">
                <NurseryProvider>
                    <NurseryList/>
                </NurseryProvider>
            </Route> 
            <Route exact path="/distributors">
                <NurseryProvider>
                    <DistributorProvider>
                        <DistributorList/>
                    </DistributorProvider>
                </NurseryProvider>
            </Route> 
            <Route exact path="/retailers">
                <CustomerProvider>
                    <NurseryProvider>
                        <DistributorProvider>
                            <RetailerList/>
                        </DistributorProvider>
                    </NurseryProvider>
                </CustomerProvider>
            </Route> 
            <Route exact path="/cart">
                <CustomerProvider>
                    <CartList/>
                </CustomerProvider>
            </Route>
        </>
    )
}