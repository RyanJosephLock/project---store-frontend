export interface Product {
    id: number;
    category: string;
    name: string;
    description: string;
    price: number;
    discount: number;
    image: string;
}

export interface CartProduct {
    productId: number;
    productQuantity: number;
}

export interface WishlistProduct {
    productId: number;
}