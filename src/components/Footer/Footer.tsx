import type { ReactElement } from 'react';
import Connection from './Connection';
import Contact from './Contact';

const Footer = (): ReactElement => {
  return (
    <footer className="container">
      <Connection />
      <Contact />
    </footer>
  );
};
export default Footer;
