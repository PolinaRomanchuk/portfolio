import { useEffect, useState, type ReactElement } from 'react';
import Header from '../Header/Header';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Price from './Price';
import FAQ from './FAQ';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';

const Home = (): ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [isModalOpen]);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Price setIsModalOpen={setIsModalOpen} />
      <FAQ />
      <Footer />

      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

export default Home;
