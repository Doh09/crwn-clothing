import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import HatsPage from './pages/hatspage/hatspage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import {Route, Switch} from 'react-router-dom';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up-page/sign-in-and-sign-up-page.component.jsx';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions.js'
class App extends React.Component {

unsubscribeFromAuth = null;

async sleep(ms) {
  
  return new Promise(resolve => setTimeout(resolve, ms));
}

async componentDidMount (){
const {setCurrentUser} = this.props;
  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
    setCurrentUser(userAuth); 
    if (userAuth)
    {
       const userRef = await createUserProfileDocument(userAuth);
    
         console.log("Found userRef.");
      userRef.onSnapshot(snapshot => {
        
        setCurrentUser({
          
            id: snapshot.id,
            ...snapshot.data()
          
        });
      });
    }
 });
}




componentWillUnmount(){
  this.unsubscribeFromAuth(); 
}

  render(){

    return (
    <div>
    <Header />
    <Switch>
    <Route exact={true} path='/' component={HomePage}/>
    <Route exact={true} path='/hats' component={HatsPage}/>
    <Route exact={true} path='/shop' component={ShopPage}/>
    <Route exact={true} path='/sign-in-and-sign-up' component={SignInAndSignUpPage}/>
    </Switch>
    </div>
  );

}

}

const mapDispatchToProps = dispatch =>({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
