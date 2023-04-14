import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    RouterProvider,
} from 'react-router-dom';
import App from './App';
import './style/main.css';

/**
 * React Router
 */
const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<Navigate replace to='/' />} />
));

/* Render */
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);