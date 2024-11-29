import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from "react-redux"
import shopStore  from './utils/shopStore.js'  
import ProductList from './components/ProductList.jsx'
import { lazy, Suspense } from "react";
import Spinner from "./components/Spinner"
 // Following network calls only on navigating to corresponding Components
 const ProductDetail = lazy(()=> import('./components/ProductDetail'));
 const About = lazy(() => import('./components/About'));
 const Cart = lazy(() => import('./components/Cart'));
 const Contact = lazy(() => import('./components/Contact'));
 const NotFound = lazy(() => import('./components/NotFound'));

// Router Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFound/>,
    children: [
      {
        path:"/product/:id",
        element: <Suspense fallback={<Spinner />}><ProductDetail/></Suspense> 
      },
      {
        path:"/",
        element: <Suspense fallback={<Spinner />}><ProductList/></Suspense>
      },
      {
        path:"/about",
        element: <Suspense fallback={<Spinner />}><About/></Suspense>
      },
      {
        path:"/cart",
        element: <Suspense fallback={<Spinner />}><Cart/></Suspense>
      },
      {
        path:"/contact",
        element: <Suspense fallback={<Spinner />}><Contact/></Suspense>
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store ={shopStore} >
      <RouterProvider router={appRouter}>
        <App/>
      </RouterProvider>
    </Provider>
  </StrictMode>
)
