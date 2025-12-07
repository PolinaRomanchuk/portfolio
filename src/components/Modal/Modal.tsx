import { useEffect, useState, type ReactElement } from 'react';
import Close from '../../assets/close.svg';

type ModalProps = {
  setIsModalOpen: (isOpen: boolean) => void;
};

const Modal = ({ setIsModalOpen }: ModalProps): ReactElement => {
  const [closing, setClosing] = useState(false);

  const handleClose = () => {
    setClosing(true);

    setTimeout(() => {
      setIsModalOpen(false);
    }, 250);
  };
  const stopPropagation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };

    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
    <div
      className={`fixed inset-0 z-10 flex items-center justify-center w-screen h-screen bg-overlay
        ${closing ? 'modal-overlay-exit' : 'modal-overlay-enter'}
      `}
      onClick={handleClose}
    >
      <div
        className={`w-[34rem] sm:w-[50rem] py-[6rem] px-[2rem] bg-light relative flex flex-col items-center justify-center gap-[1.2rem] 
          ${closing ? 'modal-exit' : 'modal-enter'}
        `}
        onClick={stopPropagation}
      >
        <button
          className="absolute top-0 right-0 cursor-pointer p-[1.6rem]"
          onClick={handleClose}
        >
          <img src={Close} alt="close" />
        </button>
        <h3 className="text-center h3">
          Like my portfolio? Sign up for a shoot!
        </h3>
        <input
          type="text"
          placeholder="your name"
          className="border-secondary border-1 px-[1.2rem] w-[30rem] sm:w-[38rem]  h-[6rem] max-w-[38rem] base "
        />
        <input
          className="border-secondary border-1 px-[1.2rem] w-[30rem] sm:w-[38rem] h-[6rem] max-w-[38rem] base "
          type="text"
          placeholder="+1"
        />
        <button className="btn w-[30rem] sm:w-[38rem]">
          <span className="text-light base">book now</span>
        </button>
      </div>
    </div>
  );
};

export default Modal;
