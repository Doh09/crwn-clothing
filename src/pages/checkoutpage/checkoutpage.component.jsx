import React from 'react';
import './checkoutpage.styles.scss';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selector.js';
import CheckoutItem from '../../components/checkout-item/checkout-item.component.jsx';

const CheckoutPage = ({cartItems, cartTotal}) =>(
    <div className='checkout-page'>
    CHECKOUT PAGE

    <div className='checkout-header'>
    <div className='header-block'>
    <span>
    Product
    </span>
    </div>    
    <div className='header-block'>
    <span>
    Description
    </span>
    </div>    
    <div className='header-block'>
    <span>
    Quantity
    </span>
    </div>
    <div className='header-block'>
    <span>
    Price
    </span>
    </div>    <div className='header-block'>
    <span>
    Remove
    </span>
    </div>
    </div>
    {
        cartItems ?
        cartItems.map(cartItem =>
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        )
        : <p>No items in cart.</p>
    }

    <div className='total'>
    <span>TOTAL: ${cartTotal}</span>
    </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);