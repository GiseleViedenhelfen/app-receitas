import React from 'react';
import {
  BrowserRouter, Routes, Route, Navigate,
} from 'react-router-dom';
import HomePage from './pages/Home/Home';
import GlobalProvider from './context/provider';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/404" element={<NotFound />} />
          <Route exact path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>

  );
}

export default App;
