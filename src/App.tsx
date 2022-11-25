import { Routes, Route, HashRouter } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import MapCreator from './pages/MapCreator';
import NotFound from './pages/NotFound';
import Speedrun from './pages/Speedrun';
import Strategy from './pages/Strategy';
import TmpPage from './pages/TmpPage';
import Tournaments from './pages/Tournaments';

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/speedrun" element={<Speedrun />} />
            <Route path="/map-creator" element={<MapCreator />} />
            <Route path="/strategy" element={<Strategy />} />
            <Route path="/tournaments" element={<Tournaments />} />
            <Route path="/tmp-page" element={<TmpPage />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
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
