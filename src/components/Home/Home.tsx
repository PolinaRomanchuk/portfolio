import type { ReactElement } from 'react';
import Header from '../Header/Header';
import Hero from './Hero';
import About from './About';

const Home = (): ReactElement => {
  return (
    <>
      <Header />
      <Hero />
      <About />
    </>
  );
};

export default Home;
