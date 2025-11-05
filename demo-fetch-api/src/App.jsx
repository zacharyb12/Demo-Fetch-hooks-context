import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/navbar';
import Homepage from './pages/homepage';
import CharacterPage from './pages/character';
import EpisodesPage from './pages/episodes';
import CharacterDetailsPage from './pages/characterDetails';
import EpisodeUseFetch from './pages/episodeUseFetch';
import { AuthProvider } from './context/authContext';
import PrivateRoute from './routeAcces/routePrivate';
import LoginPage from './pages/login';

function App() {


  return (


    <AuthProvider>
      <Router>

        <div>
          <Navbar />
          <Routes>
            <Route path="" element= {<Homepage />} />
            <Route path="character" element= {<CharacterPage />} />
            <Route path="episodes" element= {<EpisodesPage />} />
            <Route path="characterDetails/:id" element={<CharacterDetailsPage />} />
            <Route path="login" element= {<LoginPage />} />

        {/* utilisation du fetch */}
            {/* <Route path="episodes-fetch" element= {<EpisodeUseFetch />} /> */}

            {/*Route avec accès privé*/}
            <Route path="episodes-fetch" element= {
                                            <PrivateRoute>
                                                <EpisodeUseFetch />
                                            </PrivateRoute>
                                          }/>
          </Routes> 
        </div>

      </Router>
    </AuthProvider>
  )
}

export default App
