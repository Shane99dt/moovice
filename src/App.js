import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
// import './heart.less';
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Popular from './pages/Popular';
import Weekly from './pages/Weekly';
import NavBar from './components/NavBar';
import ViewFilm from './pages/ViewFilm';



const App = () => {
  return(
    <>
      <BrowserRouter>
        <NavBar/>
        <div className='mx-md-5 mx-2'>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/weekly' element={<Weekly/>}/>
            <Route path='/popular' element={<Popular/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
            <Route path='/viewfilm/:id' element={<ViewFilm/>}/>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App