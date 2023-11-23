
import './menu.scss';

const Menu = (props) => {
    return (
        <div className='nav'>
            <img className='nav__img' src={props.logo} alt="logotype" />
            <MenuItem names={props.names} footer={props.isFooter}/>
        </div>
    )
}

const MenuItem = ({ names, footer }) => {
    const list = names.map(name => {
        return (
            <li className='nav__item'
                key={name}>
                <a className='nav__link' style={{color: footer ? 'black' : 'white'}} href="/#"> {name} </a>
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