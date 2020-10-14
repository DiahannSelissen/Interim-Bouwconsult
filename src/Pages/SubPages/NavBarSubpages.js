import React from "react";
import { Link } from "react-router-dom";
const Logo = require("../SubPages/Logo.png");

class NavBarSubpages extends React.Component {
    render() {
        function refreshPage() {
            window.location.reload(false);
        }
        return (
            <div>
                <nav className="navBar">
                    <div className="logo">
                        <img src={Logo} alt="logo" />
                    </div>
                    <ul>
                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="/#diensten" >Diensten</Link>
                        </li>
                        <li>
                            <Link to="/#projecten">Projecten</Link>
                        </li>
                        <li>
                            <Link to="/#brochures">Brochures</Link>
                        </li>
                        <li>
                            <a className="sec-5" href="#contact" onClick={refreshPage}>
                                contact
                        </a>
                        </li>
                    </ul>
                </nav>
            </div>)
    }
}
export default NavBarSubpages