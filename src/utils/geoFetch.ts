export const geoFetch = async (ipAddress: string) => {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_ofwzoTGMpUp22yFAeCeZw4umw0ejc&ipAddress=${ipAddress}`
  )
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
