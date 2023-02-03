import React from 'react';
import { Product, FooterBanner, HeroBanner, Footer } from '../components/index';
import { client } from '@/lib/client';

const Home = () => {
  return (
    <div>
      <HeroBanner/>

      <div className='products-heading'>
        <h2>Best selling Products</h2>
        <p>Speakers of many variations</p>

      </div>
      <div className='products-container'>
        {
          ['Product1', 'Product2', 'Product3'].map((product)=> `  ${product}`)
        }
      </div>
        <FooterBanner/>
    </div>
  )
};

//export const getServerSideProps= aysnc () =>{



export default Home
