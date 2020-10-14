import React from "react";

const Logo = require("../Assets/Logo.png");

class NavBar extends React.Component {
  render() {
    return (
      <div className="main">
        <nav className="navBar">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <ul>
            <li>
              <a className="sec-1" href="#home">
                home
              </a>
            </li>
            <li>
              <a className="sec-2" href="#diensten">
                diensten
              </a>
            </li>
            <li>
              <a className="sec-3" href="#projecten">
                projecten
              </a>
            </li>
            <li>
              <a className="sec-4" href="#beginBrochures">
                Brochures
              </a>
            </li>
            <li>
              <a className="sec-5" href="#contact">
                contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default NavBar;
