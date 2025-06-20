import React, { useState } from 'react'
import Header from './Header'
import { NETFLIX_BACKGROUND_IMG_URL } from "../utils/constants";

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header />
            <div className='absolute'>
                <img alt="background-image" src={NETFLIX_BACKGROUND_IMG_URL} />
            </div>
            <form className='p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 rounded-lg text-white bg-opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
                {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-600" />}
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-600" />
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-600" />
                <button className="p-4 my-6 rounded-lg bg-red-700 w-full">{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
                <p className='py-4 cursor-pointer' onClick={() => toggleSignInForm()}> {isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already registered ? Sign In now.'}</p>
            </form>
        </div>

    )
}

export default Login