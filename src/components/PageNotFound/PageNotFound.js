
import React from 'react';
import Navbar from '../Navbar/Navbar';

function PageNotFound() {
    
       
        return (
            <div className="wrapper">
                <Navbar />
                <h2>Page not found! Go back to <a href='/login'>login page</a></h2>
            </div>
        )
    
        }

export default PageNotFound
