import React, { useEffect, useState } from 'react';
import AppNavigation from './src/core/navigator/AppNavigation';
import 'react-native-gesture-handler';
import { ThemeProvider } from '@rneui/themed';
import { AppTheme } from './src/core/Theme/CoreTheme';
import { DBMigrations } from './src/core/localDatabase/orm/DBMigrations';

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
    <ThemeProvider theme={AppTheme}>
      {
        loaded &&
        <AppNavigation></AppNavigation>
      }
    </ThemeProvider>
  );
}
