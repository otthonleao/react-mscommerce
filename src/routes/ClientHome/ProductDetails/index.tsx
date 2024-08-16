import { useNavigate, useParams } from "react-router-dom";
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
    const navigate = useNavigate();

    const [product, setProduct] = useState<ProductDTO>();
    
    useEffect(() => {
        // Chamada da API Backend
        productService.findById(Number(params.productId)) // productId é o que vem da rota e o cast de number é pq tudo que vem do http é string
            .then(response => { // O que vai ser feito quando a resposta da Promnisse for retornado com sucesso
                console.log(response.data); // response.data Pega a lista que a promesse da API mandou como resposta
                setProduct(response.data);
        })
        .catch(error => {
            console.log(error.response.data);
            navigate("/calalog");
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

                    {/* Caso não queira renderizar o erro para outra página use esse ternário ao invés do de cima */}
                    {/* {
                        product
                        ? <ProductDetailsCard product={product} />
                        : <div>ERROR 404 - Código Inválido</div>
                    } */}

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