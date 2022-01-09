import { HashRouter, Routes, Route } from 'react-router-dom';
import Chart from './routes/Chart';
import Coin from './routes/Coin';
import Coins from './routes/Coins';
import Price from './routes/Price';

function Router() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/:coinId/*' element={<Coin />}>
          <Route path='chart' element={<Chart />} />
          <Route path='price' element={<Price />} />
        </Route>
        <Route path='/' element={<Coins />} />
      </Routes>
    </HashRouter>
  );
}

export default Router;
