import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../../components/form-input/form-input.component.jsx';
import CustomButton from '../custombutton/custom-button.component.jsx';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils.js';

class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault(); 
        const {displayName, email, password, confirmPassword } = this.state;

            if (password !== confirmPassword) {
                alert("Password and confirm password did not match");
                return;
            }
            var moreData = "more data as additional data";
            try{
                const { user } = await auth.createUserWithEmailAndPassword(email, password);
                //user.displayName = displayName;
                await createUserProfileDocument(user, {displayName, moreData});
                this.setState({
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    test: displayName
                });
            }
            catch(error){
                alert(error);
            }


        }
    

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]:value});
    }

    render(){
        const {displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                <FormInput 
                type='email'
                name='email'
                value={email}
                onChange={this.handleChange}
                label='Email'
                required
                />
                <FormInput 
                type='text'
                name='displayName'
                value={displayName}
                onChange={this.handleChange}
                label='Display Name'
                required
                />
                <FormInput 
                type='password'
                name='password'
                value={password}
                onChange={this.handleChange}
                label='Password'
                required
                />
                <FormInput 
                type='password'
                name='confirmPassword'
                value={confirmPassword}
                onChange={this.handleChange}
                label='Confirm Password'
                required
                />
                <CustomButton type='submit' value='Submit Form'>Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;