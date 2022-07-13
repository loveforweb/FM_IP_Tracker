import { useState } from 'react';

/* Components */
import TrackingInfo from '../components/TrackingInfo';
import Footer from '../components/Footer';
import SearchForm from '../components/SearchForm';
import Map from '../components/Map';

export type IpDataType = {
  ip: string;
  country: string;
  region: string;
  timezone: string;
  isp: string;
  lat: number;
  lng: number;
  city: string;
};

const defaultIpData = {
  ip: '8.8.8.8',
  isp: 'Google LLC',
  country: 'US',
  region: 'California',
  city: 'Mountain View',
  lat: 37.38605,
  lng: -122.08385,
  postalCode: '94035',
  timezone: '-07:00',
};

const Home = () => {
  const [ipData, setIpData] = useState<IpDataType>(defaultIpData);
  const [userIp, setUserIp] = useState<string | null>();

  const handleFormSubmit = async (ipAddress: string) => {
    await fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=at_ofwzoTGMpUp22yFAeCeZw4umw0ejc&ipAddress=${ipAddress}`
    )
      .then((response) => response.json())
      .then((data) => {
        const dataSet = {
          ip: data.ip,
          isp: data.isp,
          ...data.location,
        };
        setIpData(dataSet);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getIp = () => {
    setUserIp(null);
    fetch(`https://api.ipify.org?format=json`)
      .then((response) => response.json())
      .then((data) => {
        setUserIp(data.ip);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <main>
        <div className="top-content bg-[url('../images/pattern-bg.png')] flex justify-center items-center flex-col pt-6 relative pb-24">
          <h1 className="text-white font-sans text-[32px] font-bold mb-5">
            IP Address Tracker
          </h1>
          <SearchForm handleFormSubmit={handleFormSubmit} userIp={userIp} />
          <div className="text-center text-white">
            <button onClick={getIp}>Whats my IP Address?</button>
          </div>
          {ipData?.ip && <TrackingInfo {...ipData} />}
        </div>
        <div className="map-container">
          <Map ipData={ipData} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
