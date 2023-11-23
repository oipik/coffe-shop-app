import Menu from '../menu/Menu';
import Logo from '../logo/Logo';

import { logoBlack, logoBlackFull } from '../../images/images';

import './footer.scss';

const Footer = (props) => {
    return (
        <footer className='footer'>
            <div className="footer__nav">
                <Menu logo={logoBlack} names={props.menu} isFooter={true} />
            </div>
            <Logo logo={logoBlackFull} isLogoBlack={true}/>
        </footer>
    )
}

export default Footer;