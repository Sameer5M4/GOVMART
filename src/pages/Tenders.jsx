/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { tenders } from '../data';
import { Search, MapPin, Calendar, CreditCard, Sparkles, SlidersHorizontal } from 'lucide-react';

export default function Tenders({ onNavigate }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  // Filtering tenders list
  const filteredTenders = tenders.filter((t) => {
    const matchesSearch = 
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      t.dept.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = !statusFilter || t.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="font-sans">
      
      {/* Page Hero banner */}
      <section className="bg-slate-900 py-14 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.08)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 bg-indigo-500/10 text-indigo-300 border border-indigo-400/20 text-xs font-semibold px-3 py-1 rounded-full uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Live Opportunity Registry
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Published Public Tenders
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Consolidated procurement pipelines from over 100 central and state Indian government ministries.
          </p>
        </div>
      </section>

      {/* Grid view and active inputs */}
      <section className="py-12 bg-slate-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          {/* Controls Bar block layout */}
          <div className="bg-white border border-slate-200 rounded-xl p-4 mb-8 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
            
            {/* Search inputs */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4.5 h-4.5" />
              <input
                type="text"
                placeholder="Search active tenders or departments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-55 border border-slate-250 rounded-lg text-sm text-slate-800 placeholder-slate-450 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              />
            </div>

            {/* Filter Status Selector */}
            <div className="flex gap-3 w-full md:w-auto shrink-0 select-none">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase text-slate-400 tracking-wider">
                <SlidersHorizontal className="w-4 h-4" /> State:
              </div>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 bg-white border border-slate-250 rounded-lg text-xs font-bold text-slate-700 focus:outline-none focus:border-indigo-500 cursor-pointer"
              >
                <option value="">All Tenders</option>
                <option value="Open">Open</option>
                <option value="Upcoming">Upcoming</option>
                <option value="Closed">Closed</option>
              </select>
            </div>

          </div>

          {/* Results grid mapping cards */}
          {filteredTenders.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
              {filteredTenders.map((t) => (
                <div
                  key={t.id}
                  onClick={() => onNavigate('tender-detail', t.id)}
                  className="bg-white border border-slate-200 hover:border-indigo-400 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                >
                  <div className="space-y-4">
                    
                    {/* Header line containing status badges */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-extrabold text-slate-900 text-sm sm:text-base leading-snug group-hover:text-indigo-600 transition-colors line-clamp-2">
                        {t.title}
                      </h3>
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0 select-none ${
                        t.status === 'Open' ? 'bg-emerald-50 text-emerald-700 border border-emerald-100' :
                        t.status === 'Closed' ? 'bg-rose-50 text-rose-700 border border-rose-100' :
                        'bg-amber-50 text-amber-700 border border-amber-100'
                      }`}>
                        {t.status}
                      </span>
                    </div>

                    {/* Department Tag line */}
                    <div className="text-xs text-slate-500 font-semibold">
                      🏢 Department: {t.dept}
                    </div>

                    {/* Technical metadata metrics parameters */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 border border-slate-150 rounded-xl font-mono">
                      <div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Budget</div>
                        <div className="text-xs font-bold text-indigo-750">{t.budget}</div>
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
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">State</div>
                        <div className="text-xs font-bold text-indigo-600 capitalize">{t.status}</div>
                      </div>
                    </div>

                  </div>

                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white border border-slate-200 rounded-2xl">
              <p className="text-slate-500 font-medium text-sm">No tenders found matching your active filter criteria.</p>
              <button
                onClick={() => { setSearchQuery(''); setStatusFilter(''); }}
                className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-lg transition"
              >
                Reset Search Filters
              </button>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
