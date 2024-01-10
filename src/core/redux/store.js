import { configureStore } from '@reduxjs/toolkit'
import userSlice from './slices/userSlice'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer, persistStore } from 'redux-persist'

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
}

const userReducer = persistReducer(userPersistConfig, userSlice)

const store = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

const persistor = persistStore(store);

export { store, persistor }