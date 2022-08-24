import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Test from './pages/Test';
import WebTemple from './pages/WebTemple';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/web-temple" element={<WebTemple />} />
      </Routes>
    </BrowserRouter>
  );
}
