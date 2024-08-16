import { useEffect, useState } from 'react';
import ButtonNextPage from '../../../components/ButtonNextPage';
import CatalodCard from '../../../components/CatalogCard';
import SearchBar from '../../../components/SearchBar';
// import * as productService from '../../../services/product-service';
import './styles.css';
import { ProductDTO } from '../../../models/product';
import axios from 'axios';

export default function Catalog() {

    // O useState inicia uma lista vazia do DTO nesse caso
    const [products, setProducts] = useState<ProductDTO[]>([]);

    useEffect(() => {
        axios.get("http://localhost:8080/products?size=12") // O resultado dessa requisição é uma Promisse, então usamos o .then pra pegar esse resultado
            .then(response => { // O que vai ser feito quando a resposta da Promnisse for retornado com sucesso
                setProducts(response.data.content);
            })
    }, []);

    return (
        <>
            <main>
                <section id="catalogo__section" className="container">
                    <SearchBar />

                    {/* <!-- LISTAGEM DE CARDS --> */}
                    <div className="catalogo__cards-grid mb20">
                        {
                            products.map(
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