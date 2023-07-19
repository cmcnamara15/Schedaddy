import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom'; 
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
