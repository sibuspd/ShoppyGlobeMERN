import './App.css'
import { Outlet } from 'react-router'
import Header from './components/Header'
import { Suspense } from "react";
import Footer from './components/Footer';
import Spinner from "./components/Spinner"

function App() {

  return (
    <div className="app">
      <Header />
      <main>
        <Suspense fallback={<Spinner/>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
