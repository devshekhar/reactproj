import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Dashboard  from './Screens/Dashboard/Dashboard.tsx';
import  Lists  from './Screens/Lists/Lists.tsx';
import App from './App.tsx';

const router = createBrowserRouter([
  {
  path:'/',
  element :<App/>,
  children:[
    {
    path:'/',
    element:<Dashboard/>
    },
    {
      path:'/lists',
      element: <Lists />
    }
  ]
}
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
