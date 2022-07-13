import { ReactElement, useEffect, useState } from 'react';

type SearchFormProps = {
  handleFormSubmit: (ipAddress: string) => void;
  userIp?: string | null;
};

const SearchForm = ({
  handleFormSubmit,
  userIp,
}: SearchFormProps): ReactElement => {
  const [ipAddress, setIpAddress] = useState<string | null>(null);

  useEffect(() => {
    if (userIp) {
      setIpAddress(userIp);
    } else {
      setIpAddress(null);
    }
  }, [userIp]);

  const handleSearchSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (ipAddress) {
      handleFormSubmit(ipAddress);
    }
  };

  return (
    <form
      className="max-w-[553px] flex w-full mb-5 px-5 md:px-0"
      onSubmit={handleSearchSubmit}
    >
      <input
        onChange={(event) => setIpAddress(event.target.value)}
        value={ipAddress ? ipAddress : ''}
        placeholder="Search for any IP address or domain"
        type="text"
        className="w-full h-16 rounded-l-2xl px-4 border-transparent focus:border-transparent focus:ring-0 focus:outline-none focus-visible:ring-0"
      />
      <button
        type="submit"
        className="w-[63px] rounded-r-2xl bg-black disabled:bg-slate-400"
        disabled={!ipAddress}
      >
        <span className="sr-only">submit</span>
        <span className="flex text-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14">
            <path fill="none" stroke="#FFF" strokeWidth="3" d="M2 1l6 6-6 6" />
          </svg>
        </span>
      </button>
    </form>
  );
};

export default SearchForm;
