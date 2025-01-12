import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import { RouterProvider } from 'react-router-dom';
import { AllRoutes } from './Routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={AllRoutes}></RouterProvider>
  </React.StrictMode>,
)
