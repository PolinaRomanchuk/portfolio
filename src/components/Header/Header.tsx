import type { ReactElement } from 'react';
import Logo from '../../assets/logo.svg';

const Header = (): ReactElement => {
  return (
    <header>
      <div className="container flex items-center justify-between  bg-secondary min-h-[6rem]">
        <div className="p-8">
          <img src={Logo} alt="logo" className="w-[2rem] h-[2rem] " />
        </div>

        <nav className="min-w-[44.6rem]">
          <ul className="flex items-center justify-around 2-full">
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
