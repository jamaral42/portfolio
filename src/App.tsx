import './index.css';
import { FC, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import CookieBanner from './components/portfolio/CookiesBanner';

const Portfolio = lazy(() => import('./pages/Portfolio'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const Main = lazy(() => import('./pages/Main'));
const StockTracker = lazy(() => import('./pages/StockTracker'));
const Wordle = lazy(() => import('./components/wordle/Wordle'));

const App: FC = () => (
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="*" element={<Portfolio />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/main" element={<Main />} />
        <Route path="/wordle" element={<Wordle />} />
        <Route path="/stock-tracker" element={<StockTracker />} />
      </Routes>
      <CookieBanner />
    </BrowserRouter>
  </I18nextProvider>
);

export default App;