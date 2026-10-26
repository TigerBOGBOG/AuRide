
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CircleUserRound } from 'lucide-react';
import './signup.css';
import { register } from '../../api/auth';

const Icon = ({ children }) => (
  <svg
    className="rn-ico"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {children}
  </svg>
);

const strength = (p) =>
  Math.min(
    4,
    Number(p.length >= 8) +
      Number(/[A-Z]/.test(p)) +
      Number(/[0-9]/.test(p)) +
      Number(/[^A-Za-z0-9]/.test(p))
  );

export default function Signup() {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const score = password ? strength(password) : 0;

  async function handleSubmit(e) {
    e.preventDefault();
    setMessage('');

    if (strength(password) < 4) {
      setMessage(
        'Password must have 8+ characters, an uppercase letter, a number, and a symbol.'
      );
      return;
    }

    setLoading(true);

    try {
      const data = await register(name, username, password);

      setMessage('Registration successful!');
      console.log(data);
    } catch (error) {
      setMessage(error.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="rn rn-signup">
      <header className="rn-hero">
        <svg
          className="rn-mount"
          viewBox="0 0 390 90"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0 90V58l48-26 36 22 52-40 44 34 40-18 56 30 40-20 74 38v22z"
            fill="#003853"
            opacity=".92"
          />
          <path
            d="M0 90V74l60-18 44 16 70-26 60 24 56-14 100 22v12z"
            fill="#003853"
          />
        </svg>

        <svg
          className="rn-logo"
          viewBox="0 0 64 64"
          fill="none"
          stroke="#45BB89"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M32 5C19.5 5 10 14.6 10 26.5 10 42 32 59 32 59s22-17 22-32.5C54 14.6 44.5 5 32 5z" />
          <path d="M24 38l14-15M27 22h12v12" />
        </svg>

        <h1>Auride</h1>
        <p>Your ride. Your way.</p>
      </header>

      <form className="rn-form" onSubmit={handleSubmit}>
        <h2>Create your account</h2>
        <p className="rn-sub">
          Join Auride and go anywhere, safely.
        </p>

        <label className="rn-field sm">
          <Icon>
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c1-4 4.5-6 8-6s7 2 8 6" />
          </Icon>
          <span className="rn-sr">Name</span>
          <input
            type="text"
            placeholder="Name"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>

        <label className="rn-field sm">
          <CircleUserRound size={20} strokeWidth={1.8} />
          <span className="rn-sr">Username</span>
          <input
            type="text"
            name="username"
            placeholder="Username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>

        <label className="rn-field sm">
          <Icon>
            <rect x="5" y="11" width="14" height="9" rx="2.5" />
            <path d="M8 11V8a4 4 0 0 1 8 0v3" />
          </Icon>
          <span className="rn-sr">Password</span>
          <input
            type={show ? 'text' : 'password'}
            placeholder="Password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
            required
          />
          <button
            type="button"
            className="rn-eye"
            onClick={() => setShow(!show)}
            aria-label={show ? 'Hide password' : 'Show password'}
          >
            <Icon>
              <path d="M2 12s3.6-6.5 10-6.5S22 12 22 12s-3.6 6.5-10 6.5S2 12 2 12z" />
              <circle cx="12" cy="12" r="3" />
              {show && <path d="M4 20L20 4" />}
            </Icon>
          </button>
        </label>

        <div className="rn-meter" aria-hidden="true">
          {[1, 2, 3, 4].map((n) => (
            <i key={n} className={n <= score ? 'on' : ''} />
          ))}
        </div>

        <p className="rn-hint">
          Use 8+ characters with a capital letter, number and symbol.
        </p>

        <label className="rn-check">
          <input type="checkbox" required />
          <span>
            I agree to the <a href="#terms">Terms of Service</a> and{' '}
            <a href="#privacy">Privacy Policy</a>
          </span>
        </label>

        {message && (
          <p role="status" aria-live="polite">
            {message}
          </p>
        )}

        <button className="rn-cta" type="submit" disabled={loading}>
          {loading ? 'Creating account...' : 'Create Account'}
        </button>

        <div className="rn-or">
          <i />
          or sign up with
          <i />
        </div>

        <button type="button" className="rn-ghost">
          <span className="rn-g">G</span>
          Google
        </button>

        <p className="rn-foot">
          Already have an account?{' '}
          <Link to="/login" className="rn-link strong">
            Log in
          </Link>
        </p>
      </form>
    </main>
  );
}
