import { ApolloProvider } from '@apollo/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import CLIENT from '@/apollo/client';

import reportWebVitals from './reportWebVitals';
import { ROUTER } from './router/router';
import { store } from './store/store';
import THEME from './theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={THEME}>
      <ApolloProvider client={CLIENT}>
        <CssBaseline />
        <Provider store={store}>
          <RouterProvider router={ROUTER} />
        </Provider>
      </ApolloProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
