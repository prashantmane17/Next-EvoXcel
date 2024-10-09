
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../context/store';
import '../styles/globals.css'; // Optional: global styles
import Signin from './SignIn';

const MyApp = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
       <Signin/>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
