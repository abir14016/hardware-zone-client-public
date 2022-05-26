import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImage from '../../../images/utilities/login-logo.png';
import google from '../../../images/social/google-logo.png';
import './Login.css';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        eUser,
        eLoading,
        eError,
    ] = useSignInWithEmailAndPassword(auth);

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();

    useEffect(() => {
        if (gUser || eUser) {
            navigate(from, { replace: true });
        }
    }, [gUser, eUser, from, navigate])

    let eErrorElement;
    if (eError) {
        eErrorElement = <p style={{ color: "red" }}>Error: {eError.message}</p>
    }

    let gErrorElement;
    if (gError) {
        gErrorElement = <p style={{ color: "red" }}>Error: {gError.message}</p>
    }

    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    return (
        <div className='pt-5'>
            <h2 className='text-primary text-center'>Welcome To Login Page</h2>
            <Form onSubmit={handleLogin} className='form-container bg-dark text-white p-4 rounded'>
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

                {(eLoading) && <p className='text-warning'>Loading...</p>}
                {(eError) && eErrorElement}

                <div className='text-center'>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </div>

                <p>New to Hardware Zone? <Link to="/register" className='text-primary text-decoration-none'>Please Register</Link></p>

                <p>Forget password?<button className='text-primary text-decoration-none btn btn-link'>Reset Password</button></p>
            </Form>
            <div className='form-container bg-dark text-white p-4 rounded'>
                <div className='d-flex align-items-center'>
                    <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                    <p className='mt-2 px-2'>or</p>
                    <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                </div>

                {(gLoading) && <p className='text-warning'>Loading...</p>}
                {(gError) && gErrorElement}


                <div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className='btn btn-primary d-block mx-auto social-login-button'>
                        <img style={{ width: "32px" }} src={google} alt="" />
                        <span className='px-2'>Google sign in</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;