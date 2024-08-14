import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { ProductDTO } from "../../models/product";
import './styles.css';

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

export default function ProductDetails() {

    return (
        <>
            <HeaderClient />

            <main>
                <section id="card__section" className="container">
                    <ProductDetailsCard product={ product }/>
                    <div className="card__btn-container">
                        <ButtonInverse />
                        <ButtonPrimary />
                    </div>

                </section>
            </main>
        </>
    )
}