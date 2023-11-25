
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
                <div className="products__inner">
                    {elements}
                </div>
            </div>
        </section>
    )
}

const Product = ({ name, country, price, src, alt }) => {
    return (
        <div className="products__items">
            <img className="products__img"
                src={src}
                alt={alt} />
            <p className="products__text products__text--name">{name}</p>
            <p className="products__text products__text--country">{country}</p>
            <p className="products__text products__text--price">{price + '$'}</p>
        </div>
    );
}

export default Products;