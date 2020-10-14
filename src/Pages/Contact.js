import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

export class Contact extends React.Component {
  render() {
    const mapStyles = {
      width: "100%",
      height: "365px",
    };
    return (
      <div>
        <div className="beginOfPage" id="beginContact"></div>
        <div className="pageContact">
          <h1 id="contact" className="title">
            Contact
          </h1>
          <div className="redBar"></div>
          <Map
            google={this.props.google}
            zoom={18}
            style={mapStyles}
            initialCenter={{ lat: 52.306881, lng: 5.035246 }}
          >
            <Marker position={{ lat: 52.306881, lng: 5.035246 }} />
          </Map>

          <div className="informatie">
            <div className="contactgegevens">
              <h3>Contact gegevens</h3>
              <p>
                Tel: 0294-457199 <br />
                Fax: 0294-457853 <br />
                E-mail: info@interimbouwconsult.nl
              </p>
            </div>

            <div className="adres">
              <h3>Adres</h3>
              <p>
                Van Houten Industriepark 1<br />
                1381 MZ Weesp
                <br /> <br />
                Correspondentieadres:
                <br />
                Postbus 250
                <br />
                1380 AG Weesp
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "",
})(Contact);
