import React from 'react';
import './cart-dropdown.styles.scss';
import CustomButton from '../custombutton/custom-button.component.jsx';

const CartDropdown = () => (
    <div className='cart-dropdown'>
    <div className='cart-items'/>
    <CustomButton type='button'>
    GO TO CHECKOUT
    </CustomButton>
    </div>

    );

export default CartDropdown;