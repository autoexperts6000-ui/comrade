import { Routes, Route, Navigate } from 'react-router-dom';
import { RegionProvider } from '@/context/RegionContext';
import { regions } from '@/data/regions';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { MobileContactBar } from '@/components/layout/MobileContactBar';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { useLenisScroll } from '@/hooks/useLenis';
import Home from '@/pages/Home';
import RegionLanding from '@/pages/RegionLanding';
import NotFound from '@/pages/NotFound';

function RegionSite({ regionKey }: { regionKey: keyof typeof regions }) {
  return (
    <RegionProvider region={regions[regionKey]}>
      <div className="flex min-h-screen flex-col bg-surface pb-16 lg:pb-0">
        <Navbar />
        <main className="flex-1">
          <Home />
        </main>
        <Footer />
        <MobileContactBar />
        <WhatsAppButton />
      </div>
    </RegionProvider>
  );
}

function App() {
  useLenisScroll();

  return (
    <Routes>
      <Route path="/" element={<RegionLanding />} />
      <Route path="/dubai" element={<RegionSite regionKey="dubai" />} />
      <Route path="/india" element={<RegionSite regionKey="india" />} />
      <Route path="/uae" element={<Navigate to="/dubai" replace />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
