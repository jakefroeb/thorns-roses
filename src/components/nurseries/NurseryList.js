import { useContext, useEffect } from "react"
import { Nursery } from "./Nursery"
import { NurseryContext } from "./NurseryProvider"

export const NurseryList = () =>{
    const {flowerNurseries, getFlowerNurseries, distributorNurseries, getDistributorNurseries, nurseries, getNurseries} = useContext(NurseryContext)

    useEffect(()=>{
        getFlowerNurseries()
        .then(getDistributorNurseries)
        .then(getNurseries)
    },[])

    return <>
               <div className="nurseries">
                    {nurseries.map(nursery => {
                        const tempFlowerNurseries = flowerNurseries.filter(fn => nursery.id === fn.nurseryId)
                        const tempDistributors = distributorNurseries.filter(dn => dn.nurseryId === nursery.id)
                        
                        return <Nursery key={nursery.id}
                                        nursery={nursery}
                                        flowers={tempFlowerNurseries}
                                        distributors={tempDistributors}/>
                                        
                    })}
                </div> 

    </>
}