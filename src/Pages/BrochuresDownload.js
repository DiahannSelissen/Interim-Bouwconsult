import React from "react";

const pdfLogo = require("../Assets/pdf-logo.png");

function BrochuresDownload(props) {
  return (
    <div className="brochures-pdf">
      <a href={props.download} download>
        <img src={pdfLogo} alt={props.alt} />
        <div id="textBrochures">{props.name}</div>
      </a>
    </div>
  );
}

export default BrochuresDownload;
