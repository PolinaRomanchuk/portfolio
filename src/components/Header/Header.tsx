import { useEffect, useState, type ReactElement } from 'react';
import Logo from '../../assets/logo.svg';
import Menu from '../Home/Menu';

const Header = (): ReactElement => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const handleMenuToggle = () => {
    if (isMenuOpen) {
      setClosing(true);
    } else {
      setIsMenuOpen(true);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (closing) {
      const timer = setTimeout(() => {
        setClosing(false);
        setIsMenuOpen(false);
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [closing]);

  return (
    <>
      <header className="relative">
        <div className="container flex items-center justify-between  bg-secondary min-h-[6rem]">
          <div className="p-8">
            <img src={Logo} alt="logo" className="w-[2rem] h-[2rem] " />
          </div>

          <nav className="min-w-[44.6rem] hidden md:block">
            <ul className="flex items-center justify-around 2-full">
              <li>
                <a href="#about" className="base text-light ">
                  about me
                </a>
              </li>
              <li>
                <a href="#portfolio" className="base text-light ">
                  portfolio
                </a>
              </li>
              <li>
                <a href="#price" className="base text-light ">
                  price
                </a>
              </li>
              <li>
                <a href="#faq" className="base text-light ">
                  faq
                </a>
              </li>
              <li>
                <a href="#contacts" className="base text-light ">
                  contacts
                </a>
              </li>
            </ul>
          </nav>

          <button
            onClick={handleMenuToggle}
            className="md:hidden w-8 h-8 relative flex flex-col justify-center items-end gap-[0.6rem] px-[2rem] cursor-pointer"
          >
            <span
              className={`block h-[0.2rem] bg-light transform transition-all duration-300 ease-in-out
      ${isMenuOpen ? 'rotate-45 absolute top-1/2 left-0 w-8 translate-y-[-50%]' : 'w-[1.2rem]'}`}
            ></span>
            <span
              className={`block h-[0.2rem] bg-light transform transition-all duration-300 ease-in-out
      ${isMenuOpen ? '-rotate-45 absolute top-1/2 left-0 w-8 translate-y-[-50%]' : 'w-8'}`}
            ></span>
          </button>
        </div>
      </header>

      {isMenuOpen && <Menu onClose={handleMenuToggle} closing={closing} />}
    </>
  );
};

export default Header;
