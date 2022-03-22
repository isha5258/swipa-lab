import {Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/header/header';
import StarShipList from './pages/StarshipsList/StarshipList';
import StarShipDetails from './pages/StarshipDetails/StarshipDetails';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path={'/'} element={<StarShipList />} />
        <Route path='/:id' element={<StarShipDetails />} />
      </Routes>
    </>
  );
}

export default App;
