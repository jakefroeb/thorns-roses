export const Distributor = ({distributor, matchingFns}) => {
    return (<>
                <h3>Distributor : {distributor.name}</h3>
                <h4>Flowers</h4>
                <ul>
                    {matchingFns.map(fnarray => fnarray.map(fn => <li key={fn.id}>flower: {fn.flower.color} {fn.flower.species}, price: {(fn.price * distributor.pricemarkup *100).toFixed(2)}</li>))}
                </ul>
                <h4>Retailers</h4>
                <ul>
                    {distributor.retailers.map(retailer => <li key={retailer.id}>{retailer.name}</li>)}
                </ul>
            </>
    )
}