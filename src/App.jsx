/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages imports
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Tenders from './pages/Tenders';
import TenderDetail from './pages/TenderDetail';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact';
import Login from './pages/Login';

// Lucide icon
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedId, setSelectedId] = useState(null);
  const [showScroll, setShowScroll] = useState(false);

  // Smooth scroll handler on transition
  const handleNavigate = (page, id = null) => {
    setCurrentPage(page);
    setSelectedId(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Scroll to top button visibility controller
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Screen router logic mapping
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'products':
        return <Products onNavigate={handleNavigate} />;
      case 'product-detail':
        return <ProductDetail productId={selectedId} onNavigate={handleNavigate} />;
      case 'tenders':
        return <Tenders onNavigate={handleNavigate} />;
      case 'tender-detail':
        return <TenderDetail tenderId={selectedId} onNavigate={handleNavigate} />;
      case 'howitworks':
        return <HowItWorks />;
      case 'contact':
        return <Contact />;
      case 'login':
        return <Login onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* Top Banner Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main interactive window container adjusted for fixed nav height */}
      <main className="flex-1 pt-16">
        <div className="animate-fadeIn">
          {renderPage()}
        </div>
      </main>

      {/* Footer Branding Area */}
      <Footer onNavigate={handleNavigate} />

      {/* Scroll to Top Trigger button */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 w-11 h-11 bg-slate-900 hover:bg-slate-800 text-white rounded-full flex items-center justify-center shadow-lg hover:-translate-y-1 hover:shadow-indigo-500/25 transition-all duration-300 z-50 cursor-pointer border border-slate-700 focus:outline-none"
          title="Scroll back to top"
          id="scroll-to-top-button"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
}
