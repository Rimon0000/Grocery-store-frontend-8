import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='bg-gray-600 bg-opacity-10'>
                <div className='w-[90%] mx-auto py-10 grid sm:grid-cols-3 md:grid-cols-6 justify-between '>
                    <div>
                    <Image
                    height={100}
                    width={100}
                    src="https://i.ibb.co/5W9D164/shefinds-logo-1.png"
                    alt='image'
                    />
                   </div>
                   <div>
                    <Image
                    height={100}
                    width={100}
                    src="https://i.ibb.co/v3qL5cw/yahoo-news-img-1.png"
                    alt='image'
                    />
                   </div>
                   <div>
                    <Image
                    height={100}
                    width={100}
                    src="https://i.ibb.co/Wv10RPY/Healthline-img-1.png"
                    alt='image'
                    />
                   </div>
                   <div>
                    <Image
                    height={100}
                    width={100}
                    src="https://i.ibb.co/QnDNxy9/yahoo-news-img-2.png"
                    alt='image'
                    />
                   </div>
                   <div>
                    <Image
                    height={100}
                    width={100}
                    src="https://i.ibb.co/K21swSW/MSN-logo-1.png"
                    alt='image'
                    />
                   </div>
                   <div>
                    <Image
                    height={100}
                    width={100}
                    src="https://i.ibb.co/5W9D164/shefinds-logo-1.png"
                    alt='image'
                    />
                   </div>
                </div>
            </div>

            <div className='bg-[#3D3D3D] text-white'>
            <div className='w-[90%] mx-auto pb-10 pt-20 grid sm:grid-cols-1 md:grid-cols-5 justify-between'>
                <div className='text-lg font-normal'>
                    <h1 className='uppercase text-lg font-normal mb-4'>Products</h1>
                    <p>Fish</p>
                    <p className='my-2'>SeaFood</p>
                    <p>Sea BBQ</p>
                </div>
                <div className='text-lg font-normal'>
                    <h1 className='uppercase text-lg font-normal mb-4'>Categories</h1>
                    <p>Fresh Water</p>
                    <p className='my-2'>Salt Water</p>
                    <p>Crustaceans</p>
                </div>
                <div className='text-lg font-normal'>
                    <h1 className='uppercase text-lg font-normal mb-4'>flash sale</h1>
                    <p>Trending</p>
                    <p className='my-2'>Discount</p>
                    <p>Percent</p>
                </div>
                <div className='text-lg font-normal'>
                    <h1 className='uppercase text-lg font-normal mb-4'>privacy</h1>
                    <p>Terms of Use</p>
                    <p className='my-2'>privacy Policy</p>
                    <p>Cookie Policy</p>
                </div>
                <div className='text-lg font-normal'>
                    <h1 className='uppercase text-lg font-normal mb-4'>about us</h1>
                    <p>Facilities</p>
                    <p className='my-2'>Company</p>
                    <p>Website</p>
                </div>
            </div>
            <hr />
            <div>
                <p className='text-lg text-center py-5'>Copyright © 2023 ACME, Inc </p>
            </div>
            
        </div>
        </div>
        
    );
};

export default Footer;