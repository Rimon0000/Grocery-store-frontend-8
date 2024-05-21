import AllProducts from '@/app/(withdashboardLayout)/dashboard/fish/page';
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import Image from 'next/image';
import { Star } from 'lucide-react';
import { TProduct } from '@/types';

const fetchProductsData = async() => {
    const res = await fetch("http://localhost:5000/fish");
        const products = await res.json();
        console.log(products);

        
    return (
        <Table aria-label="Our all Products">
        <TableHeader>
            <TableColumn>IMAGE</TableColumn>
            <TableColumn>TITLE</TableColumn>
            <TableColumn>CATEGORY</TableColumn>
            <TableColumn>PRICE</TableColumn>
            <TableColumn>RATINGS</TableColumn>
        </TableHeader>
        <TableBody>
            {
                products?.data?.map((product : TProduct, index) => (
                    <TableRow key={product._id || index}>
                        <TableCell>
                            <Image
                                className='rounded-lg font-semibold'
                                height={80}
                                width={80}
                                src={product.image}
                                alt='Image'
                            />
                        </TableCell>
                        <TableCell className='font-semibold'>{product.title}</TableCell>
                        <TableCell className='font-semibold'>{product.category}</TableCell>
                        <TableCell className='font-semibold'>${product.price}</TableCell>
                        <TableCell className='font-semibold flex items-center gap-2'>
                            {product.ratings}
                            <Star /> 
                        </TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
    </Table>
    );
};

export default fetchProductsData;