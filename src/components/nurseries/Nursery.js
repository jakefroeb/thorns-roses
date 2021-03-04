export const Nursery = ({nursery, flowers, distributors}) => (
    <section className="nursery">
    <h3 className="nursery__name">{nursery.name}</h3>
    <ul>
        {flowers.map(f => (
            <li key={f.id} className="nursery__flower">Species: {f.flower.species}, Color: {f.flower.color}, Price: {f.price}</li>
        ))}
    </ul>
    <ul>
        {distributors.map(d => (
            <li key={d.id} className="nursery__distributor">Distributor: {d.distributor.name}</li>
        ))}
    </ul>
</section>
)
