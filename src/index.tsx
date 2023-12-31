import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import './index.css';
import App from './component/App';
import reportWebVitals from './component/reportWebVitals';
import configureStore from './store/store';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
