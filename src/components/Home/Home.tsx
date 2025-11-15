import type { ReactElement } from 'react';
import Header from '../Header/Header';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';

const Home = (): ReactElement => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
    </>
  );
};

export default Home;
