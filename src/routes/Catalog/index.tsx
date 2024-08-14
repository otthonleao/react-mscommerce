import HeaderClient from '../../components/HeaderClient'
import img__iphone from '../../assets/iphone.png';
import './styles.css'
import SearchBar from '../../components/SearchBar';
import CatalodCard from '../../components/CatalogCard';
import ButtonNextPage from '../../components/ButtonNextPage';

export default function Catalog() {
    return (
        <>
        <HeaderClient />
            <main>
                <section id="catalogo__section" className="container">
                    <SearchBar />

                    {/* <!-- LISTAGEM DE CARDS --> */}
                    <div className="catalogo__cards-grid mb20">
                        <CatalodCard />
                        <CatalodCard />
                        <CatalodCard />
                        <CatalodCard />
                        <CatalodCard />
                        <CatalodCard />
                        <CatalodCard />
                        <CatalodCard />
                        <CatalodCard />
                        <CatalodCard />
                        <CatalodCard />
                        
                    </div>

                    {/* <!-- CARREGAR MAIS --> */}
                    <div>
                        <ButtonNextPage />
                    </div>
                </section>
            </main>
        </>
    );
}