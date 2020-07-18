import React from 'react';
import { Link } from 'react-router-dom';

export default function Main() {
    return (
        <div>
            <h1>Sab page ka baap</h1>
            <Link to='/employee'>Employee</Link>
        </div>
    )
}
