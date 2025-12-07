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
  return (
    <div
      className={`absolute w-screen h-screen bg-secondary ${closing ? 'menu-exit' : 'menu-enter'}`}
      onClick={onClose}
    >
      <ul className="flex flex-col items-center justify-center h-full gap-[3rem]">
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
    </div>
  );
};

export default Menu;
