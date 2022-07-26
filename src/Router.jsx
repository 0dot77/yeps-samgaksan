import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RealtimeWishes from './pages/RealtimeWishes';
import Main from './pages/Main';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/realtime-wishes" element={<RealtimeWishes />} />
      </Routes>
    </BrowserRouter>
  );
}
