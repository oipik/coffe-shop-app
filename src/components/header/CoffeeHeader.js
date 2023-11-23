import Menu from '../menu/Menu';
import { logoWhite } from '../../images/images';

import './coffeeHeader.scss';

const CoffeeHeader = (props) => {
    return (
        <section className="header coffee-header">
        <div className="header__inner">
            <div className="header__navigation">
                <Menu logo={logoWhite} names={props.menu} />
            </div>
            <h1 className="header__title">Our Coffee</h1>
        </div>
    </section>
    )
}

export default CoffeeHeader;