
import './products.scss'

const Products = ({ products }) => {

    const elements = products.map(item => {
        const { id, ...itemProps } = item;
        return (
            <Product
                key={id}
                {...itemProps} />
        )
    })

    return (
        <section className="products">
            <div className="container">
                <ul className="products__inner">
                    {elements}
                </ul>
            </div>
        </section>
    )
}

const Product = ({ name, country, price, src, alt }) => {
    return (
        <li className="products__items">
            <a href="#">
                <img className="products__img"
                    src={src}
                    alt={alt} />
                <p className="products__text products__text--name">{name}</p>
                <p className="products__text products__text--country">{country}</p>
                <p className="products__text products__text--price">{price + '$'}</p>
            </a>
        </li>
    );
}

export default Products;