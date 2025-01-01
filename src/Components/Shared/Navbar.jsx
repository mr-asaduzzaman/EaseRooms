import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser();
    };

    const Links = (
        <div className='sm:flex sm:flex-col sm:flex-1 lg:flex lg:flex-row lg:flex-grow gap-5'>
            <button className='btn btn-sm btn-outline bg-gradient-to-bl from-gray-900 to-gray-500 text-gray-300'>
                <Link to='/'>Home</Link>
            </button>
            <button className='btn btn-sm btn-outline bg-gradient-to-bl from-gray-900 to-gray-500 text-gray-300'>
                <Link to='/rooms'>Rooms</Link>
            </button>
            <button className='btn btn-sm btn-outline bg-gradient-to-bl from-gray-900 to-gray-500 text-gray-300'>
                <Link to='/myBookings'>My Bookings</Link>
            </button>
            <button className='btn btn-sm btn-outline bg-gradient-to-bl from-gray-900 to-gray-500 text-gray-300'>
                <Link to='/aboutUs'>About Us</Link>
            </button>
            <div className='flex gap-5'>
                {!user ? (
                    <>
                        <Link
                            to='/signUp'
                            className='btn btn-sm btn-outline bg-gradient-to-bl from-green-300 to-green-500 text-white'>
                            Sign Up
                        </Link>
                        <Link
                            to='/signIn'
                            className='btn btn-sm btn-outline bg-gradient-to-bl from-green-300 to-green-500 text-white'>
                            Sign In
                        </Link>
                    </>
                ) : (
                    <div className='flex gap-2 items-center'>
                        <div>{user.displayName}</div>
                        <button
                            onClick={handleLogout}
                            className='btn btn-sm btn-outline bg-gradient-to-bl from-red-300 to-red-500 text-white'>
                            Log Out
                        </button>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="navbar bg-gradient-to-b from-gray-950 to-gray-700">
            <div className="navbar-start w-full flex justify-between items-center">
                <div className="dropdown lg:hidden">
                    <button
                        tabIndex={0}
                        role="button"
                        className="btn bg-white"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-[1]"
                    >
                        {Links}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img
                        className="h-10 filter invert rounded-md"
                        src="https://i.ibb.co.com/D9XdbCZ/buildings-with-house-roof-and-sun-778ld-removebg-preview.png"
                        alt="Logo"
                    />
                    <Link
                        to='/'
                        className="px-4 py-2 text-4xl font-bold text-white font-serif rounded-md">
                        EaseRoom
                    </Link>
                </div>
            </div>
            {/* Navbar Center for Desktop */}
            <div className="navbar-center hidden lg:flex w-100% justify-center">
                <ul className="menu menu-horizontal px-1">{Links}</ul>
            </div>
           
        </div>
    );
};

export default Navbar;
