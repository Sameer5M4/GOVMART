/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Landmark, FileText, LayoutDashboard, LogIn, Award } from 'lucide-react';

export default function Navbar({ currentPage, onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Products', page: 'products' },
    { label: 'Tenders', page: 'tenders' },
    { label: 'How It Works', page: 'howitworks' },
    { label: 'Contact', page: 'contact' },
    { label: 'Login', page: 'login' },
  ];

  const handleNav = (page) => {
    onNavigate(page);
    setIsOpen(false);
  };

  const activeBasePage = currentPage ? currentPage.split('-')[0] : 'home';

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] bg-white border-b border-slate-200 shadow-sm font-sans shrink-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 focus:outline-none cursor-pointer"
          id="nav-logo-btn"
        >
          <div className="w-9 h-9 bg-indigo-600 rounded flex items-center justify-center shadow-md shadow-indigo-100 transition-transform hover:scale-105">
            <Landmark className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-800">
            Gov<span className="text-indigo-600">Mart</span>
          </span>
        </button>

        {/* Status indicator and Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          
          {/* Production badge */}
          <div className="flex items-center gap-2 px-3  bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 text-xs font-semibold py-1">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Gov-Vetted
          </div>

          <nav className="flex items-center gap-1.5" aria-label="Desktop navigation">
            {navLinks.map((link) => {
              const isActive = activeBasePage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNav(link.page)}
                  className={`text-sm font-semibold px-3 py-2 rounded-md transition-all duration-200 cursor-pointer focus:outline-none ${
                    isActive
                      ? 'text-indigo-700 bg-indigo-50 font-bold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <button
              onClick={() => handleNav('tenders')}
              className="ml-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold px-4 py-2 rounded-md flex items-center gap-1.5 transition-all duration-200 cursor-pointer shadow-lg shadow-indigo-100 hover:shadow-indigo-200 active:scale-95"
            >
              <FileText className="w-4 h-4" />
              View Tenders
            </button>
          </nav>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer focus:outline-none"
            aria-expanded={isOpen}
            id="mobile-menu-toggle"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav className="lg:hidden bg-slate-50 border-b border-slate-200 shadow-inner" aria-label="Mobile navigation">
          <div className="px-4 pt-2 pb-4 space-y-1 sm:px-6">
            {navLinks.map((link) => {
              const isActive = activeBasePage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNav(link.page)}
                  className={`w-full text-left flex items-center px-4 py-3 rounded-lg text-base font-semibold transition-colors cursor-pointer focus:outline-none ${
                    isActive
                      ? 'bg-indigo-50 text-indigo-700 font-bold'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-2">
              <button
                onClick={() => handleNav('tenders')}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-3 rounded-lg font-bold text-center flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <FileText className="w-5 h-5" />
                View Tenders
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
