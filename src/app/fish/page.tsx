import Filtering from '@/components/Filtering/Filtering';
import PopularProductsCard from '@/components/ui/PopularProductsCard';
import { TProduct } from '@/types';
import { Checkbox } from '@nextui-org/checkbox';
import {Select, SelectItem} from "@nextui-org/react";

const AllProducts = async() => {
    const res = await fetch("http://localhost:5000/fish")
    const products = await res.json()

    return (
        <div className='w-[90%] mx-auto'>
            <Filtering products={products.data}/>
        </div>
    );
};

export default AllProducts;