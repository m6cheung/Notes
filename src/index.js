import React from 'react';
import ReactDOM from 'react-dom/client';
import Notes from './components/Notes';
import { Provider } from 'react-redux';
import { store } from './store';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Notes />
    </Provider>
  </React.StrictMode>
);