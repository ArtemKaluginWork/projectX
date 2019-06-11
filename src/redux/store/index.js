import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

import { version, build } from '@/app.json';
import rootReducer from 'reducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default (() => {
  const store = createStore(persistedReducer);
  const persistor = persistStore(store, null, () => {
    const { version: v, build: b } = store.getState().settings;
    if (version !== v || build !== b) persistor.purge();
  });
  return { store, persistor };
})();
