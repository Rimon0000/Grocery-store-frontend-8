export type TFlashSale = {
    _id: string
    image: string
    title: string
    price: number
    discountPrice: number
    discountPercent: number
}

export type TCategory = {
    _id: string;
    image: string;
    category: string;
}

export type TProduct = {
    _id: string;
    image: string
    title: string
    category: string
    price: number
    discountPrice: number
    discountPercent: number
    ratings: number
    description: string
}

