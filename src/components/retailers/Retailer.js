export const Retailer = ({distributor, matchingFns, retailer}) => {
    return (<>
                <h3>Retailer : {retailer.name}</h3>
                <h4>Flowers</h4>
                <ul>
                    {matchingFns.map(fnarray => fnarray.map(fn => <li key={fn.id}>flower: {fn.flower.color} {fn.flower.species}, price: {(fn.price * distributor.pricemarkup * retailer.pricemarkup).toFixed(2)}</li>))}
                </ul>
                <h4>Distributor : {distributor.name}</h4>
                
            </>
    )
}