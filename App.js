import React from 'react';
import {Provider} from 'react-redux';

import configureStore from './src/store';
import LoginScreen from './src/';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store} >
      <LoginScreen />
    </Provider>
  );
}
