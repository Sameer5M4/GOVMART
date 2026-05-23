/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { products } from '../data';
import { ChevronLeft, Star, ShoppingCart, MessageSquare, AlertCircle, Building, CheckCircle2 } from 'lucide-react';

export default function ProductDetail({ productId, onNavigate }) {
  const p = products.find((x) => x.id === productId);

  if (!p) {
    return (
      <div className="p-12 text-center bg-slate-50 min-h-[50vh] flex flex-col items-center justify-center">
        <p className="text-slate-600 font-bold mb-4">Specified product not found.</p>
        <button
          onClick={() => onNavigate('products')}
          className="bg-indigo-600 text-white font-bold px-4 py-2 rounded-lg text-xs"
        >
          Back to Listings
        </button>
      </div>
    );
  }

  // Get similar products under the exact same category, excluding itself
  const similarProducts = products
    .filter((x) => x.id !== p.id && x.category === p.category)
    .slice(0, 4);

  const handleOrder = () => {
    alert(`Demo Portal Simulated Signal:\n\nUnifying Purchase Order for ${p.name} at ${p.price}.\nThis order will be dispatched to ${p.seller} through strict secure electronic channels.`);
  };

  return (
    <div className="font-sans">
      
      {/* Detail Hero bar */}
      <section className="bg-slate-900 py-12 text-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <button
            onClick={() => onNavigate('products')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-white transition duration-200 cursor-pointer focus:outline-none mb-6 group border border-slate-705 px-3 py-1.5 rounded-lg bg-white/5"
          >
            <ChevronLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to Products Catalog
          </button>

          <div className="space-y-2">
            <span className="text-xs font-extrabold uppercase bg-indigo-500/15 border border-indigo-400/20 text-indigo-300 px-3 py-1 rounded-full">
              {p.category}
            </span>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight mt-2">{p.name}</h1>
            <p className="text-sm text-slate-400 font-semibold flex items-center gap-1">
              <Building className="w-4 h-4 text-slate-500" /> Supplied by {p.seller}
            </p>
          </div>
        </div>
      </section>

      {/* Main product columns spec info */}
      <section className="py-12 bg-slate-50 min-h-[60vh]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col - Graphic Emojis frame */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-10 flex items-center justify-center text-7xl sm:text-8xl shadow-sm aspect-square max-h-[460px] mx-auto w-full">
              <span className="animate-pulse">{p.emoji}</span>
            </div>

            {/* Right Col - Core details cards */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-0.5">Approved Unit Price</div>
                  <div className="text-2xl sm:text-3xl font-black text-indigo-700 font-mono">{p.price}</div>
                </div>
                <div className="bg-amber-50 rounded-xl p-2 px-4 shadow-sm border border-amber-100">
                  <div className="text-[10px] text-amber-600 font-extrabold uppercase tracking-widest text-center mb-0.5">User Score</div>
                  <div className="text-sm font-extrabold text-amber-700 font-mono flex items-center gap-1.5 justify-center">
                    <Star className="w-4.5 h-4.5 fill-amber-500 text-amber-500" /> {p.rating} / 5
                  </div>
                </div>
              </div>

              {/* Inventory tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold font-mono bg-emerald-50 text-emerald-700 border border-emerald-100">
                <CheckCircle2 className="w-3.5 h-3.5" /> Registry Status: {p.avail}
              </div>

              {/* Dynamic Description text */}
              <div className="space-y-2">
                <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-widest font-mono">Product Profile</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{p.desc}</p>
              </div>

              {/* Specific specifications JSON loop mapping */}
              <div className="space-y-4">
                <h3 className="font-extrabold text-sm text-slate-900 uppercase tracking-widest font-mono">Technical Specifications</h3>
                
                <div className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                  <table className="w-full text-xs text-left">
                    <tbody className="divide-y divide-slate-150">
                      {Object.entries(p.specs).map(([key, value]) => (
                        <tr key={key} className="hover:bg-slate-50 transition duration-150">
                          <td className="px-4 py-3.5 font-extrabold text-slate-505 bg-slate-55 w-1/3 border-r border-slate-150 capitalize">
                            {key.replace(/([A-Z])/g, ' $1')}
                          </td>
                          <td className="px-4 py-3.5 font-semibold text-slate-700">
                            {value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Supplier Verification box banner */}
              <div className="flex gap-3.5 p-4 bg-indigo-50/50 rounded-xl border border-indigo-100 items-center">
                <Building className="w-6 h-6 text-indigo-600 shrink-0" />
                <div>
                  <div className="text-xs font-extrabold text-slate-805">{p.seller}</div>
                  <p className="text-[10px] text-slate-500 font-medium">Verified National OEM • Fully GST Compliant • Digital Audits Verified</p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <button
                  onClick={handleOrder}
                  className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl text-center flex items-center justify-center gap-2 transition duration-200 shadow-lg shadow-indigo-100 uppercase tracking-wider text-xs cursor-pointer active:scale-95"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Raise Automated Purchase Order
                </button>
                <button
                  onClick={() => alert(`Demo Portal Support Desk:\nTender communication lines with ${p.seller} can be requested once registered and validated.`)}
                  className="bg-transparent hover:bg-slate-50 text-slate-800 border border-slate-300 font-bold py-3 px-6 rounded-xl flex items-center justify-center gap-2 transition text-xs uppercase cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4" />
                  Request Catalog Communication
                </button>
              </div>

            </div>
          </div>

          {/* Similar Items bottom grid */}
          {similarProducts.length > 0 && (
            <div className="mt-16 pt-12 border-t border-slate-200 space-y-6">
              <h3 className="font-extrabold text-lg text-slate-900 tracking-tight">Similar Catalog Items</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {similarProducts.map((sim) => (
                  <div
                    key={sim.id}
                    onClick={() => { onNavigate('product-detail', sim.id); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                    className="bg-white border border-slate-200 hover:border-indigo-400 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 cursor-pointer group"
                  >
                    <div className="h-32 bg-slate-50 flex items-center justify-center text-4xl group-hover:bg-slate-100">
                      {sim.emoji}
                    </div>
                    <div className="p-4 space-y-1">
                      <div className="text-[9px] font-extrabold text-slate-400 uppercase tracking-widest">{sim.category}</div>
                      <h4 className="font-bold text-xs text-slate-850 line-clamp-1 group-hover:text-indigo-600">{sim.name}</h4>
                      <div className="font-bold text-xs text-indigo-700">{sim.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
