// import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { AuthProvider } from './components/AuthProvider/AuthProvider.tsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.ts';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
  <I18nextProvider i18n={i18n}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </I18nextProvider>,
  //</React.StrictMode>,
);
