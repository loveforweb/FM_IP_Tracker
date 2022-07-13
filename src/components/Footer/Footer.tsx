import { ReactElement } from 'react';

const Footer = (): ReactElement => {
  return (
    <footer>
      <div className="text-sm text-center py-5">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a
          href="https://loveforweb.com"
          className="text-blue-500 hover:underline"
        >
          JC
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
