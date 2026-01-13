import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserContextProvider from './contexts/UserContext';

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </React.StrictMode>
  );
}
