import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext)

    const handleLogout = () => {
        logoutUser()
    }
    const Links = <div className='flex gap-5'>
        <button className='btn btn-sm btn-outline bg-gradient-to-bl from-gray-900 to-gray-500 text-gray-300'><Link to='/'>Home</Link></button>
        <button className='btn btn-sm btn-outline bg-gradient-to-bl from-gray-900 to-gray-500 text-gray-300'><Link to='/rooms'>Rooms</Link></button>
        <button className='btn btn-sm btn-outline bg-gradient-to-bl from-gray-900 to-gray-500 text-gray-300'><Link to='/myBookings'>My Bookings</Link></button>
        <button className='btn btn-sm btn-outline bg-gradient-to-bl from-gray-900 to-gray-500 text-gray-300'><Link to='/aboutUs'>About us</Link></button>
    </div>
    return (
        <div className="navbar bg-gradient-to-b from-gray-950 to-gray-700">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {Links}
                    </ul>
                </div>
                <div className='flex items-center'>
                    <img
                        className="h-10 filter invert rounded-md"
                        src="https://i.ibb.co.com/D9XdbCZ/buildings-with-house-roof-and-sun-778ld-removebg-preview.png"
                        alt=""
                    />

                    <Link to='/' className="px-4 py-2 text-4xl font-bold text-white font-serif rounded-md ">EaseRoom</Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end flex gap-4">
                {
                    user ?
                        <div className='flex gap-2 items-center'>
                            <div>
                                {user.displayName}
                            </div>
                            <button onClick={handleLogout} className="btn btn-sm btn-outline bg-gradient-to-bl from-gray-900 to-gray-500 text-gray-300">Log Out</button>
                        </div>

                        :
                        <div className='flex gap-5'>
                            <Link to='/signUp' className="btn btn-sm btn-outline bg-gradient-to-bl from-gray-900 to-gray-500 text-gray-300">Sign Up</Link>
                            <Link to='/signIn' className="btn btn-sm btn-outline bg-gradient-to-bl from-gray-900 to-gray-500 text-gray-300">Sign In</Link>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;