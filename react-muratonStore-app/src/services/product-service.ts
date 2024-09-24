import axios from "axios";
import { BASE_URL } from "../utils/system";
// import { ProductDTO } from "../models/product";

export function findAll() {
    // O resultado dessa requisição é uma Promisse, então usamos o .then pra pegar esse resultado
    return axios.get(`${BASE_URL}/products?size=12`);
}

export function findById(id: number) {
    return axios.get(`${BASE_URL}/products/${id}`);
}

/*
// Dados de quando não a API do backend
export function findAll(): ProductDTO[] {
    return products;
}
export function findById(id: number) : ProductDTO | undefined {
    return products.find(x => x.id === id);
}

let products : ProductDTO[] = [
    {
        "id": 1,
        "name": "iPhone 15 PRO - 256GB - Purple",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde assumenda neque corrupti nesciunt.",
        "imgUrl": "https://imgs.casasbahia.com.br/55054472/1g.jpg",
        "price": 8699.00,
        "categories": [
            { "id": 2, "name": "Telefonia" },
            { "id": 3, "name": "Celulares" },
            { "id": 4, "name": "Apple" }
        ]
    },
    {
        "id": 2,
        "name": "Samsung Galaxy S23 - 128GB - Black",
        "description": "Eius ut aut provident sapiente suscipit unde? Similique in repellendus ex libero vero veritatis quaerat impedit accusamus.",
        "imgUrl": "https://img.freepik.com/psd-premium/samsung-galaxy-s23-mockup-vista-frontal_1332-54971.jpg",
        "price": 5499.00,
        "categories": [
            { "id": 2, "name": "Telefonia" },
            { "id": 3, "name": "Celulares" },
            { "id": 5, "name": "Samsung" }
        ]
    },
    {
        "id": 3,
        "name": "Google Pixel 7 - 128GB - White",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates fugit culpa iure soluta obcaecati unde.",
        "imgUrl": "https://img.freepik.com/free-psd/google-pixel-7-pro-mockup_1332-60682.jpg",
        "price": 4999.00,
        "categories": [
            { "id": 2, "name": "Telefonia" },
            { "id": 3, "name": "Celulares" },
            { "id": 6, "name": "Google" }
        ]
    },
    {
        "id": 4,
        "name": "Xiaomi Mi 13 - 256GB - Blue",
        "description": "Magni quaerat pariatur cum veniam error quos delectus vitae dolorem quod, non praesentium veritatis.",
        "imgUrl": "https://img.freepik.com/vetores-premium/ilustracao-em-vetor-realista-smartphone-na-frente-e-atras_174496-1026.jpg",
        "price": 4799.00,
        "categories": [
            { "id": 2, "name": "Telefonia" },
            { "id": 3, "name": "Celulares" },
            { "id": 7, "name": "Xiaomi" }
        ]
    },
    {
        "id": 5,
        "name": "OnePlus 11 - 128GB - Green",
        "description": "Unde assumenda neque corrupti nesciunt. Eius ut aut provident sapiente suscipit unde.",
        "imgUrl": "https://img.freepik.com/premium-psd/oneplus-11-mockup-front-back-view-02_1332-55717.jpg",
        "price": 4599.00,
        "categories": [
            { "id": 2, "name": "Telefonia" },
            { "id": 3, "name": "Celulares" },
            { "id": 8, "name": "OnePlus" }
        ]
    },
    {
        "id": 6,
        "name": "Sony Xperia 1 IV - 512GB - Black",
        "description": "Similique in repellendus ex libero vero veritatis quaerat impedit accusamus.",
        "imgUrl": "https://images.tcdn.com.br/img/img_prod/625110/180_sony_xperia_1_v_256gb_12gb_ram_oled_48mp_black_6327_2_e311b95579684b07ffe90b3f03cbaeaa.jpg",
        "price": 6299.00,
        "categories": [
            { "id": 2, "name": "Telefonia" },
            { "id": 3, "name": "Celulares" },
            { "id": 9, "name": "Sony" }
        ]
    },
    {
        "id": 7,
        "name": "Huawei P60 Pro - 256GB - White",
        "description": "Voluptates fugit culpa iure soluta obcaecati unde magni quaerat pariatur.",
        "imgUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdFyZHCrVL2Kpz7jcsKLwfU4Iy5hQQ8K3K0g&s",
        "price": 5099.00,
        "categories": [
            { "id": 2, "name": "Telefonia" },
            { "id": 3, "name": "Celulares" },
            { "id": 10, "name": "Huawei" }
        ]
    },
    {
        "id": 8,
        "name": "Motorola Edge 40 Pro - 256GB - Black",
        "description": "Cum veniam error quos delectus vitae dolorem quod, non praesentium veritatis ipsum.",
        "imgUrl": "https://gazin-marketplace.s3.amazonaws.com/midias/imagens/2023/11/smartphone-motorola-edge-40-neo-5g-655-octa-core-256gb-8gb-camera-dupla-142311350959.jpg",
        "price": 4799.00,
        "categories": [
            { "id": 2, "name": "Telefonia" },
            { "id": 3, "name": "Celulares" },
            { "id": 11, "name": "Motorola" }
        ]
    },
    {
        "id": 9,
        "name": "Oppo Find X6 Pro - 512GB - Orange",
        "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde assumenda neque corrupti nesciunt.",
        "imgUrl": "https://img.mobgsm.com/pictures/oppo/oppo-find-x6-pro-1.webp",
        "price": 5999.00,
        "categories": [
            { "id": 2, "name": "Telefonia" },
            { "id": 3, "name": "Celulares" },
            { "id": 12, "name": "Oppo" }
        ]
    },
    {
        "id": 10,
        "name": "Realme GT3 - 256GB - Green",
        "description": "Eius ut aut provident sapiente suscipit unde? Similique in repellendus ex libero vero veritatis quaerat impedit accusamus.",
        "imgUrl": "https://br.celulares.com/fotos/realme-gt3-96814-g-alt.jpg",
        "price": 4499.00,
        "categories": [
            { "id": 2, "name": "Telefonia" },
            { "id": 3, "name": "Celulares" },
            { "id": 13, "name": "Realme" }
        ]
    },
    {
        "id": 11,
        "name": "Asus ROG Phone 7 - 512GB - Black",
        "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates fugit culpa iure soluta obcaecati unde.",
        "imgUrl": "https://http2.mlstatic.com/D_NQ_NP_852397-MLB75714678989_042024-O.webp",
        "price": 6999.00,
        "categories": [
            { "id": 2, "name": "Telefonia" },
            { "id": 3, "name": "Celulares" },
            { "id": 14, "name": "Asus" }
        ]
    },
    {
        "id": 12,
        "name": "Nokia X30 - 256GB - Blue",
        "description": "Magni quaerat pariatur cum veniam error quos delectus vitae dolorem quod, non praesentium veritatis.",
        "imgUrl": "https://m.media-amazon.com/images/I/215lIIkByVL._AC_UF894,1000_QL80_.jpg",
        "price": 3599.00,
        "categories": [
            { "id": 2, "name": "Telefonia" },
            { "id": 3, "name": "Celulares" },
            { "id": 15, "name": "Nokia" }
        ]
    },
    {
        "id": 13,
        "name": "Vivo X90 Pro - 256GB - Black",
        "description": "Unde assumenda neque corrupti nesciunt. Eius ut aut provident sapiente suscipit unde.",
        "imgUrl": "https://www.notebookcheck.info/fileadmin/_processed_/7/8/csm_20230219_100732_f762bf322a.jpg",
        "price": 5499.00,
        "categories": [
            { "id": 2, "name": "Telefonia" },
            { "id": 3, "name": "Celulares" },
            { "id": 16, "name": "Vivo" }
        ]
    },
    {
        "id": 14,
        "name": "ZTE Axon 40 Ultra - 256GB - Gray",
        "description": "Similique in repellendus ex libero vero veritatis quaerat impedit accusamus.",
        "imgUrl": "https://ae01.alicdn.com/kf/S2d3783c38dc94732ab9fe96e39332a66G/ZTE-Axon-40-Ultra-5G-Smartphone-Vers-o-CN-6-8-polegadas-120Hz-2480x1116-OLED-5000mAh.jpg",
        "price": 4799.00,
        "categories": [
            { "id": 2, "name": "Telefonia" },
            { "id": 3, "name": "Celulares" },
            { "id": 17, "name": "ZTE" }
        ]
    }
]
*/
