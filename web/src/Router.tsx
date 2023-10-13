import { Routes, Route } from 'react-router-dom';
import { Chat } from './pages/Chat';
import { Home } from './pages/Home';
import { DefaultLayout } from './pages/Layout/DefaultLayout';


export function Router() {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />} >
                <Route path="/" element={<Home />} />
                <Route path="/chat" element={<Chat />} />
            </Route>
        </Routes>
    );
}