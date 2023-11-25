import Logo from '../logo/Logo'

import { logoBlackFull } from '../../images/images';

import './about.scss';

const About = (props) => {

    const { src, title, clazz, text } = props;

    return (
        <section className={`about ${clazz}`}>
            <div className="container">
                <div className="about__items">
                    <div className="about__item">
                        <img src={src} alt="img" />
                    </div>
                    <div className="about__item">
                        <h3 className="about__title">{title}</h3>
                        <Logo logo={logoBlackFull} isLogoBlack={true} />
                        <div className="about__box-text">
                            <p className='about__text'>{text[0]}</p>
                            <p className='about__text'>{text[1]}</p>
                            <p className='about__text'>{text[2]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;