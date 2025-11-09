import { type ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import Home from './components/Home/Home';

const App = (): ReactElement => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
