import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AuthProvider from './auth/AuthProvider';
import router from './route/Route';
import { Toaster } from 'react-hot-toast';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

      <RouterProvider router={router} />
      <Toaster/>
    </AuthProvider>
  </React.StrictMode>
)
