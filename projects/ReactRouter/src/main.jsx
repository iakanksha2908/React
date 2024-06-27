import React, { Children } from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'


const router = createBrowserRouter(

  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home/>
        },
        {
          path: "about",
          element: <About/>
        }
      ]
    }
  ])

  // const router = createBrowserRouter([
  //   {
  //     path: '/',
  //     element: <Layout />,
  //     children: [
  //       { path: '', element: <Home /> },  // This matches the root path ('/')
  //       { path: 'about', element: <About /> }  // This matches '/about'
  //     ]
  //   }
  // ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router} />

  </React.StrictMode>,
)
