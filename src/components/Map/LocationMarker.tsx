import { ReactElement, useEffect } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';

/* Components */
import { MapProps } from './Map';

const LocationMarker = ({ ipData }: MapProps): ReactElement => {
  const { lat, lng, city, region, country } = ipData;
  const map = useMap();

  useEffect(() => {
    var targetPoint = map.project({ lat, lng }, 13).subtract([0, 200 / 2]),
      targetLatLng = map.unproject(targetPoint, 13);

    map.setView(targetLatLng, 13);
  }, [ipData, lat, lng, map]);

  const markerIcon = () => {
    return L.icon({
      iconUrl: '../images/icon-location.svg',
      iconSize: [46, 56],
      iconAnchor: [20, 56],
    });
  };

  return (
    <Marker position={[lat, lng]} icon={markerIcon()}>
      <Popup>
        {city} {region ? `, ${region}, ${country}` : `, ${country}`}
      </Popup>
    </Marker>
  );
};

export default LocationMarker;
