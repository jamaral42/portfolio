import './index.css';
import { FC, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Footer from './components/portfolio/Footer';
import CookieBanner from './components/portfolio/CookiesBanner';

const Portfolio = lazy(() => import('./pages/Portfolio'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));

const Loading: FC = () => <div>Loading...</div>;

const App: FC = () => (
  <I18nextProvider i18n={i18n}>
    <Suspense fallback={<Loading />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<Portfolio />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
        <Footer />
        <CookieBanner />
      </BrowserRouter>
    </Suspense>
  </I18nextProvider>
);

export default App;