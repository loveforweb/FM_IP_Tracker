// import { isIPAddress } from 'ip-address-validator';
import { isIP } from 'is-ip';

const getGeoUrl = (value: string) => {
  const geoipifyUrl =
    'https://geo.ipify.org/api/v2/country,city?apiKey=at_ofwzoTGMpUp22yFAeCeZw4umw0ejc';

  if (isIP(value)) {
    return `${geoipifyUrl}&ipAddress=${value}`;
  } else {
    return `${geoipifyUrl}&domain=${value}`;
  }
};

export const geoFetch = async (inputValue: string) => {
  const geoUrl = getGeoUrl(inputValue);

  const response = await fetch(geoUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.code) {
        return data;
      }

      return {
        ip: data.ip,
        isp: data.isp,
        ...data.location,
      };
    })
    .catch((error) => {
      console.log(error);
      return error;
    });

  return response;
};

export const getIpAddress = async () => {
  return await fetch(`https://api.ipify.org?format=json`)
    .then((response) => response.json())
    .then((data) => {
      return data.ip;
    })
    .catch((error) => {
      console.log(error);
    });
};
