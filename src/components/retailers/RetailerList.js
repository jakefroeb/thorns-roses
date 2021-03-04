import { useContext, useEffect } from "react"
import { DistributorContext } from "../distributors/DistributorProvider"
import { NurseryContext } from "../nurseries/NurseryProvider"
import { Retailer } from "./Retailer"

export const RetailerList = () => {
    const {distributors, getDistributors} = useContext(DistributorContext)
    const {flowerNurseries, getFlowerNurseries} = useContext(NurseryContext)

    useEffect(()=> {
        getDistributors().then(getFlowerNurseries)
    },[])

    return (
        <>
            <h2>Retailers</h2>
                <div className="retailers">
                    {distributors.map(distributor => {
                        const matchingFns = distributor.distributorNurseries.map(dn => flowerNurseries.filter(fn => fn.nurseryId === dn.nurseryId))
                        return distributor.retailers.map(retailer => <Retailer key= { retailer.id}
                            retailer = {retailer}
                            distributor = {distributor}
                            matchingFns = {matchingFns}/> )
                        
                    })}
                </div>
        </>
    )
}