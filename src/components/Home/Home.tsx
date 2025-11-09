import type { ReactElement } from 'react';
import Header from '../Header/Header';
import Hero from './Hero';

const Home = (): ReactElement => {
  return (
    <>
      <Header />
      <Hero />
    </>
  );
};

export default Home;
