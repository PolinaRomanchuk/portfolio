import { useState, type ReactElement } from 'react';
import Plus from '../../assets/plus.svg?react';
import Minus from '../../assets/minus.svg?react';

type QuestionProps = {
  name: string;
  answer: string;
};

const Question = ({ name, answer }: QuestionProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b-light border-b-1 min-h-[6.4rem] flex flex-col justify-center gap-[2rem]">
      <div
        className="flex items-center justify-between py-[1.2rem] user-clicked svg"
        onClick={() => {
          setIsOpen((prew) => !prew);
        }}
      >
        <h3 className="h3">{name}</h3>
        <button className="p-0 m-0 bg-transparent border-0 cursor-pointer">
          {isOpen ? <Minus /> : <Plus />}
        </button>
      </div>
      {isOpen && <div className="body-base">{answer}</div>}
    </div>
  );
};
export default Question;
