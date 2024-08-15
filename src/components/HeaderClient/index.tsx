import { Link } from 'react-router-dom';
import './styles.css';

export default function HeaderClient() {
    return (
        <header className="header__client">
            <nav className="container">
                <Link to="/">
                    <h1>Muraton Store</h1>
                </Link>

                <div className="navbar__right">
                    <div className="menu__itens-container">
                        <div className="menu__item">
                            <Link to="/cat" >
                                <i className="fa-solid fa-cart-shopping"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="logged-user">
                        <Link to="/login">
                            <i className="fa-regular fa-circle-user"></i> Login
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}