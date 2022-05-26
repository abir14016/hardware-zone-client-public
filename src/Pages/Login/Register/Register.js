import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../../images/social/google-logo.png';
import auth from '../../../firebase.init';
import registerImage from '../../../images/utilities/register-logo.png';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [err, setErr] = useState('');
    const [name, setName] = useState('');
    const [photoURL, setPhoURL] = useState('');
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);


    const [
        createUserWithEmailAndPassword,
        Euser,
        Eloading,
        Eerror,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    if (Euser) {
        console.log(Euser);
    }

    let errorElement;
    if (Eerror) {
        errorElement = <p style={{ color: "red" }}>Error: {Eerror.message}</p>
    }

    const [updateProfile] = useUpdateProfile(auth);


    const handleNameField = (e) => {
        setName(e.target.value)
    }

    const handleImageField = (e) => {
        setPhoURL(e.target.value);
    }



    const handleRegister = async (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name, photoURL: photoURL });
    }

    return (
        <div className='pt-5'>
            <h2 className='text-primary text-center'>Welcome To Rgister Page</h2>
            <Form onSubmit={handleRegister} className='form-container bg-dark text-white p-4 my-4 rounded'>
                <div className='text-center p-2'>
                    <img style={{ width: 80 }} src={registerImage} alt="" />
                </div>
                <h4 className='text-center'>please Register</h4>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control onBlur={handleNameField} type="text" name='name' placeholder="Enter Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPhotoURL">
                    <Form.Label>Your photoURL</Form.Label>
                    <Form.Control onBlur={handleImageField} type="text" name='photoURL' placeholder="upload photo" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className={agree ? 'text-success' : 'text-danger'} onClick={() => setAgree(!agree)} type="checkbox" name='terms' label="Accept terms & condition" />
                </Form.Group>

                <div className='text-center'>
                    <Button variant="primary" type="submit" disabled={!agree}>
                        Register
                    </Button>
                </div>
                <p>Already have an acount? <Link to="/login" className='text-primary text-decoration-none'>Please Login</Link></p>
                {Eerror && errorElement}

                {
                    <p style={{ color: "red" }}>{err}</p>
                }

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

export default Register;