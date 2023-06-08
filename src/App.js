import React from 'react';
import './App.css';
import './variables.css'
import Landing from './views/Landing';
import { HashRouter, Routes, Route } from 'react-router-dom';
import AutosubmitGraph from './views/AutosubmitGraph';

function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="autosubmitgraph" element={<AutosubmitGraph />} />
            </Routes>
        </HashRouter>
    );
}

export default App;
