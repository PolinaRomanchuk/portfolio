import type { ReactElement } from 'react';

const Contact = (): ReactElement => {
  return (
    <div className="flex items-center justify-center w-full bg-secondary text-light min-h-[10rem]">
      <div className="base px-[2rem]">instagram</div>
      <div className="base px-[2rem]">telegram</div>
      <div className="base px-[2rem]">whatsapp</div>
      <div className="base px-[2rem]">Europe</div>
      <div className="base px-[2rem]">+1 234 9843572</div>
    </div>
  );
};
export default Contact;
