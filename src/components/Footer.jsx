/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Landmark, Twitter, Linkedin, Facebook, Youtube, ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer({ onNavigate }) {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-14 pb-8 border-t border-slate-800 font-sans mt-auto" id="site-footer">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Educational Disclaimer Banner */}
        <div className="mb-10 bg-amber-500/10 border border-amber-500/30 rounded-xl p-5 text-amber-200 text-sm flex gap-3.5 items-start">
          <ShieldCheck className="w-5.5 h-5.5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-300 font-bold block mb-0.5">Educational Demo Disclaimer:</strong>
            This application is constructed strictly as an interactive showcase demo of a government e-marketplace. All prices, suppliers rating figures, tenders request lists, bid structures, and digital signatures are purely simulated in local state memory. No connection, integration, endorsement, or approval from any official government entity is implied.
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2">
              <Landmark className="w-6 h-6 text-indigo-400" />
              <span className="text-white font-sora text-xl font-bold tracking-tight">
                Gov<span className="text-indigo-400">Mart</span>
              </span>
            </div>
            <p className="text-sm text-slate-300 max-w-sm leading-relaxed">
              India's premium educational procurement visualization system — connecting verified simulated suppliers with academic/mock departments using high-end React state workflows.
            </p>
            {/* Social handles */}
            <div className="flex items-center gap-3">
              <span className="text-xs uppercase text-slate-500 font-bold tracking-wider mr-2">Handles:</span>
              <a href="#" className="w-9 h-9 rounded-md bg-white/5 hover:bg-indigo-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200" aria-label="Twitter">
                <Twitter className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-md bg-white/5 hover:bg-indigo-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200" aria-label="LinkedIn">
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-md bg-white/5 hover:bg-indigo-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200" aria-label="Facebook">
                <Facebook className="w-4.5 h-4.5" />
              </a>
              <a href="#" className="w-9 h-9 rounded-md bg-white/5 hover:bg-indigo-600 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200" aria-label="YouTube">
                <Youtube className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-5">Platform Tabs</h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Home Portal
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  About GovProcure
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Products Deck
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tenders')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Tenders Board
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('howitworks')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  How It Operates
                </button>
              </li>
            </ul>
          </div>

          {/* Procurement */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-5">Simulated Portals</h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li>
                <button onClick={() => onNavigate('login')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Supplier Sign-in
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('login')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Buyer Compliance
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('tenders')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Technical Bidder
                </button>
              </li>
              <li>
                <button onClick={() => alert('Demo Portal: Order dispatch tracker is available on user profile.')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  L1 Delivery Rules
                </button>
              </li>
              <li>
                <button onClick={() => alert('Demo Portal: Pricing algorithm matches strict government guidelines.')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Frictionless Audits
                </button>
              </li>
            </ul>
          </div>

          {/* Support Desk */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-5">Advisory Desk</h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Contact Desk
                </button>
              </li>
              <li>
                <button onClick={() => alert('Demo Portal: Digital user manuals can be simulated upon request.')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Training Manuals
                </button>
              </li>
              <li>
                <button onClick={() => alert('Demo parameters match ISO 9001 audit guidelines.')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Security Policies
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors cursor-pointer text-left focus:outline-none">
                  Grievance Form
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Separator */}
        <div className="border-t border-slate-850 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>&copy; {new Date().getFullYear()} GovMart Demo Portal. Built with React JS and Tailwind.</span>
          <span className="flex items-center gap-2">
            <span>REACT_VERSION: 19.x</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            <span>PRO_BUILD: true</span>
          </span>
        </div>

      </div>
    </footer>
  );
}
