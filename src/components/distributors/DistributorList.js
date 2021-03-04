import { useContext, useEffect } from "react"
import { NurseryContext } from "../nurseries/NurseryProvider"
import { Distributor } from "./Distributor"
import { DistributorContext, DistributorProvider } from "./DistributorProvider"

export const DistributorList = () => {
    const {getFlowerNurseries, flowerNurseries} = useContext(NurseryContext)
    const {getDistributors, distributors} = useContext(DistributorContext)

    useEffect(()=>{
        getFlowerNurseries().then(getDistributors)
    },[])

    return (
        <>
        <h2>Distributors</h2>
        <div className="distributors">
            {distributors.map(distributor => {
                const matchingFns = distributor.distributorNurseries.map(dn => flowerNurseries.filter(fn => fn.nurseryId === dn.nurseryId))
                return <Distributor key= { distributor.id}
                                    distributor = {distributor}
                                    matchingFns = {matchingFns}/>
            })}
        </div>
        </>
    )

}