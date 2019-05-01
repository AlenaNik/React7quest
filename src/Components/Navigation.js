import React, {Component} from 'react';
import { NavLink } from "react-router-dom"

const Navigation = () => {
        return (
            <div className="ph3 ph5-ns pv4 nowrap overflow-x-auto">
                <NavLink to="/" className="link dim gray f5 f4-ns dib mr3">Home</NavLink>
                <NavLink to="/our-history" className="link dim gray f5 f4-ns dib mr3">History</NavLink>
            </div>
        );
    };

export default Navigation;