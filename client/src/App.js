import React, { useEffect, useState } from 'react';
import showRoutes from './ultils/showRoutes';
import routes from './routes';
import { BrowserRouter, } from 'react-router-dom'
import { Provider } from 'react-redux';
import jwt_decode from 'jwt-decode';
import store from './Store';

function App() {
  useEffect(() => {
    const token = localStorage.getItem('jwt');
    console.log(token)
    if (token) {
      const decode = jwt_decode(token);
      const currentTime = Date.now() / 1000;
      if (currentTime > decode.exp) {
        localStorage.removeItem('jwt');
        window.location.href = '/'
      } else {

      }
    }
  }, [])
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          {showRoutes(routes)}
        </div>
      </Provider>
    </BrowserRouter>

  );
}
export default App;
