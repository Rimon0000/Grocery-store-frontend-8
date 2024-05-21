import { BaggageClaim, ChevronRight, Heart, Star } from 'lucide-react';
import {Card, CardBody, Image, Button, Slider} from "@nextui-org/react";

const ProductDetails = async({params} : {params: string}) => {
    const res = await fetch(`http://localhost:5000/single-fish/${params.productId}`)
    const product = await res.json()
    const {image, title, category, price, discountPercent, discountPrice, ratings, description} = product.data


    return (
        <div className='w-[90%] mx-auto'>
            <h1 className='flex mt-5'>product Listing <ChevronRight /> Product Details </h1>
            <div className="mx-auto shadow-md p-5 rounded-md border mt-10  bg-background/60 dark:bg-default-100/50 max-w-[910px]">
              <div>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-10 md:gap-10 items-center justify-center">
                  <div className=" col-span-6 md:col-span-5">
                    <Image
                      alt="Album cover"
                      className="object-cover"
                      height={300}
                      shadow="md"
                      src={image}
                      width="100%"
                    />
                  </div>
        
                  <div className="col-span-6 md:col-span-7">
                    <div className='flex justify-between gap-5'>
                        <div>
                        <h1 className='text-3xl font-bold '>{title}</h1>
                            <div className="flex items-center gap-3 font-semibold my-3">
                              <Star /> 
                              <Star /> 
                              <Star /> 
                              <Star /> 
                              <Star /> 
                              <span>{ratings} (Review)</span>
                            </div>                        
                        </div>
                        <div>
                        <Heart />
                        </div>
                    </div>
                    <div className='flex gap-3 text-lg font-semibold'>
                        <p>${discountPrice}</p>
                        <p className='line-through'>${price}</p>
                        <p>{discountPercent}% Off</p>
                    </div>
                    <hr className='my-5'></hr>
                    <div>
                        <div className='flex items-center mb-2 font-medium gap-2'>
                             <BaggageClaim />
                            <p>Free worldwide shipping on all orders over $100</p>
                        </div>
                        <div className='flex items-center font-medium gap-2'>
                             <BaggageClaim />
                            <p>Delivers in: 3-7 Working Days Shipping & Return</p>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='mt-8'>
                 <h1 className='font-semibold mb-1 text-lg'>Description: </h1>
                 <p>{description}</p>
              </div>  
            </div>    
        </div>
    );
};

export default ProductDetails;