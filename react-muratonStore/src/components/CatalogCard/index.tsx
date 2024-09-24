import './styles.css';
import { ProductDTO } from '../../models/product';
import { Link } from 'react-router-dom';

type Props = {
    product: ProductDTO;
}

export default function CatalodCard({ product }: Props) {

    return (
        <>
            <Link to={`/product-details/${product.id}`}>
                <div className="card__principal">
                    <div className="catalogo__card-top add__line-bottom">
                        <img src={product.imgUrl} alt={product.name} />
                    </div>
                    <div className="catalogo__card-bottom">
                        <h3>R$ {product.price.toFixed(2)}</h3>
                        <h4>{product.name}</h4>
                    </div>
                </div>
            </Link>

        </>
    )

}