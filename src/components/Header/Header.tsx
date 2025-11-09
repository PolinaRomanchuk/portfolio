import type { ReactElement } from 'react';
import Logo from '../../assets/logo.svg';

const Header = (): ReactElement => {
  return (
    <header className="container-xl bg-secondary p-3 d-flex justify-content-between">
      <div className="d-flex align-items-center">
        <img src={Logo} alt="logo" />
      </div>
      <nav className="d-flex">
        <ul className="d-flex gap-5">
          <li>
            <a href="#" className="base text-light">
              about me
            </a>
          </li>
          <li>
            <a href="#" className="base text-light">
              portfolio
            </a>
          </li>
          <li>
            <a href="#" className="base text-light">
              price
            </a>
          </li>
          <li>
            <a href="#" className="base text-light">
              faq
            </a>
          </li>
          <li>
            <a href="#" className="base text-light">
              contacts
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Header;
