import React from "react";
import { Link } from "react-router-dom";

const foto1 = require("../Assets/foto_1.jpg");
const foto2 = require("../Assets/foto_2.jpg");
const foto3 = require("../Assets/foto_3.jpg");
const foto4 = require("../Assets/foto_4.jpg");
const foto5 = require("../Assets/foto_5.jpg");
const foto6 = require("../Assets/foto_6.jpg");
const foto7 = require("../Assets/foto_7.jpg");
const foto8 = require("../Assets/foto_8.jpg");
const foto9 = require("../Assets/foto_9.png");
const foto10 = require("../Assets/foto_10.jpg");

class Diensten extends React.Component {
  render() {
    return (
      <div>
        <div className="beginOfPage" id="beginDiensten"></div>
        <h1 id="diensten" className="title">
          Diensten
        </h1>
        <div className="redBar"></div>
        <div className="dienst-card">
          {/* ProjectManagement */}
          <div className="diensten-card">
            <img src={foto1} alt="Interim Bouwconsult" />
            <h3>Projectmanagement</h3>
            <p>
              Projectmanagement is voornamelijk gericht op het adviseren en
              controleren van het gehele bouwproces.
            </p>
            <div>
              <Link to="/Projectmanagement" className="leesMeer">
                Lees meer
              </Link>
            </div>
          </div>

          {/* Bouwkundig advies */}
          <div className="diensten-card">
            <img src={foto2} alt="Interim Bouwconsult" />
            <h3>Bouwkundig advies</h3>
            <p>
              Bouwkundig advies kan gedurende het ontwerp gegeven worden met
              betrekking tot materiaal gebruik, principe-detaillering en
              bouwfysische aspecten zoals warmte, vocht en geluid.
            </p>
            <div>
              <Link to="/Bouwkundigadvies" className="leesMeer">
                Lees meer
              </Link>
            </div>
          </div>

          {/* Projectplanning */}
          <div className="diensten-card">
            <img src={foto3} alt="Interim Bouwconsult" />
            <h3>Projectplanning</h3>
            <p>
              Gezien de aanzienlijke kosten die met een bouwproject gemoeid zijn
              is een goede coördinatie en planmatig werken van groot belang om
              een project met de daarbij gestelde kwaliteit binnen een zo kort
              mogelijke tijd te realiseren.
            </p>
            <div>
              <Link to="/Projectplanning" className="leesMeer">
                Lees meer
              </Link>
            </div>
          </div>

          {/* Projectorganisatie */}
          <div className="diensten-card">
            <img src={foto4} alt="Interim Bouwconsult" />
            <h3>Projectorganisatie</h3>
            <p>
              Projectorganisatie omvat de coördinatie en organisatie gedurende
              één of meer fasen van het bouwproces.
            </p>
            <div>
              <Link to="/Projectorganisatie" className="leesMeer">
                Lees meer
              </Link>
            </div>
          </div>

          {/* Bouwkostenbeheersing */}
          <div className="diensten-card">
            <img src={foto5} alt="Interim Bouwconsult" />
            <h3>Bouwkostenbeheersing</h3>
            <p>
              In de initiatieffase zal een budgetraming de haalbaarheid van een
              voorlopig ontwerp of voorstudie moeten bepalen. Vaak is de
              uitkomst hiervan maatgevend voor de besluitvorming om een project
              voort te zetten naar een volgende fase.
            </p>
            <div>
              <Link to="/Bouwkostenbeheersing" className="leesMeer">
                Lees meer
              </Link>
            </div>
          </div>

          {/* Bouwkundig tekenwerk */}
          <div className="diensten-card">
            <img src={foto6} alt="Interim Bouwconsult" />
            <h3>Bouwkundig tekenwerk</h3>
            <p>
              Een nadere uitwerking van een ontwerp tot bouwvergunnings-
              tekeningen, bouwvoorbereidings- en/of detailtekeningen kan ons
              bureau verzorgen.
            </p>
            <div>
              <Link to="/Bouwkundig tekenwerk" className="leesMeer">
                Lees meer
              </Link>
            </div>
          </div>

          {/* Directievoering */}
          <div className="diensten-card">
            <img src={foto7} alt="Interim Bouwconsult" />
            <h3>Directievoering</h3>
            <p>
              Directievoering omvat het vertegenwoordigen van de opdrachtgever
              in alle zaken de uitvoering van het werk betreffende.
            </p>
            <div>
              <Link to="/Directievoering" className="leesMeer">
                Lees meer
              </Link>
            </div>
          </div>

          {/* Veiligheid en gezondheid */}
          <div className="diensten-card">
            <img src={foto8} alt="Interim Bouwconsult" />
            <h3>Veiligheid en gezondheid</h3>
            <p>
              Veiligheid dient een hoge prioriteit te hebben gedurende het
              bouwproces vanaf ontwerp tot en met de uitvoering en zelfs daarna
              gedurende het onderhoud.
            </p>
            <div>
              <Link to="/Veiligheidengezondheid" className="leesMeer">
                Lees meer
              </Link>
            </div>
          </div>

          {/* Bouwfysica */}
          <div className="diensten-card">
            <img src={foto9} alt="Interim Bouwconsult" />
            <h3>Bouwfysica</h3>
            <p>
              Bouwfysica is een discipline in de bouwkunde waarin onderzoek
              wordt verricht in en naar de natuurkundige processen in
              bouwmaterialen en bouwelementen.
            </p>
            <div>
              <Link to="/Bouwfysica" className="leesMeer">
                Lees meer
              </Link>
            </div>
          </div>

          {/* Meetcertificaat */}
          <div className="diensten-card">
            <img src={foto10} alt="Interim Bouwconsult" />
            <h3>Meetcertificaat</h3>
            <p>
              Meetcertificaten worden door ons buro vervaardigd overeenkomstig
              NEN 2580. Het meetcertificaat geeft het bruto oppervlak, netto
              oppervlak en naar wens, het gebruiksoppervlak of het verhuurbaar
              oppervlak weer.
            </p>
            <div>
              <Link to="/Meetcertificaat" className="leesMeer">
                Lees meer
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Diensten;
