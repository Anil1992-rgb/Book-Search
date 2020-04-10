import React from "react";
import { Link } from "react-router-dom";


function Nav() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
                <Link className="navbar-brand" to="/">Google Books</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className={window.location.pathname === "/" ? "nav-link active" : "nav-link"} to="/">Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link className={window.location.pathname === "/saved" ? "nav-link active" : "nav-link"} to="/saved">Saved</Link>
                    </li>
                </ul>
            </nav>
        )
}

export default Nav;