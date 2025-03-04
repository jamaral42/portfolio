import './index.css';
import { FC, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Portfolio = lazy(() => import('./pages/Portfolio'));

const Loading: FC = () => <div>Loading...</div>;

const App: FC = () => (
  <BrowserRouter>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<Portfolio />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
