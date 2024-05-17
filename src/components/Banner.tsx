"use client"
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from "../assets/7022691.jpg"

const Banner = () => {
    return (
        <div>
            <Carousel>
            <div className='sm:h-[500px]'>
                <Image 
                width={1200}
                height={500}
                src="https://i.ibb.co/q7ygnWY/img1.jpg"
                alt="logo"
                />
            </div>
            <div className='sm:h-[500px]' >
                <Image 
                width={1200}
                height={500}
                src="https://i.ibb.co/58Q4Vt5/img2.jpg"
                alt="logo"
                />
            </div>
            <div className='sm:h-[500px]'>
                <Image 
                width={1200}
                height={500}
                src="https://i.ibb.co/1K2ytWY/7022691.jpg"
                alt="logo"
                />
            </div>
            <div className='sm:h-[500px]'>
                <Image 
                width={1200}
                height={500}
                src="https://i.ibb.co/xqw3Njr/flat-lay-vegetables-frame.jpg"
                alt="logo"
                />
            </div>
        </Carousel>
        </div>

    );
};

export default Banner;