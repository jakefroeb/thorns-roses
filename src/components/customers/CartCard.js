export const CartCard = ({flower}) => (
    <>
        <div key={flower.flowerId}>{flower.color} {flower.species} {flower.amount} ${flower.price.toFixed(2)}</div>
    </>
)