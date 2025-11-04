import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar';
import Homepage from './pages/homepage';
import CharacterPage from './pages/character';
import EpisodesPage from './pages/episodes';
import CharacterDetailsPage from './pages/characterDetails';
import EpisodeUseFetch from './pages/episodeUseFetch';
import  ThemeContext  from './context/themeContext';
import { useContext } from 'react';

function App() {
 const {theme} = useContext(ThemeContext)

  return (
<Router>

  <div style={{backgroundColor : theme.backgroundColor , color: theme.color}}>
    <Navbar />
    <Routes>
      <Route path="" element= {<Homepage />} />
      <Route path="character" element= {<CharacterPage />} />
      <Route path="episodes" element= {<EpisodesPage />} />
      <Route path="characterDetails/:id" element={<CharacterDetailsPage />} />

  {/* utilisation du fetch */}
      <Route path="episodes-fetch" element= {<EpisodeUseFetch />} />
    </Routes> 
  </div>

</Router>
  )
}

export default App
