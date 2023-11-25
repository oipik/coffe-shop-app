import { useState } from 'react';

import HeaderMain from '../headerMain/HeaderMain';
import AboutMain from '../aboutMain/AboutMain';
import OurBest from '../OurBest/OurBest';
import Footer from '../footer/Footer';

import CoffeeHeader from '../header/CoffeeHeader';
import About from '../about/About';
import Products from '../products/Products';
import SearchPanel from '../searchPanel/SearchPanel';
import Filter from '../filter/Filter';

import { img1, img2, img3, girlWithCoffee, product, Italy, smell } from '../../images/images';

import '../../reset.css'
import './app.scss';

function App() {

    const [products, setProducts] = useState(
        [
            { name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, src: product, alt: 'Brazil Coffee', id: 1 },
            { name: 'AROMISTICO Coffee 1 kg', country: 'Kenya', price: 25, src: product, alt: 'Kenya Coffee', id: 2 },
            { name: 'AROMISTICO Coffee 1 kg', country: 'Columbia', price: 20, src: product, alt: 'Columbia Coffee', id: 3 },
            { name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, src: product, alt: 'Brazil Coffee', id: 4 },
            { name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, src: product, alt: 'Brazil Coffee', id: 5 },
            { name: 'AROMISTICO Coffee 1 kg', country: 'Brazil', price: 6.99, src: product, alt: 'Brazil Coffee', id: 6 },
        ],
    )
    const [term, setTerm] = useState('');
    const [filter, setFilter] = useState('all');

    const menu = ['Coffee house', 'Our house', 'For your pleasure'];
    const cards = [
        { name: 'Solimo Coffee Beans 2 kg', src: img1, price: 10.73 },
        { name: 'Presto Coffee Beans 1 kg', src: img2, price: 15.99 },
        { name: 'AROMISTICO Coffee 1 kg', src: img3, price: 6.99 },
    ];

    function onUpdateSearch(term) {
        setTerm(term);
    }

    function onFilterSelect(filter) {
        setFilter(filter);
    }

    function searchCard(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.country.indexOf(term) > -1
        });
    }

    function filterPost(items, filter) {
        switch (filter) {
            case 'All':
                return items;
            case 'Brazil':
                return items.filter(item => item.country === 'Brazil');
            case 'Kenya':
                return items.filter(item => item.country === 'Kenya');
            case 'Columbia':
                return items.filter(item => item.country === 'Columbia');
            default:
                return items;
        }
    }

    const visibleData = filterPost(searchCard(products, term), filter);

    return (
        <>
            {/* <HeaderMain menu={menu}/>
            <AboutMain />
            <OurBest items={cards} />
            <Footer menu={menu} /> */}

            {/* <CoffeeHeader menu={menu} title={'Our Coffe'} clazz={'coffee-header'}/>
            <About
                clazz='coffee'
                src={girlWithCoffee}
                title="About our beans"
                text={[
                    'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',
                    "Afraid at highly months do things on at. Situation recommend objection do intention so questions.",
                    'As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.'
                ]}/>
            <div className="content">
                <div className="container">
                    <div className="content__property">
                        <SearchPanel onUpdateSearch={onUpdateSearch} />
                        <Filter onFilterSelect={onFilterSelect} />
                    </div>
                </div>
            </div>
            <Products products={visibleData} />
            <Footer menu={menu} /> */}

            {/* <CoffeeHeader menu={menu} title={'Our Coffee'} clazz={'italy-header'}/>
            <About
                clazz='italy'
                src={Italy}
                title="About it"
                text = {[
                    [<strong>Country:</strong>, ' Brasil'], 
                    [<strong>Description:</strong>, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."], 
                    [<strong>Price:</strong>, <span style={{fontSize: 24}}> 16.99$</span>]
                ]}/>
            <Footer menu={menu} /> */}

            <CoffeeHeader menu={menu} title={'For your pleasure'} clazz={'pleasure-header'} />
            <About
                clazz='pleasure'
                src={smell}
                title="About our goods"
                text = {[
                    'Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.',
                    "Afraid at highly months do things on at. Situation recommend objection do intention so questions.",
                    'As greatly removed calling pleased improve an. Last ask him cold feel met spot shy want. Children me laughing we prospect answered followed. At it went is song that held help face.'
                ]}/>
            <Products products={products} />
            <Footer menu={menu} />
        </>
    )
}



export default App;
