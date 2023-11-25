import { Link } from 'react-router-dom';

import Menu from '../menu/Menu';
import Logo from '../logo/Logo';

import { logoWhite, LogoWhiteFull } from '../../images/images';

import './header.scss'

const HeaderMain = (props) => {

    return (
        <section className="main-header">
            <div className="main-header__inner">
                <div className="main-header__navigation">
                    <Menu logo={logoWhite} names={props.menu} />
                </div>
                <h1 className="main-header__title">Everything You Love About Coffee</h1>
                <Logo logo={LogoWhiteFull} />
                <h2 className='main-header__subtitle'>We makes every day full of energy and taste</h2>
                <h2 className='main-header__subtitle main-header__subtitle--sec'>Want to try our beans?</h2>
                <div className='main-header__link-box'>
                    <Link className='main-header__btn' to='/coffee'>More</Link>
                </div>
            </div>
        </section>
    )
}

export default HeaderMain;
