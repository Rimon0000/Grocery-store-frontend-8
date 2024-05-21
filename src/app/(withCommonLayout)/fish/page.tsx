import Filtering from '@/components/Filtering/Filtering';
import PopularProductsCard from '@/components/ui/PopularProductsCard';
import { TProduct } from '@/types';
import { Checkbox } from '@nextui-org/checkbox';
import {Select, SelectItem} from "@nextui-org/react";

const AllProducts = async({searchParams}) => {
    let products = [];

    // For get all data or filter by category
    if (!searchParams || !searchParams.category) {
        const res = await fetch("http://localhost:5000/fish");
        products = await res.json();
    } else {
        const filter = await fetch(`http://localhost:5000/fish/${searchParams.category}`);
        products = await filter.json();
    }

    return (
        <div className='w-[90%] mx-auto'>
            <Filtering products={products.data}/>
        </div>
    );
};

export default AllProducts;