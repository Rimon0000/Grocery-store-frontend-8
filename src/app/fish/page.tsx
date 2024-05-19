import PopularProductsCard from '@/components/ui/PopularProductsCard';
import { TProduct } from '@/types';
import { Checkbox } from '@nextui-org/checkbox';
import {Select, SelectItem} from "@nextui-org/react";

const AllProducts = async() => {
    const res = await fetch("http://localhost:5000/fish")
    const products = await res.json()

    return (
        <div className='w-[90%] mx-auto grid grid-cols-12 gap-5 mt-8'>
            <div className='col-span-3 mt-2'>
                <div>
                    <div className='border p-5'>
                    <h1 className='text-lg font-semibold mb-2'>price Range</h1>
                    <Checkbox defaultSelected color="default">$00.00 - $200.00</Checkbox>
                    <Checkbox defaultSelected color="default">$200.00 - $400.00</Checkbox>
                    <Checkbox defaultSelected color="default">$400.00 - $600.00</Checkbox>
                    <Checkbox defaultSelected color="default">$600.00 - $800.00</Checkbox>
                    </div>
                </div>
                <div className='border p-5 my-8'>
                    <h1 className='text-lg font-semibold mb-2'>Category/ Brands</h1>
                    <Checkbox defaultSelected color="default" className='block'>Freshwater Fish</Checkbox>
                    <Checkbox defaultSelected color="default" className='block'>Saltwater Fish</Checkbox>
                    <Checkbox defaultSelected color="default" className='block'>Shellfish</Checkbox>
                    <Checkbox defaultSelected color="default" className='block'>Crustaceans</Checkbox>
                    <Checkbox defaultSelected color="default" className='block'>Smoked Fish</Checkbox>
                    <Checkbox defaultSelected color="default" className='block'>Seafood</Checkbox>
                </div>
                <div className='border p-5'>
                    <h1 className='text-lg font-semibold mb-2'>Ratings</h1>
                    <Checkbox defaultSelected color="default" className='block'>1 Star</Checkbox>
                    <Checkbox defaultSelected color="default" className='block'>2 Star</Checkbox>
                    <Checkbox defaultSelected color="default" className='block'>3 Star</Checkbox>
                    <Checkbox defaultSelected color="default" className='block'>4 Star</Checkbox>
                    <Checkbox defaultSelected color="default" className='block'>5 Star</Checkbox>
                </div>
            </div>
            
            <div className='col-span-9'>
                <h1 className='text-4xl font-bold'>Our Collection Of Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-8">
                    {
                        products?.data?.map((product : TProduct) => <PopularProductsCard key={product._id} product={product}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllProducts;