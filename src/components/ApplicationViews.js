import React from "react"
import { Route } from "react-router-dom"
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
                <NurseryProvider>
                    <DistributorProvider>
                        <RetailerList/>
                    </DistributorProvider>
                </NurseryProvider>
            </Route> 
        </>
    )
}