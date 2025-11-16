import type { ReactElement } from 'react';
import Header from '../Header/Header';
import Hero from './Hero';
import About from './About';
import Portfolio from './Portfolio';
import Price from './Price';
import FAQ from './FAQ';

const Home = (): ReactElement => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Portfolio />
      <Price />
      <FAQ />
    </>
  );
};

export default Home;
