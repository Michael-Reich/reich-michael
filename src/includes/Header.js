import React from 'react';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <p>HEADER</p>
            <Link to="/">Home</Link>
            <Link to="/about">Topcis</Link>
        </header>
    )
}
