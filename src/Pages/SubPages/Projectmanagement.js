import React from "react";
import NavBarSubpages from "../SubPages/NavBarSubpages"


class Projectmanagement extends React.Component {
  render() {
    return (
      <div>
        <NavBarSubpages />
        <h1 id="Projectmanagement" className="subpageTitle">
          Projectmanagement
        </h1>
        <div className="subpageRedBar">
          <div className="redBar"></div>
        </div>
        <p>Projectmanagement is voornamelijk gericht op het adviseren en controleren van het gehele bouwproces.
        Voor opdrachtgevers die een project (laten) realiseren voorziet ons buro in de behoefte een bouwkundig manager aan te trekken om te assisteren bij de realisatie van de bouwplannen met het zwaartepunt op het controleren van afspraken en overeenkomsten met bouwpartners.
        In de uitvoeringsfase wordt de opdrachtgever regelmatig geadviseerd met betrekking tot de voortgang, de kwaliteit en kosten van het bouwproject.
        De voortgang wordt gecontroleerd door de planning te bewaken en te anticiperen op komende ontwikkelingen.
        De kwaliteit wordt getoetst aan de contractdocumenten en geldende bouwnormen. Daartoe worden regelmatig bouw-kundige inspecties op de bouwplaats gehouden en middels rapportage de belanghebbenden geïnformeerd.
        De kosten van het project worden regelmatig bijgehouden middels een bouwkosten budgetbewakingsoverzicht. Daarbij wordt een prognose opgesteld van nog te verwachten kosten zodat op ieder moment de totale te verwachten bouwkosten zichtbaar zijn.</p>
      </div>
    );
  }
}

export default Projectmanagement;
