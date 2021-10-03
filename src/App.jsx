import React from 'react';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux-store/store';

import { AppRouter } from 'routes';
import ThemeWrapper from './ThemeWrapper';

import 'assets/styles/global.css';

function App() {
  return (
    <>
      <Helmet>
        <title>Chinmay Vibhute - chinmayvib.dev</title>
        <link rel="canonical" href="https://chinmayvib.dev" />
        <meta name="description" content="Chinmay Vibhute's Website" />
      </Helmet>

      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ThemeWrapper>
            <AppRouter />
          </ThemeWrapper>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
