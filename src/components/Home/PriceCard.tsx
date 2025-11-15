import type { ReactElement } from 'react';

type PriceCard = {
  name: string;
  description: string[];
  price: string;
  purpose: string;
};

const PriceCard = ({
  name,
  description,
  price,
  purpose,
}: PriceCard): ReactElement => {
  return (
    <div
      style={{
        border: '1px solid #222',
        padding: '24px',
        width: '320px',
        height: '500px',
      }}
    >
      <div className="d-flex flex-column justify-content-between h-100">
        <div className="d-flex gap-4 flex-column">
          <h3 className="h3">{name}</h3>
          <ul>
            {description.map((desc) => (
              <li key={desc}>{desc}</li>
            ))}
          </ul>
          <h4 className="h4">{price}</h4>
        </div>
        <div>
          <span className="body-base-italic">{purpose}</span>
          <button
            className="bg-secondary"
            style={{
              padding: '0px 20px',
              width: '272px',
              height: '60px',
              minWidth: '200px',
            }}
          >
            <span className="base text-light">book now</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default PriceCard;
