import React from 'react';
import AppNavigation from './src/core/navigator/AppNavigation';
import 'react-native-gesture-handler';
import { ThemeProvider } from '@rneui/themed';
import { AppTheme } from './src/core/Theme/CoreTheme';
import { DBMigrations } from './src/core/localDatabase/orm/DBMigrations';

export default function App() {
  DBMigrations.migrate();
  return (
    <ThemeProvider theme={AppTheme}>
      <AppNavigation></AppNavigation>
    </ThemeProvider>
  );
}
