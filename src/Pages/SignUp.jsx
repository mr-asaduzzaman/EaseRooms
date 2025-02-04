import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import RegisterAnimation from '../assets/register.json';
import AuthContext from '../Context/AuthContext';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'; // Import toast for notifications

const pageVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const SignUp = () => {
    const navigate = useNavigate();
    const { createUser, googleLogin } = useContext(AuthContext);
    const [error, setError] = useState("");

    // Password validation function
    const validatePassword = (password) => {
        const upperCasePattern = /[A-Z]/;
        const lowerCasePattern = /[a-z]/;
        const minLength = 6;

        if (!upperCasePattern.test(password)) {
            return "Password must contain at least one uppercase letter.";
        }
        if (!lowerCasePattern.test(password)) {
            return "Password must contain at least one lowercase letter.";
        }
        if (password.length < minLength) {
            return "Password must be at least 6 characters long.";
        }
        return ""; // No error
    };

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // Validate the password
        const passwordError = validatePassword(password);
        if (passwordError) {
            setError(passwordError); // Show error message
            toast.error(passwordError); // Show error toast
            return; // Stop the signup process if password is invalid
        }

        // If validation is successful, proceed with user creation
        createUser(email, password)
            .then((result) => {
                // console.log(result.user);
                navigate('/');
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const handleGoogleSignUp = () => {
        googleLogin()
            .then((result) => {
                navigate('/')
                // console.log(result.user);
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 1 }}
            className="hero bg-gradient-to-br from-gray-200 to-gray-800 min-h-screen"
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <div className="max-w-96 grayscale">
                        <Lottie animationData={RegisterAnimation}></Lottie>
                    </div>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-5xl font-bold p-4 text-center">Register now!</h1>
                    <form onSubmit={handleSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 text-sm mt-2">{error}</p>} {/* Show error message */}
                        <div className="form-control mt-6">
                            <button className="btn text-white font-bold bg-gradient-to-tl from-gray-400 to-gray-800">
                                Register
                            </button>
                            <br />
                            <div onClick={handleGoogleSignUp} className="btn btn-outline font-bold grayscale">
                                <FcGoogle /> Sign in with Google
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </motion.div>
    );
};

export default SignUp;
