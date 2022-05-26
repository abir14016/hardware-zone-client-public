import React from 'react';
import google from '../../../images/social/google-logo.png';
import './SocialLogin.css';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        console.log(user);
    }
    if (error) {
        console.log(error)
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: "1px" }} className='bg-primary w-50'></div>
            </div>


            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-primary d-block mx-auto social-login-button'>
                    <img style={{ width: "32px" }} src={google} alt="" />
                    <span className='px-2'>Google sign in</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;