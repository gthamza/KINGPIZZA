import React from 'react';
import Slider from '../components/Slider'; 
import Menucards from '../components/Menucards';
import Bestseller from '../components/Bestseller';
import Topdeals from '../components/Topdeals';

function Home() {
  return (
    <> 
      <Slider />
      <Menucards></Menucards>
      <Bestseller></Bestseller>
      <Topdeals></Topdeals>
    </>
  );
}

export default Home;
