import React from "react";

const arrow = require("../Assets/arrow-down.png");

class Home extends React.Component {
  render() {
    return (
      <div>
        <header id="home">
          <div className="text">
            <p>
              Interim Bouwconsult b.v. is een onafhankelijk
              <br />
              raadgevend ingenieursburo, gespecialiseerd in
              <br />
              bouwkundige projectbegeleidings en
              <br />
              advieswerkzaamheden, waarbij de nadruk wordt
              <br />
              gelegd op het beheersen en controleren van het
              <br />
              bouwproces.
            </p>
            <a href="#beginDiensten">
              <img src={arrow} alt="arrow-down" />
            </a>
          </div>
        </header>
      </div>
    );
  }
}

export default Home;