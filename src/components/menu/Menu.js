import { NavLink } from 'react-router-dom';

import './menu.scss';

const Menu = (props) => {
    return (
        <div className='nav'>
            <img className='nav__img' src={props.logo} alt="logotype" />
            <MenuItem names={props.names} footer={props.isFooter} />
        </div>
    )
}

const MenuItem = ({ names, footer }) => {
    const color = footer ? 'nav__link--black' : null;

    const list = names.map(item => {
        return (
            <li className='nav__item'
                key={item.name}>
                <NavLink
                    className={`nav__link ${color}`}
                    to={`${item.src}`} end
                > {item.name} </NavLink>
            </li>
        )
    })

    return (
        <ul className="nav__list">
            {list}
        </ul>
    )
}

export default Menu;