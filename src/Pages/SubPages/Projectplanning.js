import React from "react";
import NavBarSubpages from "../SubPages/NavBarSubpages"

const Projectplanning = () => {
    return (
        <div>
            <NavBarSubpages />
            <h1 id="Projectplanning" className="subpageTitle">
                Projectplanning
      </h1>
            <div className="subpageRedBar">
                <div className="redBar"></div>
            </div>
            <p>Projectplanning kan gedurende het ontwerp gegeven worden met betrekking tot materiaal gebruik, principe-detaillering en bouwfysische aspecten zoals warmte, vocht en geluid. Tijdens de bouwvoorbereidingsperiode kan een beoordeling van bestek- en bestekstekeningen waardevol blijken voor de nadere uitwerking van een project.
      Voor de bij een bouwvergunningaanvraag in te dienen bescheiden is het noodzakelijk dat in principe aan alle, in het bouwbesluit genoemde eisen wordt voldaan, zoals bijvoorbeeld de brandveiligheid, energiebeheersing, ventilatie, daglicht-toetreding en geluidwering. Gedurende de uitvoeringsfase kan de uitvoering kwalitatief beoordeeld worden en opdrachtgever geadviseerd met betrekking tot correctieve maatregelen. </p>
        </div>
    );
};

export default Projectplanning;