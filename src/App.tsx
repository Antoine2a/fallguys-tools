import { Routes, Route, HashRouter } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import MapCreator from './pages/MapCreator';
import NotFound from './pages/NotFound';
import Speedrun from './pages/Speedrun';
import Strategy from './pages/Strategy';
import TmpPage from './pages/TmpPage';
import Tournaments from './pages/Tournaments';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Challenges from './pages/Challenges';

export function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/speedrun" element={<Speedrun />} />
                <Route path="/map-creator" element={<MapCreator />} />
                <Route path="/strategy" element={<Strategy />} />
                <Route path="/tournaments" element={<Tournaments />} />
                <Route path="/challenges" element={<Challenges />} /> {/* or maybe "Achievements" */}
                <Route path="/tmp-page" element={<TmpPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export function WrappedApp() {
    return (
        <HashRouter>
            {/* //TODO use BrowserRouter since not using github-pages anymore */}
            <App />
        </HashRouter>
    );
}
