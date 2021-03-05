import { useContext } from "react"
import { CustomerContext } from "../customers/CustomerProvider"

export const Retailer = ({distributor, matchingFns, retailer}) => {
    const {addCartItem} = useContext(CustomerContext)
    const purchaseFlower = (e) => {
        let flowerId = parseInt(e.target.value.split(",")[0])
        let price = parseFloat(e.target.value.split(",")[1])
        let cartObj = {
            customerId : parseInt(localStorage.getItem("thorns_customer")),
            flowerId : flowerId,
            price: price,
            retailerId : retailer.id
        }
        addCartItem(cartObj)
    }
    return (<>
                <h3>Retailer : {retailer.name}</h3>
                <h4>Flowers</h4>
                <ul>
                    {matchingFns.map(fnarray => fnarray.map(fn => {
                        let price = (fn.price * distributor.pricemarkup * retailer.pricemarkup).toFixed(2)
                    return <li key={fn.id}>flower: {fn.flower.color} {fn.flower.species}, price: {price}
                    <button onClick={purchaseFlower} id={fn.id} value={[fn.flower.id,price]} >purchase</button></li>}))}
                </ul>
                <h4>Distributor : {distributor.name}</h4>
                
            </>
    )
}