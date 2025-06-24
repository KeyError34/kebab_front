import './Header.scss';
import logo from '../../assets/header_img/logo.svg';
import caretDown from '../../assets/header_img/caret-down.svg';
import { FiClock, FiSearch, FiShoppingCart } from 'react-icons/fi';

const Header = () => {
    return (
        <header className="header">
            <div className="header__left">
                <img src={logo} alt="Grillino Logo" className="header__logo" />
            </div>
            <nav className="header__nav">
                <ul>
                    <li className="header__nav-item">
                        Home <img src={caretDown} alt="caret down" className="header__arrow" />
                        <div className="header__dropdown">
                            {/* Здесь пункты меню Home */}
                        </div>
                    </li>
                    <li className="header__nav-item">
                        About <img src={caretDown} alt="caret down" className="header__arrow" />
                        <div className="header__dropdown">
                            {/* Здесь пункты меню About */}
                        </div>
                    </li>
                    <li className="header__nav-item">
                        Blog <img src={caretDown} alt="caret down" className="header__arrow" />
                        <div className="header__dropdown">
                            {/* Здесь пункты меню Blog */}
                        </div>
                    </li>
                    <li className="header__nav-item">
                        Pages <img src={caretDown} alt="caret down" className="header__arrow" />
                        <div className="header__dropdown">
                            {/* Здесь пункты меню Pages */}
                        </div>
                    </li>
                    <li className="header__nav-item">
                        Contact <img src={caretDown} alt="caret down" className="header__arrow" />
                        <div className="header__dropdown">
                            {/* Здесь пункты меню Contact */}
                        </div>
                    </li>
                </ul>
            </nav>
            <div className="header__right">
                <div className="header__call">
                    <span className="header__call-icon">
                        <span style={{ background: '#FAC898', borderRadius: '50%', width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <FiClock size={32} color="#fff" />
                        </span>
                    </span>
                    <div className="header__call-info">
                        <span className="header__call-text">Call for Order</span>
                        <span className="header__call-number">+869 526 212</span>
                    </div>
                </div>
                <div className="header__icon header__icon--search">
                    <FiSearch size={28} color="#FF9800" />
                </div>
                <div className="header__icon header__icon--cart">
                    <FiShoppingCart size={28} color="#FF9800" />

                </div>
            </div>
        </header>
    );
};

export default Header;
