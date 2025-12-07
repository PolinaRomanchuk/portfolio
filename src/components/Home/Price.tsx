import type { ReactElement } from 'react';
import PriceCard from './PriceCard';
import { cards } from '../../data/price';

type PriceProps = { setIsModalOpen: (isOpen: boolean) => void };

const Price = ({ setIsModalOpen }: PriceProps): ReactElement => {
  return (
    <section
      className="container py-[6rem] px-[2rem] min-h-[73.6rem] flex flex-col gap-[4rem]"
      id="price"
    >
      <div className="gap-[1.2rem] h-[7.6rem]">
        <h2 className="h2">Packages & Pricing</h2>
        <p className="body-base">
          Choose the package that suits your story. All options are customizable
          to your needs.
        </p>
      </div>
      <div className="flex justify-content-center gap-[4rem]">
        {cards.map((card) => (
          <PriceCard
            name={card.name}
            description={card.description}
            price={card.price}
            purpose={card.purpose}
            key={card.name}
            setIsModalOpen={setIsModalOpen}
          />
        ))}
      </div>
    </section>
  );
};

export default Price;
