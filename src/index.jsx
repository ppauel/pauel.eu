import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Navigate,
    Route,
    RouterProvider,
} from "react-router-dom";
import './style/main.css';
import App from './App';

// Router
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<App />} errorElement={<Navigate replace to="/" />} />
    )
);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);