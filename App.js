import React, { useEffect, useState } from 'react';
import AppNavigation from './src/core/navigator/AppNavigation';
import 'react-native-gesture-handler';
import { ThemeProvider } from '@rneui/themed';
import { AppTheme } from './src/core/Theme/CoreTheme';
import { DBMigrations } from './src/core/localDatabase/orm/DBMigrations';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/core/redux/store';

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    if (!loaded) {
      DBMigrations.migrate().then(() => {
        setLoaded(true);
      }).catch(() => {
        setLoaded(true);
      });
    }
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={AppTheme}>
          {
            loaded &&
            <AppNavigation></AppNavigation>
          }
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
