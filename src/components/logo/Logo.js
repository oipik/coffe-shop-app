import './logo.scss';

const Logo = (props) => {

    const logoBlack = props.isLogoBlack ? 'black' : null;

    return (
        <div className="logo__outer">
            <div className={`logo__container ${logoBlack}`}>
                <img className='logo__img' src={props.logo} alt="bean" />
            </div>
        </div>
    )
}

export default Logo;