import { Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileContactBar } from '@/components/layout/MobileContactBar';
import { useLenisScroll } from '@/hooks/useLenis';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';

function App() {
  useLenisScroll();

  return (
    <div className="flex min-h-screen flex-col bg-surface pb-16 lg:pb-0">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <MobileContactBar />
    </div>
  );
}

export default App;
