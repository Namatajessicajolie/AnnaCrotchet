import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './nav-bar';
import Card from './cards'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <Navbar/>
    < div> 
    < Card id={products[0].id} name={products[0].productname} email={product[0].email}/>
    < Card id = {
      products[0].id
    }
    name = {
      products[0].productname
    }
    email = {
      product[0].email
    }
    />
    < Card id={products[0].id} name={products[0].productname} email={product[0].email}/>
    < Card id={products[1].id} name={products[1].productname} email={product[1].email}/>
    < Card id={products[2].id} name={products[2].productname} email={product[02].email}/>
    </div>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
