import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RealtimeWishes from './pages/RealtimeWishes';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/realtime-wishes" element={<RealtimeWishes />} />
      </Routes>
    </BrowserRouter>
  );
}
