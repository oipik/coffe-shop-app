import Menu from '../menu/Menu';
import Logo from '../logo/Logo';

import {logoWhite, LogoWhiteFull} from '../../images/images';

import './header.scss'

const HeaderMain = (props) => {

    return (
        <section className="header">
            <div className="header__inner">
                <div className="header__navigation">
                    <Menu logo={logoWhite} names={props.menu} />
                </div>
                <h1 className="header__title">Everything You Love About Coffee</h1>
                <Logo logo={LogoWhiteFull} />
                <h2 className='header__subtitle'>We makes every day full of energy and taste</h2>
                <h2 className='header__subtitle header__subtitle--sec'>Want to try our beans?</h2>
                <button className='header__btn'>More</button>
            </div>
        </section>
    )
}

export default HeaderMain;
