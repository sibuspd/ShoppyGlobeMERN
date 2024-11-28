// import './App.css'
import { Outlet } from 'react-router'
import Header from './components/Header'
import { lazy, Suspense } from "react";

 // Following network calls only on navigating to corresponding Components
const ProductDetail = lazy(()=> import('./components/ProductDetail'));
const About = lazy(() => import('./components/About'));
const Cart = lazy(() => import('./components/Cart'));
const Contact = lazy(() => import('./components/Contact'));
const NotFound = lazy(() => import('./components/NotFound'));

function App() {

  return (
    <>
      <Header/>
      <Suspense fallback={<h4>Loading.............</h4>}>
        <Outlet/>
      </Suspense>
    </>
  )
}

export default App
