import ButtonNextPage from '../../../components/ButtonNextPage';
import CatalodCard from '../../../components/CatalogCard';
import SearchBar from '../../../components/SearchBar';
import { ProductDTO } from '../../../models/product';
import './styles.css'


const product: ProductDTO = {
    id: 2,
    name: "iPhone 15 - 256GB - Purple",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde assumenda neque corrupti nesciunt. Eius ut aut provident sapiente suscipit unde? Similique in repellendus ex libero vero veritatis quaerat impedit accusamus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates fugit culpa iure soluta obcaecati unde magni quaerat pariatur cum veniam error quos delectus vitae dolorem quod, non praesentium veritatis ipsum!",
    imgUrl: "https://img.freepik.com/fotos-premium/iphone-15-roxo_902521-6.jpg",
    price: 5999.00,
    categories: [
        {
            id: 2,
            name: "Telefonia"
        },
        {
            id: 3,
            name: "Celulares"
        },
        {
            id: 4,
            name: "Apple"
        },
    ]
}

export default function Catalog() {
    return (
        <>
            <main>
                <section id="catalogo__section" className="container">
                    <SearchBar />

                    {/* <!-- LISTAGEM DE CARDS --> */}
                    <div className="catalogo__cards-grid mb20">
                        <CatalodCard product={product}/>
                        <CatalodCard product={product}/>
                        <CatalodCard product={product}/>
                        <CatalodCard product={product}/>
                        <CatalodCard product={product}/>
                        <CatalodCard product={product}/>
                        <CatalodCard product={product}/>
                        <CatalodCard product={product}/>
                        <CatalodCard product={product}/>
                        <CatalodCard product={product}/>                        
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