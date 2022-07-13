import { ReactElement } from 'react';
import { IpDataType } from '../../pages';

const TrackingInfo = ({ ...ipData }: IpDataType): ReactElement => {
  const { country, region, timezone, isp, ip, city } = ipData;

  return (
    <div className="absolute top-3/4 max-w-[1110px] px-5 w-full z-[1000]">
      <div className=" text-center md:text-left md:divide-x justify-evenly flex bg-white w-full py-8 px-8 r-0 l-0 md:min-h-40 rounded-2xl flex-wrap md:flex-nowrap">
        <div className="ip-address flex flex-col w-full md:w-2/4 lg:w-full mb-2 md:mb-0 md:pr-8">
          <span className="text-slate-400 uppercase font-bold text-xs md:text-sm block md:mb-3">
            IP Address
          </span>
          <span className="text-lg md:text-2xl font-bold">{ip}</span>
        </div>
        <div className="location flex flex-col w-full md:w-2/4 lg:w-full mb-2 md:mb-0 md:px-8">
          <span className="text-slate-400 uppercase font-bold text-xs md:text-sm block md:mb-3">
            Location
          </span>
          <span className="text-lg md:text-2xl font-bold">
            {city}
            {region ? `, ${region}, ${country}` : `, ${country}`}
          </span>
        </div>
        <div className="timezone flex flex-col w-full md:w-2/4 lg:w-full mb-2 md:mb-0 md:px-8">
          <span className="text-slate-400 uppercase font-bold text-xs md:text-sm block md:mb-3">
            Timezone
          </span>
          <span className="text-lg md:text-2xl font-bold">UTC {timezone}</span>
        </div>
        <div className="isp flex flex-col w-full md:w-2/4 lg:w-full md:pl-8">
          <span className="text-slate-400 uppercase font-bold text-xs md:text-sm block md:mb-3">
            ISP
          </span>
          <span className="text-lg md:text-2xl font-bold">{isp}</span>
        </div>
      </div>
    </div>
  );
};

export default TrackingInfo;
