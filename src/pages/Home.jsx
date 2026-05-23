/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { products, tenders } from '../data';
import { 
  ShieldCheck, 
  Settings, 
  CheckCircle, 
  ArrowRight, 
  Laptop, 
  Cpu, 
  HardDrive, 
  FileText, 
  Users, 
  Search, 
  Bookmark, 
  Flame,
  Award
} from 'lucide-react';

export default function Home({ onNavigate }) {
  
  // Featured products (first 6)
  const featuredProducts = products.slice(0, 6);
  // Featured tenders (first 4)
  const featuredTenders = tenders.slice(0, 4);

  return (
    <div className="font-sans">
      
      {/* Hero Section */}
      <section className="relative bg-slate-900 overflow-hidden pt-12 min-h-[85vh] flex items-center">
        {/* Background Gradients and Dots */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(79,70,229,0.15)_0%,transparent_60%)]"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[size:32px_32px]"></div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Hero text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider">
              <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full animate-ping"></span>
              India's National eMarketplace
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Transparent, Digital <br />
              <span className="bg-gradient-to-r from-indigo-400 via-indigo-300 to-sky-300 bg-clip-text text-transparent">
                Government Procurement
              </span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-lg leading-relaxed">
              India's professional digital marketplace engineered for secure B2G procurement. Connecting verified small MSMEs, large OEMs, and services with authorized central and state departments.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onNavigate('products')}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-6 py-3 rounded-lg flex items-center gap-2 transition shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/30 cursor-pointer text-sm"
              >
                <Cpu className="w-4 h-4" />
                Explore Products
              </button>
              <button
                onClick={() => onNavigate('tenders')}
                className="bg-transparent hover:bg-white/5 text-white border border-slate-700 hover:border-slate-500 font-bold px-6 py-3 rounded-lg flex items-center gap-2 transition cursor-pointer text-sm"
              >
                <FileText className="w-4 h-4" />
                View Opportunities
              </button>
            </div>
          </div>

          {/* Hero Visual Column (Floating Cards Stack as requested) */}
          <div className="hidden md:flex justify-center">
            <div className="relative w-80 h-96">
              
              {/* Card 1 */}
              <div className="absolute w-72 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl transition-all duration-500 hover:scale-[1.03] top-4 left-4 z-10 animate-[bounce_8s_infinite_ease-in-out]">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-9 h-9 bg-emerald-500/10 text-emerald-400 rounded-lg flex items-center justify-center font-bold text-lg">💰</div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Live Orders Today</div>
                    <div className="text-lg font-extrabold text-white">₹2.4 Crore</div>
                  </div>
                </div>
                <div className="text-xs text-emerald-300 flex items-center gap-1 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" /> 47 procurement orders certified
                </div>
              </div>

              {/* Card 2 */}
              <div className="absolute w-72 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-xl transition-all duration-500 hover:scale-[1.03] bottom-8 right-0 z-20 animate-[bounce_6s_infinite_ease-in-out_1s]">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-9 h-9 bg-indigo-500/10 text-indigo-400 rounded-lg flex items-center justify-center font-bold text-lg">📋</div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Active Tenders</div>
                    <div className="text-lg font-extrabold text-white">128 Live</div>
                  </div>
                </div>
                <div className="text-xs text-indigo-300 flex items-center gap-1 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" /> Across 32 departments
                </div>
              </div>

              {/* Card 3 */}
              <div className="absolute w-72 p-5 rounded-2xl bg-indigo-950/40 border border-indigo-500/20 backdrop-blur-md shadow-xl transition-all duration-500 hover:scale-[1.03] top-36 -left-8 z-30 animate-[bounce_10s_infinite_ease-in-out_2s]">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-9 h-9 bg-amber-500/10 text-amber-400 rounded-lg flex items-center justify-center font-bold text-lg">✅</div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Verified Suppliers</div>
                    <div className="text-lg font-extrabold text-white">500+ Indian MSMEs</div>
                  </div>
                </div>
                <div className="text-xs text-amber-300 flex items-center gap-1 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" /> Quality standards fully vetted
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { metric: "10K+", label: "Completed Orders" },
            { metric: "500+", label: "Verified Registries" },
            { metric: "100+", label: "Gov Departments" },
            { metric: "250+", label: "Active Live Tenders" }
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-slate-50 border border-slate-100 rounded-2xl transition hover:-translate-y-1 hover:shadow-md">
              <div className="text-3xl font-extrabold text-indigo-600 mb-1">{stat.metric}</div>
              <div className="text-xs text-slate-500 uppercase tracking-widest font-bold font-mono">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#0288d1] bg-[#e8f4fd] px-3.5 py-1 rounded-full border border-sky-200">
              Assorted Departments
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Product &amp; Services Categories
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Explore strict regulatory compliance products arranged across general government-approved categories.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { emoji: '💻', name: 'Electronics', count: '2,400+ items', color: 'bg-emerald-50' },
              { emoji: '🪑', name: 'Office Furniture', count: '850+ items', color: 'bg-purple-50' },
              { emoji: '🖥️', name: 'IT Services', count: '320+ services', color: 'bg-indigo-50' },
              { emoji: '🔒', name: 'Security Equipment', count: '180+ services', color: 'bg-amber-50' },
              { emoji: '📄', name: 'Office Stationery', count: '1,100+ items', color: 'bg-pink-50' },
              { emoji: '🏥', name: 'Healthcare & Medical', count: '640+ items', color: 'bg-sky-50' }
            ].map((cat, idx) => (
              <button
                key={idx}
                onClick={() => onNavigate('products')}
                className="p-6 bg-white border border-slate-200 hover:border-indigo-500 rounded-2xl text-center group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none"
              >
                <div className={`w-14 h-14 ${cat.color} rounded-2xl text-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {cat.emoji}
                </div>
                <div className="text-sm font-bold text-slate-800 tracking-tight">{cat.name}</div>
                <div className="text-[11px] text-slate-400 font-medium mt-1 font-mono">{cat.count}</div>
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Products */}
      <section className="bg-white py-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-indigo-700 bg-indigo-50 px-3.5 py-1 rounded-full border border-indigo-100">
              Vetted Procurement
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Featured Tech &amp; Hardware
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Certified goods supplied directly by original equipment manufacturers (OEMs) and registered MSMEs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((p) => (
              <div 
                key={p.id}
                onClick={() => onNavigate('product-detail', p.id)}
                className="bg-white border border-slate-200 hover:border-indigo-400 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer group"
              >
                {/* Visual Emojis wrapper */}
                <div className="h-44 bg-slate-50 flex items-center justify-center text-6xl group-hover:bg-slate-100 transition-colors">
                  <span className="group-hover:scale-110 transition-transform duration-300">{p.emoji}</span>
                </div>
                
                {/* Information content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="text-[11px] font-bold text-indigo-600 uppercase tracking-widest font-mono mb-1">{p.category}</div>
                    <h3 className="text-base font-bold text-slate-850 group-hover:text-indigo-600 line-clamp-1 transition-colors">{p.name}</h3>
                    <p className="text-xs text-slate-500 line-clamp-2 mt-1.5 leading-relaxed">{p.desc}</p>
                    <div className="text-[11px] text-slate-400 font-semibold mt-2">🏢 OEM: {p.seller}</div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <span className="text-lg font-extrabold text-slate-900 font-mono">{p.price}</span>
                    <span className="text-[11px] bg-amber-50 rounded-md font-extrabold text-amber-700 px-2 py-1 flex items-center gap-1 font-mono">
                      ★ {p.rating}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('products')}
              className="bg-slate-900 hover:bg-black text-white font-bold text-sm px-6 py-3 rounded-lg inline-flex items-center gap-2 transition hover:-translate-y-0.5"
            >
              View Complete Product Grid <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Open Tenders Section */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#2e7d32] bg-[#e8f5e9] px-3.5 py-1 rounded-full border border-green-200">
              Live Opportunities
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Active Government Tenders
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Review published requirements, submit bids, and track evaluation cycles with total structural transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredTenders.map((t) => (
              <div
                key={t.id}
                onClick={() => onNavigate('tender-detail', t.id)}
                className="bg-white border border-slate-200 hover:border-indigo-400 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-1">{t.title}</h3>
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      t.status === 'Open' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
                      t.status === 'Closed' ? 'bg-rose-50 text-rose-750 border border-rose-100' :
                      'bg-indigo-50 text-indigo-750 border border-indigo-100'
                    }`}>
                      {t.status}
                    </span>
                  </div>
                  
                  <div className="text-xs text-slate-500 font-semibold mb-4">🏢 Dept: {t.dept}</div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 border border-slate-150 rounded-xl mb-2 font-mono">
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Budget</div>
                      <div className="text-xs font-bold text-indigo-700">{t.budget}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Deadline</div>
                      <div className="text-xs font-bold text-slate-700">{t.deadline}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Location</div>
                      <div className="text-xs font-bold text-slate-700">{t.location}</div>
                    </div>
                    <div>
                      <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Security</div>
                      <div className="text-xs font-bold text-teal-700">Vetted</div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('tenders')}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-sm px-6 py-3 rounded-lg inline-flex items-center gap-2 transition hover:-translate-y-0.5 shadow-lg shadow-indigo-100"
            >
              Browse Public Board <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* Guide Process bar */}
      <section className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase font-extrabold tracking-widest text-[#f59e0b] bg-[#fff3e0] px-3.5 py-1 rounded-full border border-amber-200">
              Flowchart Map
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Simplified 4-Step Process
            </h2>
            <p className="text-slate-500 text-sm sm:text-base">
              Frictionless onboarding and bidding engineered to support seamless compliance.
            </p>
          </div>

          <div className="relative">
            {/* Horizontal Line on Desktop */}
            <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-indigo-500 to-sky-500 -z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10 text-center">
              {[
                { step: "01", title: "Vendor Validation", desc: "MSME register with GST & PAN credentials for instant verification." },
                { step: "02", title: "Public Publish", desc: "Authorized departments post comprehensive budget parameters." },
                { step: "03", title: "Technical evaluation", desc: "Transparent automated scoring discovers fair market pricing." },
                { step: "04", title: "Instant Completion", desc: "Purchase order is dispatched and secured by official government channels." }
              ].map((item, index) => (
                <div key={index} className="space-y-4">
                  <div className="w-14 h-14 bg-indigo-600 hover:bg-slate-900 text-white rounded-full flex items-center justify-center font-extrabold text-lg mx-auto shadow-lg shadow-indigo-100 transition duration-300">
                    {item.step}
                  </div>
                  <h3 className="text-base font-bold text-slate-800 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 text-xs px-4 leading-normal">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('howitworks')}
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm px-6 py-3 rounded-lg inline-flex items-center gap-2 transition"
            >
              Deconstructed Guide Book <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}
