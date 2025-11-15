import type { ReactElement } from 'react';
import PriceCard from './PriceCard';
import { cards } from '../../data/price';

const Price = (): ReactElement => {
  return (
    <section className="container-xl py-4" style={{ height: '736px' }}>
      <div className="my-5 mx-2">
        <div className="d-flex flex-column gap-4">
          <h2 className="h2">Packages & Pricing</h2>
          <p className="body-base">
            Choose the package that suits your story. All options are
            customizable to your needs.
          </p>
        </div>
        <div className="py-4 d-flex gap-5 justify-content-center">
          {cards.map((card) => (
            <PriceCard
              name={card.name}
              description={card.description}
              price={card.price}
              purpose={card.purpose}
              key={card.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Price;
