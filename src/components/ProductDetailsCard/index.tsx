import { ProductDTO } from '../../models/product';
import ProductCategory from '../ProductCategory';
import './styles.css';

type Props = {
    product: ProductDTO;
}

export default function ProductDetailsCard({ product }: Props) {
    return (
        <>
            <div className="card__principal mb20">
                <div className="card__image add__line-bottom">
                    <img src={product.imgUrl} alt={product.name} />
                </div>
                <div className="card__product-details">
                    <h4>{product.name}</h4>
                    <h3>R$ {product.price.toFixed(2)}</h3>
                    <p>{product.description}</p>
                    <div className="card__category-container">
                        { // Renderizando uma coleção dinâmica
                            product.categories.map(item => (
                                <ProductCategory key={item.id} name={item.name} /> // Toda vez que utilizar o map é obrigatório colocar o atributo 'key'
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}