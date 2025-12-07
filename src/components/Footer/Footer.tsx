import type { ReactElement } from 'react';
import Connection from './Connection';
import Contact from './Contact';

const Footer = (): ReactElement => {
  return (
    <footer className="container" id="contacts">
      <Connection />
      <Contact />
    </footer>
  );
};
export default Footer;
