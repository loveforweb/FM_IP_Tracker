import { ReactElement } from 'react';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import LocationMarker from './LocationMarker';

export type MapProps = {
  ipData: {
    lat: number;
    lng: number;
    city: string;
    region: string;
    country: string;
  };
};

const Map = ({ ipData }: MapProps): ReactElement => {
  const { lat = 51.505, lng = -0.09 } = ipData;

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      style={{ height: 'calc(100vh - 292px)', width: '100%' }}
      zoomControl={false}
      scrollWheelZoom={false}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibG92ZWZvcndlYiIsImEiOiJja25oOG5vc3AyaW43Mm9tcjB3cWphMzZsIn0.qv3sGnNSCJ7BEcV-GI7eNw`}
        attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
      />
      <ZoomControl position="bottomright" />
      <LocationMarker ipData={ipData} />
    </MapContainer>
  );
};

export default Map;
