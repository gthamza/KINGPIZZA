import React from 'react';
import Slider from './Slider'; 
import Menucards from './Menucards';
import Bestseller from './Bestseller';
import Topdeals from './Topdeals';

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
