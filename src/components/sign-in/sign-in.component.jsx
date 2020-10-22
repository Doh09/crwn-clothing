import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../../components/form-input/form-input.component.jsx';
import CustomButton from '../custombutton/custom-button.component.jsx';
import { signInWithGoogle, auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
        }
        catch(error){
            alert(error);
        }

        this.setState({ email:'', password:'' })
    }

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({[name]:value})
    }

    render(){
        return(
        <div className='sign-in'>
        <h2 className='title'>I already have an account</h2>
        <span>Sign in with your password</span>

        <form onSubmit={this.handleSubmit}>
        <FormInput 
        name='email' 
        type='email'
        value={this.state.email} 
        handleChange={this.handleChange} 
        label='Email'
         />
        <FormInput 
        name='password' 
        type='password'
        value={this.state.password} 
        handleChange={this.handleChange}
        label='Password'
         />
            <div className='buttons'>
            <CustomButton type='submit' value='Submit Form' >Sign In</CustomButton>
            <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn inverted>
            {' '}
            Sign In With Google{' '}
            </CustomButton>

            </div>
        </form>

        </div>)

        
    }
}

export default SignIn;