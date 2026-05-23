/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Landmark, Lock, Mail, Eye, EyeOff, User, Building, Phone, KeyRound, CheckSquare, Sparkles } from 'lucide-react';

export default function Login({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('login'); // 'login' or 'register'
  
  // Login Form States
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [showLoginPass, setShowLoginPass] = useState(false);
  const [loginErr, setLoginErr] = useState('');

  // Registration Form States
  const [regType, setRegType] = useState('');
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [org, setOrg] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gst, setGst] = useState('');
  const [pan, setPan] = useState('');
  const [regPass, setRegPass] = useState('');
  const [cpass, setCpass] = useState('');
  const [showRegPass, setShowRegPass] = useState(false);
  const [showRegCpass, setShowRegCpass] = useState(false);
  const [regTerms, setRegTerms] = useState(false);
  const [regErr, setRegErr] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  // Password strength check computation values
  const checkStrength = (v) => {
    if (!v) return { score: 0, label: '', color: 'bg-slate-200' };
    let met = 0;
    if (v.length >= 8) met++;
    if (/[A-Z]/.test(v)) met++;
    if (/[0-9]/.test(v)) met++;
    if (/[^A-Za-z0-9]/.test(v)) met++;

    const labels = ['', 'Slightly Conforming', 'Fair Spec', 'Strong Standards', 'Highly Encrypted ✓'];
    const colors = ['', 'bg-rose-500', 'bg-amber-500', 'bg-teal-500', 'bg-emerald-500'];
    return {
      score: met * 25,
      label: labels[met] || '',
      color: colors[met] || 'bg-slate-200',
      checks: {
        len: v.length >= 8,
        up: /[A-Z]/.test(v),
        num: /[0-9]/.test(v),
        sp: /[^A-Za-z0-9]/.test(v)
      }
    };
  };

  const strength = checkStrength(regPass);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setLoginErr('');

    if (!loginEmail || !loginPass) {
      setLoginErr('⚠️ Please key in both User Email and Password values.');
      return;
    }
    if (!loginEmail.includes('@')) {
      setLoginErr('⚠️ Invalid email parameters mapped. Check formatting.');
      return;
    }
    if (loginPass.length < 4) {
      setLoginErr('⚠️ Account password must conform to secure guidelines.');
      return;
    }

    alert(`✅ Login Successful:\n\nWelcome back, ${loginEmail}!\nLogging into GovMart. In production, this forwards to your encrypted profile panel.`);
    onNavigate('home');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setRegErr('');

    if (!regType) { setRegErr('⚠️ Please select account type validation mapping (Buyer/Seller).'); return; }
    if (!fname) { setRegErr('⚠️ Please fill in first name details.'); return; }
    if (!regEmail.includes('@')) { setRegErr('⚠️ Correct email schema is required.'); return; }
    if (!phone) { setRegErr('⚠️ Please provide a contact phone coordinate.'); return; }
    if (regPass.length < 8) { setRegErr('⚠️ Security password requires at least 8 characters.'); return; }
    if (regPass !== cpass) { setRegErr('⚠️ Passwords do not match. Re-confirm inputs.'); return; }
    if (!regTerms) { setRegErr('⚠️ Terms accept conditions are required.'); return; }

    setIsSuccess(true);
  };

  return (
    <div className="font-sans min-h-[90vh] bg-slate-50 flex items-center justify-center py-12 px-6">
      
      <div className="max-w-5xl w-full bg-white border border-slate-200 rounded-2xl flex overflow-hidden shadow-xl min-h-[580px]">
        
        {/* Left Side (Decorative Blue branding banner) */}
        <div className="hidden lg:flex lg:w-5/12 bg-slate-900 text-white p-10 flex-col justify-between relative overflow-hidden shrink-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#143d6b] to-slate-900 z-0"></div>
          <div className="absolute -top-12 -right-12 w-44 h-44 bg-indigo-500/10 rounded-full blur-xl"></div>
          
          <div className="relative z-10 space-y-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-lg text-white shadow-xl">🏛️</div>
            <span className="font-black text-2xl tracking-tight block">Gov<span className="text-indigo-400">Mart</span></span>
            <p className="text-[10px] uppercase font-bold text-indigo-300 tracking-wider font-mono">Government Procurement Portal</p>
          </div>

          <div className="relative z-10 space-y-5">
            {[
              { icon: "🔒", label: "256-bit Secure Sockets Layer" },
              { icon: "✅", label: "Certified Department Authorities" },
              { icon: "🇮🇳", label: "Digital India Compliance Map" },
              { icon: "📋", label: "250+ Audited Tender Pipelines" },
              { icon: "🏭", label: "500+ Verified MSME Suppliers" }
            ].map((feat, i) => (
              <div key={i} className="flex gap-3 text-xs items-center font-medium text-slate-300">
                <span className="w-7 h-7 bg-white/5 rounded-md flex items-center justify-center text-sm border border-white/10 shrink-0">{feat.icon}</span>
                {feat.label}
              </div>
            ))}
          </div>

          <div className="relative z-10 bg-white/5 border border-white/10 rounded-xl p-4 text-[11px] leading-relaxed text-slate-400 italic">
            "GovMart unifies electronic bidding processes inside a singular, compliant React interface designed under secure ISO metrics."
          </div>
        </div>

        {/* Right Side form block */}
        <div className="w-full lg:w-7/12 p-8 sm:p-12 flex flex-col justify-center">
          
          {isSuccess ? (
            // REGISTRATION SUCCESS CONTAINER
            <div className="text-center space-y-5 py-6">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-3xl mx-auto shadow-md border border-emerald-100">🎉</div>
              <h3 className="font-black text-slate-900 text-xl tracking-tight">Registration Successfully Simmed!</h3>
              <p className="text-slate-500 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                Your GovMart developer credentials have been cached. In production, this issues an official registration approval email to <strong className="text-slate-800">{regEmail || 'your email'}</strong>.
              </p>
              <button
                onClick={() => { setIsSuccess(false); setActiveTab('login'); }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold py-3 px-6 rounded-xl transition cursor-pointer shadow-md inline-block"
              >
                Sign In to Platform
              </button>
            </div>
          ) : (
            // FORMS CONTAINER
            <div className="space-y-6">
              
              {/* Tab selector */}
              <div className="flex bg-slate-100 p-1.5 rounded-xl border border-slate-200">
                <button
                  onClick={() => setActiveTab('login')}
                  className={`flex-1 text-center py-2 text-xs font-bold rounded-lg cursor-pointer transition ${
                    activeTab === 'login' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800 bg-transparent'
                  }`}
                >
                  Sign In (Existing User)
                </button>
                <button
                  onClick={() => setActiveTab('register')}
                  className={`flex-1 text-center py-2 text-xs font-bold rounded-lg cursor-pointer transition ${
                    activeTab === 'register' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-500 hover:text-slate-800 bg-transparent'
                  }`}
                >
                  New Registry Enrollment
                </button>
              </div>

              {/* ACTIVE TAB: LOGIN */}
              {activeTab === 'login' && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Welcome Back 👋</h2>
                    <p className="text-xs text-slate-400">Please input your validated credentials below.</p>
                  </div>

                  {loginErr && (
                    <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-semibold">
                      {loginErr}
                    </div>
                  )}

                  <form onSubmit={handleLoginSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Official ID Email</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-450 w-4 h-4" />
                        <input
                          type="email"
                          required
                          placeholder="officer@ministry.gov.in"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 text-xs font-semibold bg-slate-50 border border-slate-250 rounded-xl focus:bg-white focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Secret Password</label>
                      <div className="relative">
                        <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-455 w-4 h-4" />
                        <input
                          type={showLoginPass ? 'text' : 'password'}
                          required
                          placeholder="Password credentials code..."
                          value={loginPass}
                          onChange={(e) => setLoginPass(e.target.value)}
                          className="w-full pl-10 pr-11 py-2.5 text-xs font-semibold bg-slate-50 border border-slate-250 rounded-xl focus:bg-white focus:outline-none focus:border-indigo-500"
                        />
                        <button
                          type="button"
                          onClick={() => setShowLoginPass(!showLoginPass)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-800"
                        >
                          {showLoginPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1 select-none">
                      <label className="flex items-center gap-2 font-semibold text-slate-500 cursor-pointer">
                        <input type="checkbox" className="rounded border-slate-300 text-indigo-600 focus:ring-none" /> Remember for 30 days
                      </label>
                      <button
                        type="button"
                        onClick={() => alert(`Demo Portal Support:\nContact regional system support officers to trigger security key restorations.`)}
                        className="text-indigo-600 hover:underline font-bold"
                      >
                        Help?
                      </button>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-indigo-600 hover:bg-indigo-750 text-white font-bold py-3.5 rounded-xl uppercase tracking-wider text-xs shadow-md shadow-indigo-100 hover:shadow-indigo-200 transition"
                    >
                      Authenticate credentials
                    </button>
                  </form>

                  <div className="relative flex py-2 items-center text-xs text-slate-400 font-bold uppercase select-none">
                    <div className="flex-grow border-t border-slate-200"></div>
                    <span className="flex-shrink mx-4">or sign in with</span>
                    <div className="flex-grow border-t border-slate-200"></div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 font-mono">
                    <button
                      onClick={() => alert('Simulating secure DigiLocker Single-Sign-On redirect...')}
                      className="p-2.5 border border-slate-250 rounded-xl hover:bg-slate-50 text-xs font-bold text-slate-700 flex items-center justify-center gap-2 cursor-pointer transition"
                    >
                      🔵 DigiLocker
                    </button>
                    <button
                      onClick={() => alert('Simulating official Aadhaar biometric-authentication callback...')}
                      className="p-2.5 border border-slate-250 rounded-xl hover:bg-slate-50 text-xs font-bold text-slate-705 flex items-center justify-center gap-2 cursor-pointer transition"
                    >
                      🟠 Aadhaar SSO
                    </button>
                  </div>
                </div>
              )}

              {/* ACTIVE TAB: REGISTER */}
              {activeTab === 'register' && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Enterprise Registry List 🚀</h2>
                    <p className="text-xs text-slate-450 font-medium">Map structural credentials to compile verified digital logs.</p>
                  </div>

                  {regErr && (
                    <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-750 text-xs font-semibold">
                      {regErr}
                    </div>
                  )}

                  <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
                    
                    {/* Account Type dropdown */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Select Enrollment Identity *</label>
                      <select
                        required
                        value={regType}
                        onChange={(e) => setRegType(e.target.value)}
                        className="w-full text-xs font-bold p-2.5 bg-slate-50 border border-slate-250 rounded-xl cursor-pointer focus:outline-none focus:border-indigo-500 focus:bg-white"
                      >
                        <option value="">— Select Enrollment Account Type —</option>
                        <option value="buyer">🏢 Government Buyer (Local Ministry / Block Agency)</option>
                        <option value="seller">🏭 OEM Supplier (MSME / Verified Manufacturer)</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1 font-mono">First Name *</label>
                        <input
                          type="text"
                          required
                          placeholder="Rajesh"
                          value={fname}
                          onChange={(e) => setFname(e.target.value)}
                          className="w-full text-xs font-semibold p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1 font-mono">Last Name</label>
                        <input
                          type="text"
                          placeholder="Kumar"
                          value={lname}
                          onChange={(e) => setLname(e.target.value)}
                          className="w-full text-xs font-semibold p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-indigo-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Company / Ministry Department *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ministry of Power / Acme Logistics Ltd"
                        value={org}
                        onChange={(e) => setOrg(e.target.value)}
                        className="w-full text-xs font-semibold p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-indigo-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-mono">Official Email *</label>
                        <input
                          type="email"
                          required
                          placeholder="officer@gov.in"
                          value={regEmail}
                          onChange={(e) => setRegEmail(e.target.value)}
                          className="w-full text-xs font-semibold p-2.5 bg-slate-55 border border-slate-200 rounded-xl focus:bg-white focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1 font-mono">Mobile Number *</label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full text-xs font-semibold p-2.5 bg-slate-55 border border-slate-200 rounded-xl focus:bg-white focus:outline-none"
                        />
                      </div>
                    </div>

                    {/* GST / PAN optional variables mapping */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 border-t border-slate-100 pt-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1 font-mono">GSTIN Number</label>
                        <input
                          type="text"
                          placeholder="e.g., 22AAAAA0000A1Z5"
                          value={gst}
                          onChange={(e) => setGst(e.target.value)}
                          className="w-full text-xs font-semibold p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-1 font-mono">PAN Number</label>
                        <input
                          type="text"
                          placeholder="e.g., AAAPL1234C"
                          value={pan}
                          onChange={(e) => setPan(e.target.value)}
                          className="w-full text-xs font-semibold p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                        />
                      </div>
                    </div>

                    {/* Create Password strength indicator */}
                    <div className="space-y-1.5 pt-1.5">
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-0.5">Setup Password *</label>
                      
                      <div className="relative">
                        <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-455 w-4 h-4" />
                        <input
                          type={showRegPass ? 'text' : 'password'}
                          required
                          placeholder="Generate a robust authentication password"
                          value={regPass}
                          onChange={(e) => setRegPass(e.target.value)}
                          className="w-full pl-10 pr-11 p-2.5 text-xs font-semibold bg-slate-55 border border-slate-200 rounded-xl focus:bg-white focus:outline-none"
                        />
                        <button
                          type="button"
                          onClick={() => setShowRegPass(!showRegPass)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                        >
                          {showRegPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>

                      {/* Animated strength filling gauge */}
                      {regPass && (
                        <div className="space-y-1.5 pt-1">
                          <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                            <div className={`${strength.color} h-full transition-all duration-300`} style={{ width: `${strength.score}%` }}></div>
                          </div>
                          <div className="text-[10px] font-bold text-slate-650 tracking-tight flex justify-between items-center px-1 font-mono">
                            <span>Score Metric: {strength.score}%</span>
                            <span className="text-indigo-600 font-extrabold uppercase">{strength.label}</span>
                          </div>
                          
                          {/* Compliance checklist highlights */}
                          <div className="grid grid-cols-2 gap-2 text-[9.5px] font-semibold text-slate-500 pt-1 font-mono">
                            <div className={`flex items-center gap-1.5 ${strength.checks?.len ? 'text-emerald-700' : ''}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${strength.checks?.len ? 'bg-emerald-500' : 'bg-slate-355'}`}></span>
                              8+ Characters
                            </div>
                            <div className={`flex items-center gap-1.5 ${strength.checks?.up ? 'text-emerald-700' : ''}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${strength.checks?.up ? 'bg-emerald-500' : 'bg-slate-355'}`}></span>
                              Uppercase Letter
                            </div>
                            <div className={`flex items-center gap-1.5 ${strength.checks?.num ? 'text-emerald-700' : ''}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${strength.checks?.num ? 'bg-emerald-500' : 'bg-slate-355'}`}></span>
                              Includes Digit
                            </div>
                            <div className={`flex items-center gap-1.5 ${strength.checks?.sp ? 'text-emerald-700' : ''}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${strength.checks?.sp ? 'bg-emerald-500' : 'bg-slate-355'}`}></span>
                              Special Symbol
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">Confirm Password *</label>
                      <div className="relative">
                        <input
                          type={showRegCpass ? 'text' : 'password'}
                          required
                          placeholder="Repeat security password confirm code..."
                          value={cpass}
                          onChange={(e) => setCpass(e.target.value)}
                          className="w-full pl-4 pr-11 p-2.5 text-xs font-semibold bg-slate-55 border border-slate-200 rounded-xl focus:bg-white"
                        />
                        <button
                          type="button"
                          onClick={() => setShowRegCpass(!showRegCpass)}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                        >
                          {showRegCpass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>

                    <label className="flex items-start gap-2 text-[10.5px] font-semibold text-slate-500 pt-1 leading-snug cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={regTerms}
                        onChange={(e) => setRegTerms(e.target.checked)}
                        className="rounded border-slate-300 mt-0.5 text-indigo-600"
                      />
                      <span>I understand that this is an educational simulation. I agree to support standard platform testing rules.</span>
                    </label>

                    <button
                      type="submit"
                      className="w-full bg-indigo-600 hover:bg-indigo-755 text-white font-bold py-3.5 rounded-xl uppercase tracking-wider text-xs shadow-md transition"
                    >
                      Process simulated enrollment
                    </button>

                  </form>
                </div>
              )}

            </div>
          )}

        </div>

      </div>

    </div>
  );
}
