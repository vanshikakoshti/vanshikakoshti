import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomePage from './pages/HomePage'
import Loader from './components/Loader'
import ScrollToTopButton from './components/ScrollToTopButton'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
    {loading ? <Loader /> : <HomePage />}
    <ScrollToTopButton />

    </>
  )
}

export default App
