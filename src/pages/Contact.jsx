/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, HelpCircle, Building } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    department: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) {
      alert('🔒 Validation Notice:\nPlease fill in all required fields (Full Name, Official Email, and Message).');
      return;
    }
    setSubmitted(true);
    alert(`📬 Message Submitted:\n\nThank you, ${formData.fullName}.\nWe have generated a support ticket inside GovMart Support. A representative from the Ministry building will contact you at ${formData.email}.`);
    // reset form
    setFormData({
      fullName: '',
      department: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setSubmitted(false);
  };

  const faqs = [
    {
      q: "How do suppliers register on the portal?",
      a: "Suppliers can access the Register module, select 'Seller', and input relevant GSTIN, PAN, and company identity credentials. Once vetted, listings become live."
    },
    {
      q: "What authorization documents do government buyers require?",
      a: "Government buyers require an active Employee ID card, matching department sanction guidelines, and a valid official gov.in/nic.in email."
    },
    {
      q: "What are the rules regarding pricing and L1 bid discoveries?",
      a: "The portal runs dual technical evaluations followed by financial discovery. System modules automatically flag and discover L1 lowest conforming values."
    },
    {
      q: "Is there an administration fee to use GovMart?",
      a: "Registration and catalog viewing are entirely free. Standard state transaction fee guidelines apply, of up to 0.5% during order completion cycles."
    }
  ];

  return (
    <div className="font-sans">
      
      {/* Page Hero */}
      <section className="bg-slate-900 py-14 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.08)_0%,transparent_70%)]"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 bg-indigo-500/10 text-indigo-300 border border-indigo-400/20 text-xs font-semibold px-3 py-1 rounded-full uppercase">
            <Mail className="w-3.5 h-3.5" /> Support 24/7 Desk
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Support Office
          </h1>
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Draft queries regarding bid audits, corporate listings rules, or department integrations.
          </p>
        </div>
      </section>

      {/* Main contact columns layout */}
      <section className="py-12 bg-slate-50 min-h-[65vh]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Col - Reactive Message Desk Form */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              
              <div>
                <h2 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
                  <Send className="w-4.5 h-4.5 text-indigo-600" /> Send an Official Message
                </h2>
                <p className="text-xs text-slate-500 mt-1">Our procurement officers typically address complaints within 24 operational hours.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g., Rajesh Kumar"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full text-xs font-semibold p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Department / Firm</label>
                    <input
                      type="text"
                      placeholder="e.g., Ministry of Finance"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full text-xs font-semibold p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Official Email *</label>
                    <input
                      type="email"
                      placeholder="e.g., officer@gov.in"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-xs font-semibold p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="e.g., +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-xs font-semibold p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Message Subject</label>
                  <input
                    type="text"
                    placeholder="e.g., Requesting custom catalog clarification"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full text-xs font-semibold p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">Detailed Message Body *</label>
                  <textarea
                    placeholder="Please specify model numbers, tender referential IDs or registry metrics..."
                    rows="4"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full text-xs font-semibold p-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:border-indigo-500 focus:bg-white resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider shadow-md transition duration-150 cursor-pointer text-center"
                >
                  Send Encrypted Query Ticket
                </button>

              </form>

            </div>

            {/* Right Col - Contact guidelines & FAQ listing */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Maps placeholder vector styled */}
              <div className="p-6 bg-slate-900 border border-slate-850 rounded-2xl text-white text-center space-y-2 relative overflow-hidden shadow-lg">
                <div className="absolute right-0 top-0 text-[100px] leading-none opacity-5 font-mono select-none">🗺</div>
                <MapPin className="w-8 h-8 text-indigo-400 mx-auto" />
                <div className="text-sm font-bold tracking-tight">New Delhi Headquarters</div>
                <p className="text-[11px] text-slate-400 leading-normal px-2">GovMart HQ Building, Ministry of Commerce, Udyog Bhavan, Delhi — 110001</p>
              </div>

              {/* Direct coordinates list */}
              <div className="space-y-3">
                {[
                  { icon: <Mail className="w-5 h-5 text-indigo-600" />, header: "Official Email Address", desc: "support@govmart.gov.in / bids@govmart.gov.in" },
                  { icon: <Phone className="w-5 h-5 text-indigo-600" />, header: "National Helpline Counter", desc: "1800-410-0288 (Toll Free support desk)" }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3.5 bg-white border border-slate-200 p-4 rounded-xl shadow-sm items-center">
                    <div className="w-10 h-10 bg-slate-50 rounded-lg flex items-center justify-center shrink-0 border border-slate-150 shadow-sm">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-850 text-xs tracking-tight">{item.header}</h4>
                      <p className="text-slate-500 text-[11px] font-semibold mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Support FAQs Accordion */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
                <h3 className="font-extrabold text-slate-900 text-sm tracking-tight flex items-center gap-2">
                  <HelpCircle className="w-4.5 h-4.5 text-indigo-600" /> Administrative FAQ
                </h3>
                
                <div className="space-y-3">
                  {faqs.map((faq, index) => (
                    <div key={index} className="p-3 bg-slate-50 border border-slate-150 rounded-xl space-y-1">
                      <div className="font-extrabold text-slate-805 text-[11px] leading-tight">Q. {faq.q}</div>
                      <p className="text-[10.5px] text-slate-550 leading-relaxed font-semibold">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
