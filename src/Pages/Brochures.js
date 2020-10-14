import React from "react";
import BrochuresDownload from "./BrochuresDownload";

const pdf1 = require("../Pdf/interim_bouwconsult_werkzaamheden.pdf");
const pdf2 = require("../Pdf/interim_bouwconsult_projectmanagement.pdf");
const pdf3 = require("../Pdf/interim_bouwconsult_bouwkundig advies.pdf");
const pdf4 = require("../Pdf/interim_bouwconsult_projectplanning.pdf");
const pdf5 = require("../Pdf/interim_bouwconsult_projectorganisatie.pdf");
const pdf6 = require("../Pdf/interim_bouwconsult_bouwkostenbeheersing.pdf");
const pdf7 = require("../Pdf/interim_bouwconsult_bouwkundig_tekenwerk.pdf");
const pdf8 = require("../Pdf/interim_bouwconsult_directievoering.pdf");
const pdf9 = require("../Pdf/interim_bouwconsult_veiligheid_en_gezondheid.pdf");
const pdf10 = require("../Pdf/interim_bouwconsult_bouwfysica.pdf");
const pdf11 = require("../Pdf/interim_bouwconsult_meetcertificaat_NEN2580.pdf");

class Brochures extends React.Component {
  render() {
    return (
      <div>
        <div className="beginOfPage" id="beginBrochures"></div>
        <div className="pageBrochures">
          <div className="allBrochuresDownload">
            <h1 id="brochures" className="titleBrochures">
              Brochures
            </h1>
            <div className="redBar"></div>
            <BrochuresDownload
              name="Werkzaamheden interim bouwconsult"
              alt="interim_bouwconsult_werkzaamheden.pdf"
              download={pdf1}
            />
            <BrochuresDownload
              name="Projectmanagement"
              alt="interim_bouwconsult_projectmanagement.pdf"
              download={pdf2}
            />
            <BrochuresDownload
              name="Bouwkundig advies"
              alt="interim_bouwconsult_bouwkundig advies.pdf"
              download={pdf3}
            />
            <BrochuresDownload
              name="Projectplanning"
              alt="interim_bouwconsult_projectplanning.pdf"
              download={pdf4}
            />
            <BrochuresDownload
              name="Projectorganisatie"
              alt="interim_bouwconsult_projectorganisatie.pdf"
              download={pdf5}
            />
            <BrochuresDownload
              name="Bouwkostenbeheersing"
              alt="interim_bouwconsult_bouwkostenbeheersing.pdf"
              download={pdf6}
            />
            <BrochuresDownload
              name="Bouwkundig tekenwerk"
              alt="interim_bouwconsult_bouwkundig_tekenwerk.pdf"
              download={pdf7}
            />
            <BrochuresDownload
              name="Directievoering"
              alt="interim_bouwconsult_directievoering.pdf"
              download={pdf8}
            />
            <BrochuresDownload
              name="Veiligheid en Gezondheid"
              alt="interim_bouwconsult_veiligheid_en_gezondheid.pdf"
              download={pdf9}
            />
            <BrochuresDownload
              name="bouwfysica"
              alt="interim_bouwconsult_bouwfysica.pdf"
              download={pdf10}
            />
            <BrochuresDownload
              name="Meetcertificaat NEN2580"
              alt="interim_bouwconsult_meetcertificaat_NEN2580.pdf"
              download={pdf11}
            />
          </div>
          <div id="backgroundBrochures"></div>
        </div>
      </div>
    );
  }
}

export default Brochures;
