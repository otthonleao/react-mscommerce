import './styles.css';
import img__iphone from '../../assets/iphone.png';

export default function CatalodCard() {

    return (
        <>
            <div className="card__principal">
                <div className="catalogo__card-top add__line-bottom">
                    <img src={img__iphone} alt="Computer" />
                </div>
                <div className="catalogo__card-bottom">
                    <h3>R$ 5.000,00</h3>
                    <h4>Notebook ASUS Vivobook Go 15, Intel Core i3 N305, 8GB, 512GB SSD, W11 Home, Tela 15.6" FHD, Cool Silver - E1504GA-NJ435W</h4>
                </div>
            </div>
        </>
    )

}