// client/src/App.jsx
import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';

const App = () => {
  return (
    <div className="font-sans min-h-screen bg-gray-100 text-gray-800">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
