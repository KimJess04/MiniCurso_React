import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import animales from './data/animales'; //importamos el array
import AnimalView from './views/AnimalView';

const routes = [
  {
    path: "/",
    element: <App />,
  },
];

animales.forEach((animal) => {
  routes.push ({
    path: animal.name,
    element: <AnimalView animal={animal} />,
  });
});

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
