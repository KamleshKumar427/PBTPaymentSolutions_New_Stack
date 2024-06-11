import React from "react";
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            
            <div className="nav-first-sec">
        
                <div className="navbar-left">
                    Language Dropdown
                </div>

                <div>

                <ul className="list-container">
                    <li className="list-items" >DEV TEST - 1010101</li>
                    <li className="list-items" >LOGOUT</li>
                </ul>
                </div> 

            </div>

            <div className="nav-second-sec">

                <div className="navbar-left">
                    OBL logo
                </div>
                
                <div >
                    <ul className="list-container">
                        <li className="list-items">
                            <i className="fas fa-envelope icon"></i> INBOX
                        </li>
                        <li className="list-items">
                            <i className="fas fa-user-cog icon"></i> MY ACCOUNT
                        </li >
                        <li className="list-items">
                            <i className="fas fa-question-circle icon"></i> Q&A
                        </li>
                        <li className="list-items">
                            <i className="fas fa-phone icon"></i> CONTACT US
                        </li>
                    </ul>
                
                </div>

            </div>

            <div className="nav-third-sec">
                <ul className="list-container">
                    <li className="list-items">
                        ACCOUNT 
                    </li>
                    <li className="list-items">
                        TRANSACTIONS 
                    </li>
                    <li className="list-items">
                        BALANCE 
                    </li>
                    <li className="list-items">
                        TOOLS 
                    </li>
                    <li className="list-items">
                        SERVICES 
                    </li>
                    <li className="list-items">
                        RISK 
                    </li>
                    <li className="list-items">
                        SHOPS 
                    </li>
                    <li className="list-items">
                        SETTINGS 
                    </li>
                    </ul>
            </div>

        </nav>
        
    )
}
export default Navbar;