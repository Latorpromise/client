import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import App from './App';
import Register from './pages/Register';
import Login from './pages/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />
  },
  {
    path: "Register",
    element: <Register />
  },
  {
    path: "Login",
    element: <Login />
  },

])



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
