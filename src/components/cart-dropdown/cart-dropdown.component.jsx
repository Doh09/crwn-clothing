import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custombutton/custom-button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';
import { connect } from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selector.js';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js'

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className='cart-dropdown'>
    <div className='cart-items'>
    {
        cartItems.length !== 0 
        ? 
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>)
        : 
        <span className='empty-message'>Your cart is empty</span>
    }
    </div>
    <CustomButton onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
    }} type='button'>
    GO TO CHECKOUT
    </CustomButton>
    </div>

    );

const mapStateToProps = state =>({
    cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));