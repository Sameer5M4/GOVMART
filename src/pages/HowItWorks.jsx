/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { User, Factory, Cpu, FileText, Award, CheckCircle, Smartphone, Building, RefreshCw } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: <User className="w-12 h-12 text-indigo-600" />,
      title: "Buyer Verification Onboarding",
      desc: "Central & state departments enter using official NIC certificates or gov.in official emails. Approved parameters authorize instant access controls.",
      points: [
        "Official credentials validation mapping",
        "Encrypted digital-signature key assignment",
        "Role-based action parameters",
        "Federal security policy enforcement"
      ]
    },
    {
      num: "02",
      icon: <Factory className="w-12 h-12 text-purple-600" />,
      title: "Seller Validation Registry",
      desc: "MSMEs, cottage entities, and large manufacturers authenticate using current PAN, GSTIN, and corporate certifications.",
      points: [
        "Direct GST and Income Tax database sync",
        "MSME / Startup India registry validations",
        "Validated bank credentials checks",
        "Certified manufacturing quality upload"
      ]
    },
    {
      num: "03",
      icon: <Cpu className="w-12 h-12 text-teal-600" />,
      title: "Interactive Product Listing",
      desc: "Sellers list product specifications, images, pricing guidelines, delivery timelines, and certified warranties into public databases.",
      points: [
        "Detail specification catalog parameters",
        "Unified price limits setup",
        "Delivery logistics and warranty info",
        "System quality validation checklist review"
      ]
    },
    {
      num: "04",
      icon: <FileText className="w-12 h-12 text-rose-600" />,
      title: "RFP & Tender Publishing",
      desc: "Buyer authorities draft transparent procurement requirements, outlining specific technical metrics, deadlines, and allocated budgets.",
      points: [
        "Detailed bill of materials parameters",
        "Eligibility and pre-bid questions setup",
        "Instant national vendor notifications",
        "Automated system publication timelines"
      ]
    },
    {
      num: "05",
      icon: <Award className="w-12 h-12 text-amber-600" />,
      title: "Technical Audits & Bid Selection",
      desc: "Secure automated systems score and double-evaluate vendor submissions. Compliant tenders trigger dynamic L1 automated bidding checks.",
      points: [
        "Fully encrypted cryptographically secure bids lockbox",
        "Automated two-stage committee screening",
        "L1 (Lowest conforming price) discovery algorithm",
        "Instantly auditable ranking sheets results"
      ]
    },
    {
      num: "06",
      icon: <CheckCircle className="w-12 h-12 text-emerald-600" />,
      title: "Secure Fulfillment & Payments Cycle",
      desc: "The selected supplier gets instant electronic notifications. Safe banking gateways track milestone dispatches for quick payments.",
      points: [
        "Real-time purchase order (PO) generation",
        "Inspected shipment track-logs sync",
        "Milestone-linked public banking dispatches",
        "Supplier performance rating statistics log"
      ]
    }
  ];

  return (
    <div className="font-sans">
      
      {/* Page Hero */}
      <section className="bg-slate-900 py-14 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.08)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 bg-indigo-500/10 text-indigo-300 border border-indigo-400/20 text-xs font-semibold px-3 py-1 rounded-full uppercase">
            <RefreshCw className="w-3.5 h-3.5" /> End-to-End Auditing
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Operational Roadmap
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Deconstructing the exact digital compliance architecture utilized during national biddings.
          </p>
        </div>
      </section>

      {/* Alternate detailed grid segments */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          {steps.map((step, idx) => {
            const isReversed = idx % 2 === 1;
            return (
              <div
                key={step.num}
                className={`flex flex-col lg:flex-row gap-8 lg:gap-14 items-center bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm transition-all duration-300 hover:shadow-md ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Icon panel */}
                <div className="w-full lg:w-1/2 bg-slate-50 border border-slate-150 rounded-2xl min-h-[220px] flex items-center justify-center relative overflow-hidden shrink-0">
                  <div className="absolute bottom-2 right-4 text-7xl font-mono font-black text-slate-150 select-none">
                    {step.num}
                  </div>
                  <div className="p-8 bg-white border border-slate-100 rounded-2xl shadow-md transition duration-305 hover:scale-110 relative z-10">
                    {step.icon}
                  </div>
                </div>

                {/* Content description segment */}
                <div className="w-full lg:w-1/2 space-y-4">
                  <span className="inline-block bg-indigo-50 text-indigo-700 border border-indigo-150 text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full font-mono">
                    Phase {step.num}
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                    {step.title}
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                  
                  {/* Bullet checklist points mapping */}
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-semibold text-slate-505 pt-2">
                    {step.points.map((p, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-5 h-5 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0">✓</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
