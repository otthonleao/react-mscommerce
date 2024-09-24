import { CategotyDTO } from "./category";

export type ProductDTO = {
    id: number;
    name: string;
    description: string;
    price: number;
    imgUrl: string;
    categories: CategotyDTO[];
}