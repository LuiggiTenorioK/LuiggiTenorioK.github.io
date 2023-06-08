import React, { Profiler } from 'react';
import './App.css';
import './variables.css'
import Landing from './views/Landing';
import { HashRouter, Routes, Route } from 'react-router-dom';
import AutosubmitGraph from './views/AutosubmitGraph';

function App() {
    function onRender(id, phase, actualDuration, baseDuration, startTime, commitTime) {
        console.log(`${id}'s ${phase} phase:`);
        console.log(`Actual time: ${actualDuration}`);
        console.log(`Base time: ${baseDuration}`);
        console.log(`Start time: ${startTime}`);
        console.log(`Commit time: ${commitTime}`);
    }
    return (
        <Profiler id="App" onRender={onRender}>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="autosubmitgraph" element={<AutosubmitGraph />} />
                </Routes>
            </HashRouter>
        </Profiler>
    );
}

export default App;
