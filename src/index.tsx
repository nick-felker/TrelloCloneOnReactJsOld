import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { store, persistor } from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      persistor={persistor}
      loading = {null}
    >
       <App />
    </PersistGate>
  </Provider>
  ,
  document.getElementById('root')
);
