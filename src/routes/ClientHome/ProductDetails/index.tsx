import { useParams } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from '../../../services/product-service';
import './styles.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";

export default function ProductDetails() {

    const params = useParams();

    const [product, setProduct] = useState<ProductDTO>();
    
    useEffect(() => {
        // Chamada da API Backend
        productService.findById(Number(params.productId)) // productId é o que vem da rota e o cast de number é pq tudo que vem do http é string
            .then(response => { // O que vai ser feito quando a resposta da Promnisse for retornado com sucesso
                console.log(response.data); // response.data Pega a lista que a promesse da API mandou como resposta
                setProduct(response.data);
        });

        // const prod = productService.findById(Number(params.productId));
        // setProduct(prod);
    }, []);



    return (
        <>
            <main>
                <section id="card__section" className="container">
                    {
                        product && // Só vai renderizar se o objeto product não for undefined
                        <ProductDetailsCard product={product} />
                    }

                    <div className="general-mt20 ">
                        <Link to="/" >
                            <ButtonInverse text="Início" />
                        </Link>
                        <Link to="/">
                            <ButtonPrimary text="Comprar" />
                        </Link>
                    </div>

                </section>
            </main>
        </>
    )
}