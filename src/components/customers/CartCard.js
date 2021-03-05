export const CartCard = ({color, species, price, amount, flowerId}) => (
    <>
        {console.log(color, species,amount,price,flowerId)}
        <div key={flowerId}>{color} {species} {amount} {price}</div>
    </>
)