import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import {ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';
//import { createStructuredSelector } from "reselect";
import { selectCartHidden } from '../../redux/cart/cart.selector.js';
import { selectCurrentUser } from "../../redux/user/user.selector.js";

const Header = ({currentUser, hidden}) => (
<div className='header'>
<Link className='logo-container' to='/'>
<Logo className='logo' /> 
</Link>

<div className='options'>
{
    currentUser ? 
    <Link className='option' to='/' onClick={() => auth.signOut()}>
    SIGN-OUT
    </Link>
    :
    <Link className='option' to='/sign-in-and-sign-up'>
    SIGN-IN-OR-SIGN-UP
    </Link>
}

<Link className='option' to='/shop'>
SHOP
</Link>
<Link className='option' to='/contact'>
CONTACT
</Link>
<CartIcon />
</div>
{
    hidden ?
    <CartDropdown></CartDropdown>
    : null
}

</div>
)



const mapStateToProps = (state) =>({
    currentUser: selectCurrentUser(state),
    hidden: selectCartHidden(state)
});

export default connect(mapStateToProps)(Header);