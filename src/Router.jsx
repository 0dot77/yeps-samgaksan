import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RealtimeWishes from './pages/RealtimeWishes';
import Test from './pages/Test';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RealtimeWishes />} />
        <Route path="test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}
