import type { ReactElement } from 'react';

const inputStyle =
  'border-secondary border-1 px-[1.2rem] w-[38rem] h-[6rem] max-w-[38rem] base ';

const Connection = (): ReactElement => {
  return (
    <div className="flex flex-col items-center justify-center  min-h-[16.8rem] gap-[3rem]">
      <div>
        <h3 className="h3">Like my portfolio? Sign up for a shoot!</h3>
      </div>
      <div className="flex gap-[0.8rem]">
        <input type="text" placeholder="your name" className={inputStyle} />{' '}
        <input className={inputStyle} type="text" placeholder="+1" />{' '}
        <button className="px-[2rem] w-[20rem] h-[6rem] min-w-[20rem] bg-secondary cursor-pointer">
          <span className="text-light base">book now</span>
        </button>
      </div>
    </div>
  );
};
export default Connection;
