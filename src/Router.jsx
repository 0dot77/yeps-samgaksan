import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FIfthTemple from './pages/FIfthTemple';
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
        <Route path="/000-temple" element={<FirstTemple />} />
        <Route path="/111-temple" element={<SecondTemple />} />
        <Route path="/222-temple" element={<ThirdTemple />} />
        <Route path="/333-temple" element={<FourthTemple />} />
        <Route path="/444-temple" element={<FIfthTemple />} />
      </Routes>
    </BrowserRouter>
  );
}
