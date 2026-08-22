import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Main from './Pages/Main'
import AboutPage from './Pages/AboutPage'
import RoadmapPage from './Pages/RoadmapPage'
import TeamPage from './Pages/TeamPage'
import FacqsPage from './Pages/FacqsPage'
import L_Main from './Pages/L_Main'
import BlogPage from './Pages/BlogPage'
import Login from './Sections/Login'
import ContectwithMembers from './Sections/ContectwithMembers'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Main /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'roadmap', element: <RoadmapPage /> },
      { path: 'login', element: <Login /> },
      { path: 'team', element: <TeamPage /> },
      { path: 'faqs', element: <FacqsPage /> },
      { path: 'contectwithmembers', element: <ContectwithMembers /> },
      { path: 'after_login', element: <L_Main /> },
      { path: 'blogs', element: <BlogPage /> },
    ],
  },
], {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true,
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
