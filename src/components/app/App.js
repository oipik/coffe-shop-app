import HeaderMain from '../headerMain/HeaderMain';
import AboutMain from '../aboutMain/AboutMain';
import OurBest from '../OurBest/OurBest';
import Footer from '../footer/Footer';

import CoffeeHeader from '../header/CoffeeHeader';
import About from '../about/About';

import { img1, img2, img3, girlWithCoffe } from '../../images/images';

import '../../reset.css'
import './app.scss';

function App() {

    const menu = ['Coffee house', 'Our house', 'For your pleasure'];
    const ourBest = [
        { name: 'Solimo Coffee Beans 2 kg', src: img1, price: 10.73 },
        { name: 'Presto Coffee Beans 1 kg', src: img2, price: 15.99 },
        { name: 'AROMISTICO Coffee 1 kg', src: img3, price: 6.99 },
    ];

    return (
        <>
            {/* <HeaderMain menu={menu}/>
            <AboutMain />
            <OurBest items={ourBest} />
            <Footer menu={menu} /> */}
            <CoffeeHeader menu={menu} />
            <About
                src={girlWithCoffe}
                title="About our beans"
                 />
        </>
    )
}



export default App;
