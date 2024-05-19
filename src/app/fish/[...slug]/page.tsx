import { useEffect, useState } from 'react';
import { Checkbox } from '@nextui-org/checkbox';
import { Select, SelectItem } from "@nextui-org/react";
import PopularProductsCard from '@/components/ui/PopularProductsCard';
import { TProduct } from '@/types';

const AllProducts = ({ params, searchParams }) => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedFilters, setSelectedFilters] = useState({
        priceRange: [],
        categories: [],
        ratings: []
    });

    const fetchProducts = async () => {
        const res = await fetch("http://localhost:5000/fish");
        const data = await res.json();
        setProducts(data.data);
        setFilteredProducts(data.data);
    };

    const handleFilter = async () => {
        const res = await fetch("http://localhost:5000/filter", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(selectedFilters)
        });
        const data = await res.json();
        setFilteredProducts(data.data);
    };

    const handleCheckboxChange = (value, category) => {
        const updatedFilters = { ...selectedFilters };
        if (updatedFilters[category].includes(value)) {
            updatedFilters[category] = updatedFilters[category].filter(item => item !== value);
        } else {
            updatedFilters[category] = [...updatedFilters[category], value];
        }
        setSelectedFilters(updatedFilters);
    };

    // Fetch products when the component mounts
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <div className='w-[90%] mx-auto grid grid-cols-12 gap-5 mt-8'>
            {/* Filter options */}
            <div className='col-span-3 mt-2'>
                {/* Price Range */}
                <div className='border p-5'>
                    <h1 className='text-lg font-semibold mb-2'>Price Range</h1>
                    {['$00.00 - $200.00', '$200.00 - $400.00', '$400.00 - $600.00', '$600.00 - $800.00', '$800.00 - $1000.00'].map((range, index) => (
                        <Checkbox key={index} color="default" onChange={() => handleCheckboxChange(range, 'priceRange')}>
                            {range}
                        </Checkbox>
                    ))}
                </div>
                {/* Categories */}
                <div className='border p-5 my-8'>
                    <h1 className='text-lg font-semibold mb-2'>Category/Brands</h1>
                    {['Freshwater Fish', 'Saltwater Fish', 'Shellfish', 'Crustaceans', 'Smoked Fish', 'Seafood'].map((category, index) => (
                        <Checkbox key={index} color="default" onChange={() => handleCheckboxChange(category, 'categories')}>
                            {category}
                        </Checkbox>
                    ))}
                </div>
                {/* Ratings */}
                <div className='border p-5'>
                    <h1 className='text-lg font-semibold mb-2'>Ratings</h1>
                    {[1, 2, 3, 4, 5].map((rating, index) => (
                        <Checkbox key={index} color="default" onChange={() => handleCheckboxChange(rating, 'ratings')}>
                            {`${rating} Star`}
                        </Checkbox>
                    ))}
                </div>
                {/* Apply Filter Button */}
                <button onClick={handleFilter} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                    Apply Filter
                </button>
            </div>
            {/* Product Display */}
            <div className='col-span-9'>
                <h1 className='text-4xl font-bold'>Our Collection Of Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
                    {filteredProducts.map((product : TProduct) => (
                        <PopularProductsCard key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProducts;
