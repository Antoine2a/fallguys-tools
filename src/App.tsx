import { Routes, Route, HashRouter } from 'react-router-dom';

// Pages
import { Challenges, Home, MapCreator, NotFound, Speedrun, Strategy, TmpPage, Tournaments } from './pages';
import { Footer, Navbar } from './components';

export function App() {
    return (
        <div className="flex flex-col h-screen">
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
        </div>
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
