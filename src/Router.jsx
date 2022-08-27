import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FirstTemple from './pages/FirstTemple';
import FourthTemple from './pages/FourthTemple';
import SecondTemple from './pages/SecondTemple';

import Test from './pages/Test';
import ThirdTemple from './pages/ThirdTemple';
import WebTemple from './pages/WebTemple';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/web-temple" element={<WebTemple />} />
        <Route path="/rlatogml430" element={<FirstTemple />} />
        <Route path="/wolgoksan" element={<SecondTemple />} />
        <Route path="/aurora" element={<ThirdTemple />} />
        <Route path="/nadlemok" element={<FourthTemple />} />
      </Routes>
    </BrowserRouter>
  );
}
