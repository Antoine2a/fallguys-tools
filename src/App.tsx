import { Routes, Route, HashRouter } from 'react-router-dom';

// Pages
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Speedrun from './pages/Speedrun';

export function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/speedrun" element={<Speedrun />} />
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/" element={<Home />} />

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export function WrappedApp() {
    return (
        <HashRouter>
            <App />
        </HashRouter>
    );
}
