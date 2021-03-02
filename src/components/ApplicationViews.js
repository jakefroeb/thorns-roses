import React from "react"
import { Route } from "react-router-dom"
import { NurseryList } from "./nurseries/NurseryList"
import { NurseryProvider } from "./nurseries/NurseryProvider"

export const ApplicationViews = () =>{
    return(
        <>
            <Route exact path="/nurseries">
                <NurseryProvider>
                    <NurseryList/>
                </NurseryProvider>
            </Route> 
            <Route exact path="/distributors">
                <></>
            </Route> 
            <Route exact path="/retailers">
                <></>
            </Route> 
        </>
    )
}