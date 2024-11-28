import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Provider } from "react-redux"
import shopStore  from './utils/shopStore.js'  
import ProductDetail from './components/ProductDetail.jsx'
import NotFound from "./components/NotFound.jsx"
import ProductList from './components/ProductList.jsx'
import About from './components/About.jsx'
import Cart from './components/Cart.jsx'
import Contact from './components/Contact.jsx'

// Router Configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    error: <NotFound/>,
    children: [
      {
        path:"/product/:id",
        element: <ProductDetail/> 
      },
      {
        path:"/",
        element: <ProductList/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/cart",
        element: <Cart/>
      },
      {
        path:"/contact",
        element: <Contact/>
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
