import './styles.css';

export default function HeaderClient() {
    return (
        <header className="header__client">
            <nav className="container">
                <h1>Muraton Store</h1>
                <div className="navbar__right">
                    <div className="menu__itens-container">
                        <div className="menu__item">
                            <a href="#"><i className="fa-solid fa-cart-shopping"></i></a>
                        </div>
                    </div>
                    <div className="logged-user">
                        <a href="#"><i className="fa-regular fa-circle-user"></i> Login</a>
                    </div>
                </div>
            </nav>
        </header>
    );
}