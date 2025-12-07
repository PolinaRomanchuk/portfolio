import { useEffect, type ReactElement } from 'react';

type MenuProps = {
  closing: boolean;
  onClose: () => void;
};

const Menu = ({ closing, onClose }: MenuProps): ReactElement => {
  useEffect(() => {
    document.body.classList.toggle('no-scroll', !closing);
    return () => document.body.classList.remove('no-scroll');
  }, [closing]);
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 250);
  };

  return (
    <div
      className={`absolute w-screen h-screen bg-secondary ${closing ? 'menu-exit' : 'menu-enter'}`}
      onClick={onClose}
    >
      <ul className="flex flex-col items-center justify-center h-full gap-[3rem]">
        <li>
          <a
            href="#about"
            className="base text-light user-clicked"
            onClick={(e) => handleClick(e, 'about')}
          >
            about me
          </a>
        </li>
        <li>
          <a
            href="#portfolio"
            className="base text-light user-clicked"
            onClick={(e) => handleClick(e, 'portfolio')}
          >
            portfolio
          </a>
        </li>
        <li>
          <a
            href="#price"
            className="base text-light user-clicked"
            onClick={(e) => handleClick(e, 'price')}
          >
            price
          </a>
        </li>
        <li>
          <a
            href="#faq"
            className="base text-light user-clicked"
            onClick={(e) => handleClick(e, 'faq')}
          >
            faq
          </a>
        </li>
        <li>
          <a
            href="#contacts"
            className="base text-light user-clicked"
            onClick={(e) => handleClick(e, 'contacts')}
          >
            contacts
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
