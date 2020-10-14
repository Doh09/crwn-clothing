import React from 'react';
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import {ReactComponent as Logo } from '../../assets/crown.svg';
import { connect } from 'react-redux';

const Header = ({currentUser}) => (
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
</div>
</div>
)

const mapStateToProps = rootReducer =>({
    currentUser: rootReducer.user.currentUser
});

export default connect(mapStateToProps)(Header);