import React from "react";

const image1 = require("../Assets/ProjectenAssets/Projecten_1.jpg");
const image2 = require("../Assets/ProjectenAssets/Projecten_2.jpg");
const image3 = require("../Assets/ProjectenAssets/Projecten_3.jpg");
const image4 = require("../Assets/ProjectenAssets/Projecten_4.jpg");
const image5 = require("../Assets/ProjectenAssets/Projecten_5.jpg");
const image6 = require("../Assets/ProjectenAssets/Projecten_6.jpg");
const image7 = require("../Assets/ProjectenAssets/Projecten_7.jpg");
const image8 = require("../Assets/ProjectenAssets/Projecten_8.jpg");
const image9 = require("../Assets/ProjectenAssets/Projecten_9.jpg");
const image10 = require("../Assets/ProjectenAssets/Projecten_10.jpg");
const image11 = require("../Assets/ProjectenAssets/Projecten_11.jpg");
const image12 = require("../Assets/ProjectenAssets/Projecten_12.jpg");
const image13 = require("../Assets/ProjectenAssets/Projecten_13.jpg");
const image14 = require("../Assets/ProjectenAssets/Projecten_14.jpg");
const image15 = require("../Assets/ProjectenAssets/Projecten_15.jpg");
const image16 = require("../Assets/ProjectenAssets/Projecten_16.jpg");
const image17 = require("../Assets/ProjectenAssets/Projecten_17.jpg");
const image18 = require("../Assets/ProjectenAssets/Projecten_18.jpg");
const image19 = require("../Assets/ProjectenAssets/Projecten_19.jpg");
const image20 = require("../Assets/ProjectenAssets/Projecten_20.jpg");

class Projecten extends React.Component {
  render() {
    return (
      <div>
        <div className="beginOfPage" id="beginProjecten"></div>
        <h1 id="projecten" className="title">
          Projecten
        </h1>
        <div className="redBar"></div>
        <div className="imageProjecten">
          <img src={image1} alt="Interim bouwconsult" />
          <img src={image2} alt="Interim bouwconsult" />
          <img src={image3} alt="Interim bouwconsult" />
          <img src={image4} alt="Interim bouwconsult" />
          <img src={image5} alt="Interim bouwconsult" />
          <img src={image6} alt="Interim bouwconsult" />
          <img src={image7} alt="Interim bouwconsult" />
          <img src={image8} alt="Interim bouwconsult" />
          <img src={image9} alt="Interim bouwconsult" />
          <img src={image10} alt="Interim bouwconsult" />
          <img src={image11} alt="Interim bouwconsult" />
          <img src={image12} alt="Interim bouwconsult" />
          <img src={image13} alt="Interim bouwconsult" />
          <img src={image14} alt="Interim bouwconsult" />
          <img src={image15} alt="Interim bouwconsult" />
          <img src={image16} alt="Interim bouwconsult" />
          <img src={image17} alt="Interim bouwconsult" />
          <img src={image18} alt="Interim bouwconsult" />
          <img src={image19} alt="Interim bouwconsult" />
          <img src={image20} alt="Interim bouwconsult" />
        </div>
        <div id="endProjecten" className="endOfPage"></div>
      </div>
    );
  }
}

export default Projecten;
