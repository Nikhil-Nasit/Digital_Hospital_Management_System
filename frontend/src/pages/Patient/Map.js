import React from "react";
import { MapContainer, TileLayer,Marker } from "react-leaflet";
import PatientMainNavigation from "./PatientMainNavigation";
import {icon} from "leaflet";

const ICON = icon({
    iconUrl: "\location.png",
    iconSize: [30, 30],
  })
const Map = () => {
  const marker1 = { lat : 23.02, lng : 72.57};
  const marker2 = { lat : 22.3, lng : 70.8};
  const marker3 = { lat : 22.47, lng : 70.05};
  const marker4 = { lat : 21.60, lng : 71.22};
  const marker5 = { lat : 21.76, lng : 72.15};
  const marker6 = { lat : 21.52, lng : 70.45};
  const marker7 = { lat : 23.24, lng : 69.66};
  const marker8 = { lat : 19.07, lng : 72.87};
  const marker9 = { lat : 28.70, lng : 77.10};
  const marker10 = { lat : 21.17, lng : 72.83};
  const marker11 = { lat : 23.58, lng : 72.36};
  

  return (
    <React.Fragment>
      <PatientMainNavigation></PatientMainNavigation>
      <MapContainer
        className="map"
        center={marker2}
        zoom={7}
        style={{ height: 679, width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker icon={ICON} position={[marker1.lat,marker1.lng]}></Marker>
        <Marker icon={ICON} position={[marker2.lat,marker2.lng]}></Marker>
        <Marker icon={ICON} position={[marker3.lat,marker3.lng]}></Marker>
        <Marker icon={ICON} position={[marker4.lat,marker4.lng]}></Marker>
        <Marker icon={ICON} position={[marker5.lat,marker5.lng]}></Marker>
        <Marker icon={ICON} position={[marker6.lat,marker6.lng]}></Marker>
        <Marker icon={ICON} position={[marker7.lat,marker7.lng]}></Marker>
        <Marker icon={ICON} position={[marker8.lat,marker8.lng]}></Marker>
        <Marker icon={ICON} position={[marker9.lat,marker9.lng]}></Marker>
        <Marker icon={ICON} position={[marker10.lat,marker10.lng]}></Marker>
        <Marker icon={ICON} position={[marker11.lat,marker11.lng]}></Marker>
      </MapContainer>
    </React.Fragment>
  );
};

export default Map;