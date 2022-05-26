import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import loginImage from '../../../images/utilities/login-logo.png';
import google from '../../../images/social/google-logo.png';
import './Login.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    if (gUser) {
        console.log(gUser);
    }

    const handleLogin = event => {
        event.preventDefault();
    }
    return (
        <div className='pt-5'>
            <h2 className='text-primary text-center'>Welcome To Login Page</h2>
            <Form onSubmit={handleLogin} className='form-container bg-dark text-white p-4 my-4 rounded'>
                <div className='text-center py-2'>
                    <img style={{ width: 80 }} src={loginImage} alt="" />
                </div>
                <h4 className='text-center'>please login</h4>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </div>

                <p>New to Hardware Zone? <Link to="/register" className='text-primary text-decoration-none'>Please Register</Link></p>

                <p>Forget password?<button className='text-primary text-decoration-none btn btn-link'>Reset Password</button></p>

                <div>
                    <div className='d-flex align-items-center'>
                        <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                        <p className='mt-2 px-2'>or</p>
                        <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                    </div>


                    <div>
                        <button
                            onClick={() => signInWithGoogle()}
                            className='btn btn-primary d-block mx-auto social-login-button'>
                            <img style={{ width: "32px" }} src={google} alt="" />
                            <span className='px-2'>Google sign in</span>
                        </button>
                    </div>
                </div>

            </Form>
        </div>
    );
};

export default Login;