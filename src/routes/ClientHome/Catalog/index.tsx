import ButtonNextPage from '../../../components/ButtonNextPage';
import CatalodCard from '../../../components/CatalogCard';
import SearchBar from '../../../components/SearchBar';
import * as productService from '../../../services/product-service';
import './styles.css'

export default function Catalog() {
    return (
        <>
            <main>
                <section id="catalogo__section" className="container">
                    <SearchBar />

                    {/* <!-- LISTAGEM DE CARDS --> */}
                    <div className="catalogo__cards-grid mb20">
                        {
                            productService.findAll().map(
                                product => <CatalodCard key={product.id} product={product}/>
                            )
                        }                     
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