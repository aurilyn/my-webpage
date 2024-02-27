import React from "react";
import './index.css';
import logo from "./logo192.png"

export default function Navbar() {
    return (
        <header>
            <img src={logo} alt="Logo" />
            <nav>
                <ul>
                    <li>Item A</li>
                    <li>Item B</li>
                    <li>Item C</li>
                </ul>
            </nav>
        </header>
    )
}
