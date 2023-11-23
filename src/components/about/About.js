import Logo from '../logo/Logo'
import { logoBlackFull } from '../../images/images';

import './about.scss';

const About = (props) => {

    const {src, title} = props;

    return (
        <section className="about about-coffee">
            <div className="about__items">
                <div className="about__item">
                    <img src={src} alt="img" />
                </div>
                <div className="about__item">
                    <h3 className="about__title">{title}</h3>
                    <Logo logo={logoBlackFull} isLogoBlack={true}/>
                    <p className='about__text'></p>
                    <p className='about__text'></p>
                </div>
            </div>
        </section>
    )
}

export default About;