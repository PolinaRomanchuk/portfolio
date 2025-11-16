import type { ReactElement } from 'react';
import { questions } from '../../data/questions';
import Question from './Question';

const FAQ = (): ReactElement => {
  return (
    <section
      className="container-xl p-4 bg-secondary d-flex"
      style={{ minHeight: '724px' }}
    >
      <div className="w-50 py-5 d-flex flex-column gap-4">
        <h2 className="h2 text-light">Frequently Asked Questions</h2>
        <p className="body-base text-light">
          Everything You Wanted to Ask (and a Bit More)
        </p>
      </div>
      <div className="text-light w-50 d-flex flex-column h-100 justify-content-between py-5 px-4">
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
