import React from 'react'
import { Link, browserHistory } from 'react-router'

export default function AppView() {
    return (
        <div>
            <header>
                <nav>
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo right">Logo</a>
                        <ul id="nav-mobile" className="left hide-on-med-and-down">
                            <li><Link to="/#users">Users</Link></li>
                            <li><a href="#">Components</a></li>
                            <li><a href="#">JavaScript</a></li>
                        </ul>
                    </div>
                </nav>
            </header>
            <div id="innerWrapper">
               
            </div>
        </div>
    )
};