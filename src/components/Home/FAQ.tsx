import type { ReactElement } from 'react';
import { questions } from '../../data/questions';
import Question from './Question';

const FAQ = (): ReactElement => {
  return (
    <section
      className="container  bg-secondary flex min-h-[72.4em] px-[2rem] py-[6rem] gap-[4rem]"
      id="faq"
    >
      <div className="min-w-[68rem]">
        <h2 className="h2 text-light">Frequently Asked Questions</h2>
        <p className="body-base text-light">
          Everything You Wanted to Ask (and a Bit More)
        </p>
      </div>
      <div className="min-w-[68rem] text-light">
        {questions.map((question) => (
          <Question
            name={question.name}
            answer={question.answer}
            key={question.name}
          />
        ))}
      </div>
    </section>
  );
};
export default FAQ;
