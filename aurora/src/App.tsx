import React from 'react';
import Routes from './routes';
import './screens/stylesScreens/sytles';
import GlobalStyles from './assets/GlobalStyles/globalStyles';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
     <BrowserRouter>
         <Routes />
     </BrowserRouter>
        <GlobalStyles />
    </>
  );
}

export default App;
