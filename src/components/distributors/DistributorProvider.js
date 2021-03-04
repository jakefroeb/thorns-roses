import { createContext, useState } from "react";

export const DistributorContext = createContext()

export const DistributorProvider = (props) => {
    const [distributors, setDistributors] = useState([])

    const getDistributors = () => {
        return fetch("http://localhost:8088/distributors?_embed=distributorNurseries&_embed=retailers")
        .then(res=>res.json())
        .then(setDistributors)
    }
    return (
        <DistributorContext.Provider value= {{distributors, getDistributors}}>
            {props.children}
        </DistributorContext.Provider>
    )
}