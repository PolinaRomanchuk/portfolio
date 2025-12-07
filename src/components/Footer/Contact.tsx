import type { ReactElement } from 'react';

const Contact = (): ReactElement => {
  return (
    <div className="flex items-center justify-center w-full bg-secondary text-light min-h-[10rem]">
      <div className="base px-[2rem] cursor-pointer hover:text-primary">
        instagram
      </div>
      <div className="base px-[2rem] cursor-pointer hover:text-primary">
        telegram
      </div>
      <div className="base px-[2rem] cursor-pointer hover:text-primary">
        whatsapp
      </div>
      <div className="base px-[2rem] cursor-pointer hover:text-primary">
        Europe
      </div>
      <div className="base px-[2rem] cursor-pointer hover:text-primary">
        +1 234 9843572
      </div>
    </div>
  );
};
export default Contact;
