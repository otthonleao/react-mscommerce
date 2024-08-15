import { useParams } from "react-router-dom";
import ButtonInverse from "../../../components/ButtonInverse";
import ButtonPrimary from "../../../components/ButtonPrimary";
import ProductDetailsCard from "../../../components/ProductDetailsCard";
import * as productService from '../../../services/product-service';
import './styles.css';
import { Link } from "react-router-dom";

export default function ProductDetails() {

    const params = useParams();

    const product = productService.findById(Number(params.productId));

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