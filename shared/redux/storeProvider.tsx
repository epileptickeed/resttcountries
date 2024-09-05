'use client';

import { store } from './store';
import { Provider } from 'react-redux';

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
