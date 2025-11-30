import type { ReactElement } from 'react';
import Logo from '../../assets/logo.svg';

const Header = (): ReactElement => {
  return (
    <header>
      <div className="container flex items-center justify-between bg-secondary p-5">
        <img src={Logo} alt="logo" />

        <nav>
          <ul className="flex items-center gap-10">
            <li>
              <a href="#" className="base text-light ">
                about me
              </a>
            </li>
            <li>
              <a href="#" className="base text-light ">
                portfolio
              </a>
            </li>
            <li>
              <a href="#" className="base text-light ">
                price
              </a>
            </li>
            <li>
              <a href="#" className="base text-light ">
                faq
              </a>
            </li>
            <li>
              <a href="#" className="base text-light ">
                contacts
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
