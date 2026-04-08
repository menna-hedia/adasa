import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import Blog from './components/Blog/Blog'
import BlogDetails from './components/BlogDetails/BlogDetails'
import NotFound from './components/NotFound/NotFound';

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/blog", element: <Blog /> },
        { path: "/blog/:id", element: <BlogDetails /> },
        { path: "*", element: <NotFound /> }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App