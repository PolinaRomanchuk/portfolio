import { useState, type ReactElement } from 'react';
import Plus from '../../assets/plus.svg';
import Minus from '../../assets/minus.svg';

type QuestionProps = {
  name: string;
  answer: string;
};

const Question = ({ name, answer }: QuestionProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: '1px solid #ffffff',
        minHeight: '64px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="h3">{name}</h3>
        <button
          onClick={() => {
            setIsOpen((prew) => !prew);
          }}
          style={{ background: 'unset', border: 'unset' }}
        >
          {isOpen ? (
            <img src={Minus} alt="minus" />
          ) : (
            <img src={Plus} alt="plus" />
          )}
        </button>
      </div>
      {isOpen && <div className="body-base py-2">{answer}</div>}
    </div>
  );
};
export default Question;
