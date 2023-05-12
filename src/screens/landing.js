import React from 'react';
import Navbar from "../components/header";
import CatHeader from "../components/catheader";
import Categories from "../components/categories";
import Home from "../components/middle";
// import Home from "../components/samplemiddle";
import Footer from "../components/footer";






const Landing = () => {

    return (
        <div>
            <Navbar/>
            <CatHeader/>
            <Categories/>
            <Home/>
            <Footer/>
        </div>
    );
};

export default Landing;
