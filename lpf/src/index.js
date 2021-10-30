import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ProgressContextProvider } from './store/progress_context'
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <ProgressContextProvider>
            <App />
        </ProgressContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
