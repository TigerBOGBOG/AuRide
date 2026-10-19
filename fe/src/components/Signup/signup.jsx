import { useState } from 'react';
import './signup.css';

const Icon = ({ children }) => (
  <svg className="rn-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{children}</svg>
);

const strength = (p) =>
  Math.min(4, (p.length >= 8) + /[A-Z]/.test(p) + /[0-9]/.test(p) + /[^A-Za-z0-9]/.test(p));

// UI เท่านั้น — ยังไม่มี logic การสมัคร (ใส่ที่ onSubmit ได้ทีหลัง)
export default function Signup() {
  const [show, setShow] = useState(false);
  const [pw, setPw] = useState('');
  const score = pw ? strength(pw) : 0;

  return (
    <main className="rn rn-signup">
      <header className="rn-hero">
        <svg className="rn-mount" viewBox="0 0 390 90" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 90V58l48-26 36 22 52-40 44 34 40-18 56 30 40-20 74 38v22z" fill="#003853" opacity=".92" />
          <path d="M0 90V74l60-18 44 16 70-26 60 24 56-14 100 22v12z" fill="#003853" />
        </svg>
        <svg className="rn-logo" viewBox="0 0 64 64" fill="none" stroke="#45BB89" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M32 5C19.5 5 10 14.6 10 26.5 10 42 32 59 32 59s22-17 22-32.5C54 14.6 44.5 5 32 5z" />
          <path d="M24 38l14-15M27 22h12v12" />
        </svg>
        <h1>RideNow</h1>
        <p>Your ride. Your way.</p>
      </header>

      <form className="rn-form" onSubmit={(e) => e.preventDefault()}>
        <h2>Create your account</h2>
        <p className="rn-sub">Join RideNow and go anywhere, safely.</p>

        <label className="rn-field sm">
          <Icon><circle cx="12" cy="8" r="4" /><path d="M4 20c1-4 4.5-6 8-6s7 2 8 6" /></Icon>
          <span className="rn-sr">Full name</span>
          <input type="text" placeholder="Full name" autoComplete="name" />
        </label>

        <label className="rn-field sm">
          <Icon><rect x="3" y="5" width="18" height="14" rx="3" /><path d="M4 7l8 6 8-6" /></Icon>
          <span className="rn-sr">Email address</span>
          <input type="email" placeholder="Email address" autoComplete="email" />
        </label>

        <label className="rn-field sm">
          <Icon><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M11 18.5h2" /></Icon>
          <span className="rn-sr">Phone number</span>
          <input type="tel" placeholder="Phone number" autoComplete="tel" />
        </label>

        <label className="rn-field sm">
          <Icon><rect x="5" y="11" width="14" height="9" rx="2.5" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></Icon>
          <span className="rn-sr">Password</span>
          <input type={show ? 'text' : 'password'} placeholder="Password" autoComplete="new-password" value={pw} onChange={(e) => setPw(e.target.value)} />
          <button type="button" className="rn-eye" onClick={() => setShow(!show)} aria-label={show ? 'Hide password' : 'Show password'}>
            <Icon><path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" /><circle cx="12" cy="12" r="3" />{show && <path d="M4 20L20 4" />}</Icon>
          </button>
        </label>
        <div className="rn-meter" aria-hidden="true">
          {[1, 2, 3, 4].map((n) => <i key={n} className={n <= score ? 'on' : ''} />)}
        </div>
        <p className="rn-hint">Use 8+ characters with a capital letter, number and symbol.</p>

        <label className="rn-check">
          <input type="checkbox" />
          <span>I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></span>
        </label>

        <button className="rn-cta">Create Account</button>

        <div className="rn-or"><i />or sign up with<i /></div>

        <button type="button" className="rn-ghost"><span className="rn-g">G</span>Google</button>

        <p className="rn-foot">Already have an account? <button type="button" className="rn-link strong">Log in</button></p>
      </form>
    </main>
  );
}