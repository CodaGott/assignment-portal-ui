import React from 'react';
import { useLocalState } from '../util/useLocalStorage';

const Dashboard = () => {
    const [jwt, setJwt] = useLocalState("", "jwt");
    return (
        <div>
            <div className='Dashboard'>
                <h1>Hello, World</h1>
                <div>JWT Value is {jwt}</div>
            </div>
        </div>
    );
};

export default Dashboard;