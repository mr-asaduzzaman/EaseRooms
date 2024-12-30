import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../Context/AuthContext';

const PrivetRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {

        return <div className='items-center justify-center flex min-h-screen'><span className="loading loading-ring loading-lg"></span></div>
    }

    if (user) {
        return children
    }
    return <Navigate to='/signIn' state={location?.pathname}></Navigate>
};

export default PrivetRoute;