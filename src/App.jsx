import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import Watchlist from './pages/Watchlist'
import Tvshows from './pages/Tvshows'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/watchlist' element={<Watchlist />} />
        <Route path='/tvshows' element={<Tvshows />} />
      </Routes>


    </BrowserRouter>
  )
}

export default App
