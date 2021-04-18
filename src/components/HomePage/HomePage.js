
import React from 'react';
import Login from '../Login/Login';

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
       
        return (
            <div className="wrapper">
                <Login />
            </div>
        );
    }
}

