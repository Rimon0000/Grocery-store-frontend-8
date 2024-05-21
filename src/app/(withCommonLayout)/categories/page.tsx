import CategoryCard from '@/components/ui/CategoryCard';
import { TCategory } from '@/types';
import { Button } from '@nextui-org/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const Categories = async () => {
    const res = await fetch("http://localhost:5000/categories", {
        next: {
          revalidate: 30,
        }
      })
    const Categories = await res.json()

    return (
        <div className='w-[90%] mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-8">
                {
                    Categories?.data?.map((category : TCategory) => <CategoryCard key={category._id} category={category}/>)
                }
            </div>
        </div>
    );
};

export default Categories;