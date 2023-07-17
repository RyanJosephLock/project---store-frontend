export interface Product {
    id: number;
    category: string;
    name: string;
    description: string;
    price: number;
    discount: number;
    image: string;
    quantity?: number;
}
