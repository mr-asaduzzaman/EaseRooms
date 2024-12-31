import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import RegisterAnimation from '../assets/register.json'
import { motion } from 'framer-motion';
import AuthContext from '../Context/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';

const SignIn = () => {
    const { LoginUser, googleLogin } = useContext(AuthContext)
    const location = useLocation()
    const from = location.state || '/'
    const Navigate = useNavigate()
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        LoginUser(email, password)
            .then(response => {
                console.log(response.user)
                Navigate(from)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const pageVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };

    const handleGoogleSignIn = () => {
        googleLogin()
            .then((result) => {
                console.log(result.user);
                Navigate(from)
            })
            .catch((error) => {
                alert(error.message);
            });
    }
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 1 }} className="hero bg-gradient-to-tl from-gray-200 to-gray-400 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">

                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

                    <h1 className="text-5xl font-bold p-4 text-center">Sign in now!</h1>
                    <form onSubmit={handleSignIn} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name='email'
                                placeholder="email"
                                className="input input-bordered"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name='password'
                                placeholder="password"
                                className="input input-bordered"
                                required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-gradient-to-tl text-white font-bold from-gray-400 to-gray-800">Login</button>
                            <br />
                            <div onClick={handleGoogleSignIn} className="btn grayscale btn-outline font-bold">
                                <FcGoogle /> Sign in with google
                            </div>
                        </div>
                    </form>
                </div>
                <div className="text-center lg:text-left">
                    <div className='max-w-96 grayscale'>
                        <Lottie animationData={RegisterAnimation}></Lottie>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default SignIn;