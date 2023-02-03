import React from 'react';
import { Product, FooterBanner, HeroBanner, Footer } from '../components/index';
import { client } from '../lib/client';


const Home = ({ products, bannerData }) => {
  return (
    <div>
      <HeroBanner heroBanner= {bannerData.length && bannerData[0]}/>
      
      {console.log(bannerData)}

      <div className='products-heading'>
        <h2>Productos más vendidos</h2>
        <p>Variaciones de audífonos</p>
      </div>

      <div className='products-container'>
        {
          products?.map((product)=> <Product key={product._id}
          product= {product}
          />)
        }
      </div>
        <FooterBanner/>
    </div>
  )
};

export const getServerSideProps = async ()=>{
  const query= '*[_type == "product"]';
  const products= await client.fetch(query);

  const bannerQuery= '*[_type == "banner"]';
  const bannerData= await client.fetch(bannerQuery);

  return {
    props: {
      products,
      bannerData
    }
  }
};

export default Home
