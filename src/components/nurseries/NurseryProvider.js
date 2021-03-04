import React, { createContext, useState } from "react";

export const NurseryContext = createContext()

export const NurseryProvider = (props) =>{
    const [flowerNurseries, setFlowerNurseries] = useState([])
    const [distributorNurseries, setDistributorNurseries] = useState([])
    const [nurseries, setNurseries] = useState([])

    const getFlowerNurseries = () => {
        return fetch("http://localhost:8088/flowerNurseries?_expand=flower")
        .then(res => res.json())
        .then(setFlowerNurseries)
    }
    const getDistributorNurseries = () => {
        return fetch("http://localhost:8088/distributorNursuries?_expand=distributor")
        .then(res => res.json())
        .then(setDistributorNurseries)
    }
    const getNurseries = () => {
        return fetch("http://localhost:8088/nurseries")
        .then(res => res.json())
        .then(setNurseries)
    }

    return(
        <NurseryContext.Provider value={{flowerNurseries, getFlowerNurseries, distributorNurseries, getDistributorNurseries, nurseries, getNurseries}}>
            {props.children}
        </NurseryContext.Provider>
    )
}