export const Nursery = ({nursery, flowers, distributors}) => (
    <section className="nursery">
    {console.log(nursery,flowers,distributors)}
    <h3 className="nursery__name">{nursery.name}</h3>
    <ul>
        {flowers.map(f => (
            <li className="nursery__flower">Species: {f.flower.species} Color:{f.flower.color} Price{f.price}</li>
        ))}
    </ul>
    <ul>
        {distributors.map(d => (
            <li className="nursery__distributor">{d.distributorId}</li>
        ))}
    </ul>
</section>
)
