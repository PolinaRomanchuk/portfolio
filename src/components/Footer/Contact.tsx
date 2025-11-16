import type { ReactElement } from 'react';

const Contact = (): ReactElement => {
  return (
    <div
      className="bg-secondary text-light w-100 d-flex justify-content-center align-items-center gap-5"
      style={{ height: '100px' }}
    >
      <span className="base">instagram</span>
      <span className="base">telegram</span>
      <span className="base">whatsapp</span>
      <span className="base">Europe</span>
      <span className="base">+1 234 9843572</span>
    </div>
  );
};
export default Contact;
