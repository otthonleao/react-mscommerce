import './styles.css';

export default function SearchBar() {
    return (
        <>
            <form className="search-bar">
                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                <input type="text" placeholder="Nome do Produto" />
                <button type="reset"><i className="fa-solid fa-xmark"></i></button>
            </form>
        </>
    )
}