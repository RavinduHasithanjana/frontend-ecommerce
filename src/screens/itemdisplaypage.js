import React from 'react'
import Navbar from "../components/header";
import Itemdisplay from "../components/itemdisplay";
import Footer from "../components/footer";
import Categories from '../components/categories';
import Itemgrid from '../components/itemgrid';

const itemdisplaypage = () => {
  return (
    <div>
        <Navbar/>
        <Itemdisplay/>
        <Categories/>
        <Itemgrid/>
        <Footer/>
    </div>
  )
}

export default itemdisplaypage