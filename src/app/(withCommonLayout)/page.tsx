import Banner from '@/components/Banner';
import React from 'react';
import FlashSalePage from '@/components/FlashSale/FlashSale';
import TopCategories from '@/components/TopCategories/TopCategories';
import PopularProductsPage from '@/components/PopularProducts/PopularProducts';

const Home = () => {
  return (
    <div>
      <Banner/>
      <FlashSalePage/>
      <TopCategories/>
      <PopularProductsPage/>
    </div>
  );
};

export default Home;