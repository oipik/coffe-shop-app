import Menu from '../menu/Menu';
import { logoWhite } from '../../images/images';

import './coffeeHeader.scss';

const CoffeeHeader = ({ menu, title, clazz }) => {

    return (
        <section className={`header ${clazz}`}>
            <div className="header__inner">
                <div className="header__navigation">
                    <Menu logo={logoWhite} names={menu} />
                </div>
                <h1 className="header__title">{title}</h1>
            </div>
        </section>
    )
}

export default CoffeeHeader;