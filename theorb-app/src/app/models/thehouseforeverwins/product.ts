export interface Product {
    id: number,
    name: string,
    image: string,
    quantity: number,
}

export interface ProductDetail {
    id: number,
    name: string,
    image: string,
    quantity: number,
    retail_price: string,
    sku: number,
    sync_product_id: number,
    variant_id: number,
    warehouse_product_variant_id: number
}