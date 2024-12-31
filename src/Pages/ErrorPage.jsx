import React from 'react';

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-white text-center">
            <div className="bg-white p-10 flex flex-col items-center justify-center">
                <img className='h-48' src="https://uxwing.com/wp-content/themes/uxwing/download/signs-and-symbols/error-icon.png" alt="" />
                <h1 className="text-4xl font-bold text-red-600">Oops!</h1>
                <p className="mt-4 text-xl text-gray-600">Something went wrong.</p>
                <p className="mt-4 text-lg text-gray-500">We couldn't find the page you're looking for.</p>
                <a href="/" className="mt-6 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    Go back to Home
                </a>
            </div>
        </div>
    );
};

export default ErrorPage;
