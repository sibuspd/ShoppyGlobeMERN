import './App.css'
import { Outlet } from 'react-router'
import Header from './components/Header'
import { lazy, Suspense } from "react";
import Footer from './components/Footer';

 // Following network calls only on navigating to corresponding Components
const ProductDetail = lazy(()=> import('./components/ProductDetail'));
const About = lazy(() => import('./components/About'));
const Cart = lazy(() => import('./components/Cart'));
const Contact = lazy(() => import('./components/Contact'));
const NotFound = lazy(() => import('./components/NotFound'));

function App() {

  return (
    <div className="app">
      <Header />
      <main>
        <Suspense fallback={<h3>Loading, please wait...........💫</h3>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
