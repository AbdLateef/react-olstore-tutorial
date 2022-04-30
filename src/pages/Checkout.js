import React from 'react'
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import CheckoutForm from '../components/CheckoutForm';

const Checkout = (Props) => {
    return (
        <div>
            <Announcement />
            <Navbar Cart={Props.Cart} />
            <CheckoutForm UpdatedCart={Props.UpdatedCart} />
            <Footer />
        </div>
    )
}

export default Checkout
