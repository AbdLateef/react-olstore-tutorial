import React from 'react';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Slider from '../components/Slider';

const Home = (Props) => {
    return (
        <div>
            <Announcement />
            <Navbar Cart={Props.Cart} />
            <Slider />
            <Products />
            <Footer />
        </div>
    )
}

export default Home
