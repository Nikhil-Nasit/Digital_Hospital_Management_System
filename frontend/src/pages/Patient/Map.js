import React from "react";
import { MapContainer, TileLayer,Marker } from "react-leaflet";
import PatientMainNavigation from "./PatientMainNavigation";
import {icon} from "leaflet";

const ICON = icon({
    iconUrl: "/marker.png",
    iconSize: [32, 32],
  })
const Map = () => {
  const marker = { lat : 1.35, lng : 103.8};
  return (
    <React.Fragment>
      <PatientMainNavigation></PatientMainNavigation>
      <MapContainer
        className="map"
        center={marker}
        zoom={10}
        style={{ height: 643, width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker icon={ICON} position={[marker.lat,marker.lng]}></Marker>
      </MapContainer>
    </React.Fragment>
  );
};

export default Map;
