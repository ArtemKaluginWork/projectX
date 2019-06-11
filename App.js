import React, { memo } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import './src/localization';
import AppNavigator from './src/navigation';
import persistedStore from './src/redux/store';
import ThemeContextProvider from './src/theme';

const { store, persistor } = persistedStore;

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeContextProvider>
          <AppNavigator />
        </ThemeContextProvider>
      </PersistGate>
    </Provider>
  );
}

export default memo(App);
