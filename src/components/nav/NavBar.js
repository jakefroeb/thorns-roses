import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/nurseries">Nurseries</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/distibutors">Distributors</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/retailers">Retailers</Link>
            </li>
        </ul>
    )
}