/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { products } from '../data';
import { Search, SlidersHorizontal, ArrowRight, Laptop, Briefcase, Sparkles } from 'lucide-react';

export default function Products({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Filtering products
  const filteredProducts = products.filter((p) => {
    const matchesSearch = 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.seller.toLowerCase().includes(searchQuery.toLowerCase()) || 
      p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = !selectedCategory || p.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="font-sans">
      
      {/* Page Hero */}
      <section className="bg-slate-900 py-14 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.08)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 bg-indigo-500/10 text-indigo-300 border border-indigo-400/20 text-xs font-semibold px-3 py-1 rounded-full uppercase">
            <Sparkles className="w-3.5 h-3.5" /> 3,000+ Items Listed
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Government Approved Products
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Direct access to government-grade electronics, furniture, office supplies, and custom logistics solutions.
          </p>
        </div>
      </section>

      {/* Grid and interactive filters block */}
      <section className="py-12 bg-slate-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Controls bar */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4.5 h-4.5" />
              <input
                type="text"
                placeholder="Search approved specs, OEM sellers or models..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-55 border border-slate-250 rounded-lg text-sm text-slate-800 placeholder-slate-450 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            {/* Category Select Filters */}
            <div className="flex gap-3 w-full md:w-auto shrink-0 select-none">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase text-slate-400 tracking-wider">
                <SlidersHorizontal className="w-4 h-4" /> Filter:
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 bg-white border border-slate-250 rounded-lg text-xs font-bold text-slate-700 focus:outline-none focus:border-indigo-500 cursor-pointer"
              >
                <option value="">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Office Furniture">Office Furniture</option>
                <option value="IT Services">IT Services</option>
                <option value="Security Services">Security Services</option>
                <option value="Stationery">Stationery</option>
                <option value="Healthcare">Healthcare</option>
              </select>
            </div>

          </div>

          {/* Results grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  onClick={() => onNavigate('product-detail', p.id)}
                  className="bg-white border border-slate-200 hover:border-indigo-400 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    {/* Image icon container */}
                    <div className="h-40 bg-slate-50 flex items-center justify-center text-5xl group-hover:bg-slate-100 transition-colors">
                      <span className="group-hover:scale-110 transition-transform duration-300">{p.emoji}</span>
                    </div>

                    {/* Technical metadata */}
                    <div className="p-5 space-y-2">
                      <div className="text-[10px] font-extrabold text-indigo-700 uppercase tracking-widest font-mono">
                        {p.category}
                      </div>
                      <h3 className="font-bold text-sm text-slate-900 group-hover:text-indigo-600 line-clamp-1 transition-colors">
                        {p.name}
                      </h3>
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                        {p.desc}
                      </p>
                      <div className="text-[11px] text-slate-400 font-semibold pt-1">
                        🏢 OEM: {p.seller}
                      </div>
                    </div>
                  </div>

                  {/* Pricing and Action */}
                  <div className="px-5 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-base font-extrabold text-slate-900 font-mono">
                      {p.price}
                    </span>
                    <span className="text-xs font-extrabold bg-amber-50 text-amber-700 px-2 py-0.5 rounded flex items-center gap-1 font-mono">
                      ★ {p.rating}
                    </span>
                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white border border-slate-200 rounded-2xl">
              <p className="text-slate-500 font-medium text-sm">No products found matching your active searches.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory(''); }}
                className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg transition"
              >
                Reset Searches
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
