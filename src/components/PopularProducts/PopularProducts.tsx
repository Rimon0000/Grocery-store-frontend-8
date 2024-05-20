import { TProduct } from "@/types";
import { Button } from "@nextui-org/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import PopularProductsCard from "../ui/PopularProductsCard";

const PopularProductsPage = async () => {

    const res = await fetch("http://localhost:5000/products", {
        next: {
          revalidate: 30,
        }
      })
    const products = await res.json()

    return (
        <div className='w-[80%] mx-auto my-20'>
            <div className='flex justify-between'>
                <div>
                    <h1 className='text-2xl font-bold'>Most Popular Products</h1>
                    <p>Browse our most popular products, selected based on customer favorites and top ratings.</p>
                </div>                
                <Link href="/flash-sale">
                    <Button color="danger" variant="bordered" endContent={<ChevronRight/>}>
                      See All
                    </Button>
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-8">
                {
                    products?.data?.slice(0, 6).map((product : TProduct) => <PopularProductsCard key={product._id} product={product}/>)
                }
            </div>
        </div>
    );
};

export default PopularProductsPage;