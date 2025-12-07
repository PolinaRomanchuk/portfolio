import type { ReactElement } from 'react';

type PriceCard = {
  name: string;
  description: string[];
  price: string;
  purpose: string;
  setIsModalOpen: (isOpen: boolean) => void;
};

const PriceCard = ({
  name,
  description,
  price,
  purpose,
  setIsModalOpen,
}: PriceCard): ReactElement => {
  return (
    <div
      className="group border-dark border-[0.1rem] p-[2.4rem] w-[32rem] h-[50rem] flex flex-col justify-between hover:border-primary transition-all cursor-pointer duration-300"
      onClick={() => {
        setIsModalOpen(true);
      }}
    >
      <div className="gap-[1.2rem] flex flex-col  w-[27.2rem]">
        <h3 className="h3">{name}</h3>
        <ul className="flex flex-col gap-[0.4rem]">
          {description.map((desc) => (
            <li key={desc} className="body-base">
              <span className="w-[6px] h-[6px] bg-secondary inline-block"></span>
              <span> {desc}</span>
            </li>
          ))}
        </ul>
        <h4 className="h4">{price}</h4>
      </div>
      <div className="h-[11.2rem] flex flex-col justify-end gap-[1.2rem]">
        <div className="body-base-italic">{purpose}</div>
        <button className="min-w-[20rem] min-h-[6rem] w-[27.2rem]  px-[2rem] bg-secondary cursor-pointer transition-colors transition-transform duration-300 ease-in-out transform group-hover:scale-[1.03] group-hover:bg-primary">
          <span className="base text-light">book now</span>
        </button>
      </div>
    </div>
  );
};
export default PriceCard;
