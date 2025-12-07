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
    <div className="border-b-light border-b-1 min-h-[6.4rem] flex flex-col justify-center gap-[2rem]">
      <div className="flex items-center justify-between py-[1.2rem]">
        <h3 className="h3">{name}</h3>
        <button
          onClick={() => {
            setIsOpen((prew) => !prew);
          }}
          className="p-0 m-0 bg-transparent border-0 cursor-pointer"
        >
          {isOpen ? (
            <img src={Minus} alt="minus" />
          ) : (
            <img src={Plus} alt="plus" />
          )}
        </button>
      </div>
      {isOpen && <div className="body-base">{answer}</div>}
    </div>
  );
};
export default Question;
