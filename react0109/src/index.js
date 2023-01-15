import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { FavoritesContextProvider } from './store/favorites-context';
//이거 함수인데 왜 이렇게 됨? 아.. 객체는 상태, 함수는 JSX로 해석되는 html태그였지..

ReactDOM.render(
    <FavoritesContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </FavoritesContextProvider>,
     document.getElementById('root')
);
