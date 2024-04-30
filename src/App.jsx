import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './global-styles.css'; // Import global styles

import Portfolio from './Portfolio';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Portfolio />} />
            </Routes>
        </Router>
    );
}

export default App;
