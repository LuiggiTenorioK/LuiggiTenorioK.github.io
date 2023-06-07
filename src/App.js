import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import './variables.css'
import Landing from './views/Landing';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AutosubmitGraph from './views/AutosubmitGraph';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Landing />,
    },
    {
        path: "/autosubmit-graph",
        element: <AutosubmitGraph />
    }
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
