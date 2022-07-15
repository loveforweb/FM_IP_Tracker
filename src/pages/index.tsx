import { useEffect, useState } from 'react';

/* Components */
import TrackingInfo from '../components/TrackingInfo';
import Footer from '../components/Footer';
import SearchForm from '../components/SearchForm';
import Map from '../components/Map';
import { geoFetch, getIpAddress } from '../utils/geoFetch';
import Message from '../components/Message';

export type IpDataType = {
  ip?: string;
  country?: string;
  region?: string;
  timezone?: string;
  isp?: string;
  lat: number;
  lng: number;
  city?: string;
};

const defaultIpData = {
  lat: 37.38605,
  lng: -122.08385,
};

const defaultError = {
  code: null,
  messages: '',
};

const Home = () => {
  const [ipData, setIpData] = useState<IpDataType>(defaultIpData);
  const [userIp, setUserIp] = useState<string | null>();
  const [error, setError] = useState(defaultError);

  useEffect(() => {
    const getData = async () => {
      const ipAddress = await getIpAddress();
      const geoResponse = await geoFetch(ipAddress);

      if (geoResponse.code) {
        setError(geoResponse);
        return;
      }

      setIpData(geoResponse);
      setUserIp(ipAddress);
    };

    getData();
  }, []);

  const handleFormSubmit = async (ipAddress: string) => {
    const geoResponse = await geoFetch(ipAddress);

    if (geoResponse.code) {
      setError(geoResponse);
      return;
    }

    setIpData(geoResponse);
  };

  const getUsersIpAddress = async () => {
    setUserIp(null);
    const ipAddressResponse = await getIpAddress();
    setUserIp(ipAddressResponse);
  };

  const clearError = () => {
    setError(defaultError);
    setUserIp(null);
  };

  return (
    <div>
      <main>
        <div className="top-content bg-[url('../images/pattern-bg.png')] flex justify-center items-center flex-col pt-6 relative pb-24">
          <h1 className="text-white font-sans text-[32px] font-bold mb-5">
            IP Address Tracker
          </h1>
          <SearchForm handleFormSubmit={handleFormSubmit} userIp={userIp} />
          {error?.code && (
            <Message message={error.messages} clearAction={clearError} />
          )}
          <div className="text-center text-white">
            <button onClick={getUsersIpAddress}>Whats my IP Address?</button>
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
