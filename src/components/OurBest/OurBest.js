import './ourbest.scss';

const OurBest = (props) => {
    return (
        <section className='ourbest'>
            <div className="ourbest__inner">
                <h4 className="ourbest__title">Our best</h4>
                <Items items={props.items} />
            </div>
        </section>
    )
}

const Items = ({ items }) => {
    const list = items.map((item, i) => {
        return (
            <li className="ourbest__item" key={i}>
                <img src={item.src} alt={item.name} />
                <p className='ourbest__name'>{item.name}</p>
                <p className='ourbest__price'>{item.price}$</p>
            </li>
        )
    })

    return (
        <ul className='ourbest__list'>
            {list}
        </ul>
    )
}

export default OurBest;