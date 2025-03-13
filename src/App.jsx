
import HomePage from './Pages/HomePage.jsx'
import Favorites from './Pages/Favorites.jsx';
import { Routes, Route } from 'react-router-dom';
import { MovieProvider } from './Contexts/MovieContexts.jsx';
import NavBar from './Components/NavBar.jsx';

function App() {
  const movieNumber = 2;

  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/favorites' element={<Favorites />} />
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
