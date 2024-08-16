import { useParams } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
// import * as productService from '../../../services/product-service';
import './styles.css';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import axios from "axios";

export default function ProductDetails() {

    const params = useParams();

    const [product, setProduct] = useState<ProductDTO>();
    
    useEffect(() => {
        // Chamada da API Backend
        axios.get(`http://localhost:8080/products/${params.productId}`) // O resultado dessa requisição é uma Promisse, então usamos o .then pra pegar esse resultado
            // O que vai ser feito quando a resposta da Promnisse for retornado com sucesso
            .then(response => { 
                // response.data Pega a lista que a promesse da API mandou como resposta
                console.log(response.data);
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