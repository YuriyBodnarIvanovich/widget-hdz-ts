import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'regenerator-runtime/runtime'


// const WidgetDivs = document.querySelectorAll('.hbz_widget')

// WidgetDivs.forEach(Div => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <App domElement={Div}/>
//       </Provider>
//     </React.StrictMode>,
//     Div
//   );
// })
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
        <App/>
      </Provider>
  </StrictMode>,
	document.getElementById('hbz_widget'),
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
