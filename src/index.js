import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NavigationProvider } from './context/NavigationContext';
import { PracticeProvider } from './context/PracticeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <NavigationProvider>
        <App />
    </NavigationProvider>
    // <PracticeProvider>
    //     <App />
    // </PracticeProvider>
);
