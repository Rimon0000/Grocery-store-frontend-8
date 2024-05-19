"use client"
import { TProduct } from "@/types";
import { Checkbox } from "@nextui-org/checkbox";
import PopularProductsCard from "../ui/PopularProductsCard";
import { useEffect, useState } from "react";

const Filtering = ({ products }: {products: TProduct[]}) => {
    const [filteredProducts, setFilteredProducts] = useState<TProduct[]>([]);

    useEffect(() => {
        setFilteredProducts(products);
    }, [products]);

    const handleCheckboxChange = (filterType: string, value: string) => {
        const filtered = products.filter(product => {
            switch (filterType) {
                case 'category':
                    return product.category === value;
                case 'ratings':
                    const rating = parseFloat(value);
                    return product.ratings >= rating && product.ratings < rating + 1;
                case 'price':
                    const priceFiltered = checkPriceRange(product.price, value);
                    return priceFiltered;
                default:
                    return true;
            }
        });
        setFilteredProducts(filtered);
    };
    
    const checkPriceRange = (price: number, range: string) => {
        const [min, max] = range.split('-').map(range => parseFloat(range.trim()));
        return price >= min && price <= max;
    };


    return (
        <div className='grid lg:grid-cols-12 sm:grid-cols-12 gap-5 mt-8'>
            <div className='lg:col-span-3 sm:col-span-6 mt-2'>
                <div>
                    <div className='border p-5'>
                        <h1 className='text-lg font-semibold mb-2'>Price Range</h1>
                        {['0 - 200', '200 - 400', '400 - 600', '600 - 800', '800 - 1000'].map((range, idx) => (
                            <Checkbox className="block" key={idx} color="default" onChange={() => handleCheckboxChange('price', range)}>
                                {`$${range}`}
                            </Checkbox>
                        ))}
                    </div>
                </div>
                <div className='border p-5 my-8'>
                    <h1 className='text-lg font-semibold mb-2'>Category/ Brands</h1>
                    {['Freshwater Fish', 'Saltwater Fish', 'Shellfish', 'Crustaceans', 'Smoked Fish', 'Seafood'].map((cat, idx) => (
                        <Checkbox className="block" key={idx} color="default" onChange={() => handleCheckboxChange('category', cat)}>
                            {cat}
                        </Checkbox>
                    ))}
                </div>
                <div className='border p-5'>
                    <h1 className='text-lg font-semibold mb-2'>Ratings</h1>
                    {[1, 2, 3, 4, 5].map((rating, idx) => (
                        <Checkbox className="block" key={idx} color="default" onChange={() => handleCheckboxChange('ratings', String(rating))}>
                            {`${rating} Star`}
                        </Checkbox>
                    ))}
                </div>
            </div>

            <div className='lg:col-span-9 sm:col-span-6'>
                <h1 className='text-4xl font-bold'>Our Collection Of Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
                    {filteredProducts.map((product: TProduct) => <PopularProductsCard key={product._id} product={product} />)}
                </div>
            </div>
        </div>
    );
};

export default Filtering;
