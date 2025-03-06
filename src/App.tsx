import './index.css';
import { FC, lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Footer from './components/portfolio/Footer';
import CookieBanner from './components/portfolio/CookiesBanner'; // Load normally (NOT lazy)

const Portfolio = lazy(() => import('./pages/Portfolio'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));

const Loading: FC = () => <div>Loading...</div>;

const App: FC = () => (
  <I18nextProvider i18n={i18n}>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="*" element={<Portfolio />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </Suspense>
      {/* Ensure CookieBanner is always loaded */}
      <CookieBanner />
    </BrowserRouter>
    <Footer />
  </I18nextProvider>
);

export default App;