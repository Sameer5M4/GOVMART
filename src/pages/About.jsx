/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, ShieldAlert, Award, FileText, CheckCircle2, TrendingUp, Handshake, Landmark } from 'lucide-react';

export default function About() {
  return (
    <div className="font-sans">
      
      {/* About Hero banner */}
      <section className="bg-slate-900 overflow-hidden relative py-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.1)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-indigo-500/10 border border-indigo-400/20 text-indigo-300 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full">
            <Target className="w-3.5 h-3.5" /> About the Portal
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Structure of Government eMarketplace
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Unifying central and state public procurement channels into a single, high-speed, and auditable digital gateway.
          </p>
        </div>
      </section>

      {/* Core values cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">Four Key Design Columns</h2>
            <p className="text-slate-500 text-sm">Empowering all local suppliers and small-scale MSME dealers without friction.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Landmark className="w-6 h-6 text-indigo-600" />, title: "Centralized Platform", desc: "Consolidating fractured departmental guidelines under an auditable, federal-approved rulebook." },
              { icon: <CheckCircle2 className="w-6 h-6 text-emerald-600" />, title: "Full Transparency", desc: "No offline backdoor meetings. All transaction details, prices, and winners remain inspectable." },
              { icon: <TrendingUp className="w-6 h-6 text-sky-600" />, title: "Rapid Turnaround", desc: "Automated digital document checks reduce bureaucratic friction from six months down to two days." },
              { icon: <Handshake className="w-6 h-6 text-purple-600" />, title: "MSME Empowerment", desc: "Ensuring small cottage and micro startups can bid without needing massive corporate legal teams." }
            ].map((col, idx) => (
              <div key={idx} className="p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col items-center text-center space-y-4 transition duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="w-12 h-12 bg-white border border-slate-150 rounded-xl flex items-center justify-center shadow-sm">
                  {col.icon}
                </div>
                <h3 className="font-bold text-slate-850 text-sm tracking-tight">{col.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{col.desc}</p>
              </div>
            ))}
          </div>

          {/* Divided objectives & milestones list as layout requires */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-20 pt-16 border-t border-slate-200">
            
            {/* Timeline */}
            <div className="space-y-6">
              <h3 className="font-extrabold text-xl text-slate-900 flex items-center gap-2">
                <span className="text-indigo-600">■</span> Our Primary Milestones
              </h3>
              
              <div className="relative border-l border-slate-300 pl-6 ml-3 space-y-8 py-2">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow shadow-indigo-600/35"></div>
                  <h4 className="font-bold text-sm text-slate-850">01. Digital Shift</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    Establishing a highly resilient digital standard. Migrating off archaic, slow offline print bids.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow shadow-indigo-600/35"></div>
                  <h4 className="font-bold text-sm text-slate-850">02. Price Assurances</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    Implementing automated L1 pricing to maximize taxpayer coin utilization and verify seller qualifications.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow shadow-indigo-600/35"></div>
                  <h4 className="font-bold text-sm text-slate-850">03. Supplier Growth</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    Adding hundreds of verified MSMEs and native tech builders with direct-to-consumer catalogs.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow shadow-indigo-600/35"></div>
                  <h4 className="font-bold text-sm text-slate-850">04. Audit Trails</h4>
                  <p className="text-xs text-slate-500 mt-1 leading-normal">
                    Securing permanent system logs for instant tracking by government audit departments.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefits box and features as layout requires */}
            <div className="space-y-6">
              <h3 className="font-extrabold text-xl text-slate-900 flex items-center gap-2">
                <span className="text-indigo-600">■</span> Realized Procurement Savings
              </h3>

              <div className="space-y-4">
                {[
                  { emoji: "💰", title: "Consolidated Fiscal Savings", val: "Saves up to 15-25% from competitive auction catalogs." },
                  { emoji: "🔐", title: "End-to-End Cryptography", val: "All transactions are fully secure and digitally certified." },
                  { emoji: "📊", title: "Data-Driven Analytics", val: "Interactive dashboards keep procurement records accurate and transparent." },
                  { emoji: "🌐", title: "Pan-India Access", val: "Available to any validated block or municipal government body." }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 p-4.5 bg-slate-50 border border-slate-200 rounded-xl items-center">
                    <div className="text-2xl">{item.emoji}</div>
                    <div>
                      <strong className="text-sm font-bold text-slate-850 block">{item.title}</strong>
                      <p className="text-xs text-slate-500 mt-0.5">{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
