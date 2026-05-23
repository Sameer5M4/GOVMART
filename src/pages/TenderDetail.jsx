/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { tenders } from '../data';
import { ChevronLeft, Calendar, FileCheck, CircleAlert, Building, Compass, AlertCircle, Info } from 'lucide-react';

export default function TenderDetail({ tenderId, onNavigate }) {
  const t = tenders.find((x) => x.id === tenderId);

  if (!t) {
    return (
      <div className="p-12 text-center bg-slate-50 min-h-[50vh] flex flex-col items-center justify-center">
        <p className="text-slate-600 font-bold mb-4">Specified tender parameters not found.</p>
        <button
          onClick={() => onNavigate('tenders')}
          className="bg-indigo-600 text-white font-bold px-4 py-2 rounded-lg text-xs"
        >
          Back to Registry
        </button>
      </div>
    );
  }

  const handleBidSubmit = () => {
    alert(`Demo Portal Simulated Connection:\n\nConnecting encrypted digital locker...\nStarting bid proposal submission system for TENDER_ID #${t.id}.\nIn production, this initiates a secure verification gateway.`);
  };

  return (
    <div className="font-sans">
      
      {/* Detail Hero banner style */}
      <section className="bg-slate-900 py-12 text-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <button
            onClick={() => onNavigate('tenders')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition duration-200 cursor-pointer focus:outline-none mb-6 group border border-slate-705 px-3 py-1.5 rounded-lg bg-white/5"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Tenders Board
          </button>

          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider uppercase ${
                t.status === 'Open' ? 'bg-emerald-500/15 border border-emerald-500/30 text-emerald-300' :
                t.status === 'Closed' ? 'bg-rose-500/15 border border-rose-500/30 text-rose-300' :
                'bg-amber-500/15 border border-amber-500/30 text-amber-300'
              }`}>
                {t.status}
              </span>
              <span className="text-[10px] bg-white/5 text-slate-300 px-2.5 py-1 rounded-full border border-white/10 font-mono font-bold">
                📍 Location: {t.location}
              </span>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight">{t.title}</h1>
            <p className="text-sm text-slate-400 font-semibold">🏢 Authority: {t.dept}</p>
          </div>
        </div>
      </section>

      {/* Tender analytical sheets segments */}
      <section className="py-12 bg-slate-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col - Requirements and eligibility */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Profile Box */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
                <h3 className="font-extrabold text-[#0288d1] uppercase text-xs tracking-wider flex items-center gap-2 font-mono">
                  <Info className="w-4.5 h-4.5" /> Core Scope Description
                </h3>
                <p className="text-slate-650 text-sm leading-relaxed whitespace-pre-line">{t.desc}</p>
              </div>

              {/* Specific Requirements checklist */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
                <h3 className="font-extrabold text-[#0288d1] uppercase text-xs tracking-wider flex items-center gap-2 font-mono">
                  <FileCheck className="w-4.5 h-4.5" /> Technical Requirements
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {t.req.map((reqItem, idx) => (
                    <li key={idx} className="flex gap-2.5 text-xs text-slate-600 font-semibold items-center p-3 bg-slate-50 border border-slate-150 rounded-xl">
                      <span className="text-emerald-500 text-base">✓</span>
                      {reqItem}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Eligibility Criteria text */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
                <h3 className="font-extrabold text-[#0288d1] uppercase text-xs tracking-wider flex items-center gap-2 font-mono">
                  <Compass className="w-4.5 h-4.5" /> Vendor Eligibility Parameters
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-semibold bg-slate-50 p-4 border border-slate-150 rounded-xl">{t.eligibility}</p>
              </div>

            </div>

            {/* Right Col - Budgets, deadlines tables */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Budgets wrapper */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white space-y-2 shadow-lg shadow-indigo-950/20">
                <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-mono">Total Estimated Budget</div>
                <div className="text-3xl font-black text-indigo-300 font-mono">{t.budget}</div>
                <p className="text-[10px] text-slate-500 font-medium">Subject to technical audit procedures during selection schedules.</p>
              </div>

              {/* Deadlines Dates checklist */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-sm">
                <h3 className="font-extrabold text-slate-850 text-sm tracking-tight flex items-center gap-2">
                  <Calendar className="w-4.5 h-4.5 text-indigo-600" /> Important Dates
                </h3>
                
                <div className="grid grid-cols-2 gap-3 text-left font-mono">
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-150">
                    <div className="text-[9px] text-slate-450 font-bold uppercase tracking-wider">Deadline</div>
                    <div className="text-xs font-bold text-rose-700">{t.deadline}</div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-150">
                    <div className="text-[9px] text-slate-450 font-bold uppercase tracking-wider font-mono">Pre-bid meeting</div>
                    <div className="text-xs font-bold text-slate-700">2024-01-20</div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-150">
                    <div className="text-[9px] text-slate-450 font-bold uppercase tracking-wider font-mono">Published On</div>
                    <div className="text-xs font-bold text-slate-705">2024-01-05</div>
                  </div>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-150">
                    <div className="text-[9px] text-slate-450 font-bold uppercase tracking-wider font-mono">Award Date</div>
                    <div className="text-xs font-bold text-emerald-700">2024-04-01</div>
                  </div>
                </div>
              </div>

              {/* Department Contact box */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3 shadow-sm text-xs">
                <h4 className="font-extrabold text-slate-850 uppercase text-[10px] tracking-widest font-mono">Authority Contact Desk</h4>
                <div className="space-y-1 text-slate-600 font-semibold leading-relaxed">
                  <p>📍 {t.dept}</p>
                  <p>📧 procurement@{t.dept.toLowerCase().replace(/[^a-z]/g, '') || 'gov'}.gov.in</p>
                  <p>📞 011-2306-XXXX (Support Lines)</p>
                </div>
              </div>

              {/* Dynamic Actions mapping depending on status */}
              <div className="space-y-3 pt-2">
                {t.status !== 'Closed' ? (
                  <button
                    onClick={handleBidSubmit}
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider font-bold shadow-lg shadow-indigo-100 hover:shadow-indigo-200 transition duration-200 cursor-pointer text-center"
                  >
                    Submit Encrypted Bid Proposal
                  </button>
                ) : (
                  <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 text-center text-rose-800 text-xs font-bold flex items-center gap-2.5 justify-center">
                    <CircleAlert className="w-5 h-5 shrink-0" />
                    Submissions Closed - Bidding Blocked
                  </div>
                )}

                <button
                  onClick={() => alert(`Demo Portal Support:\nDownloading formal PDF guidelines for Tender ID #${t.id}.`)}
                  className="w-full bg-transparent hover:bg-slate-50 text-slate-800 border border-slate-350 font-bold py-3 px-4 rounded-xl text-xs uppercase transition tracking-wider text-center"
                >
                  Download RFP Specifications
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
