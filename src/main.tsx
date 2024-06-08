import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import App from './App.tsx'
import ErrorPage from './pages/ErrorPage.tsx'
import Aboutme from './pages/About.tsx'
import How from './pages/How.tsx'
import Projects from './pages/Projects.tsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage /> 
  },
  {
    path: "aboutme",
    element: <Aboutme />,
    errorElement: <ErrorPage />
  },
  {
    path: "projects",
    element: <Projects />,
    errorElement: <ErrorPage />
  },
  {
    path: "how",
    element: <How />,
    errorElement: <ErrorPage />
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
