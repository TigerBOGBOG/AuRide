import "./signin.css";

function SignIn() {
  return (
    <div className="signin-page">
      {/* Left Visual */}
      <section className="signin-visual">
        <div className="visual-overlay"></div>

        <div className="brand">
          <div className="brand-icon">↗</div>
          <span>Auride</span>
        </div>

        <div className="visual-content">
          <p className="eyebrow">YOUR JOURNEY STARTS HERE</p>
          <h1>
            Move freely.
            <br />
            <span>Go anywhere.</span>
          </h1>
          <p className="visual-description">
            Fast, simple and reliable rides whenever you need them.
          </p>
        </div>

        <div className="visual-footer">
          <span>SAFE</span>
          <span>FAST</span>
          <span>ANYWHERE</span>
        </div>
      </section>

      {/* Login */}
      <section className="signin-form-section">
        <div className="signin-form-container">
          <div className="mobile-brand">
            <div className="brand-icon">↗</div>
            <span>Auride</span>
          </div>

          <div className="form-header">
            <p className="form-eyebrow">WELCOME BACK</p>
            <h2>Sign in</h2>
            <p>
              Sign in to book your next ride.
            </p>
          </div>

          <form className="signin-form">
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
              />
            </div>

            <div className="input-group">
              <div className="password-label">
                <label htmlFor="password">Password</label>
                <a href="/">Forgot password?</a>
              </div>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
              />
            </div>

            <button type="submit" className="signin-button">
              Sign in
              <span>→</span>
            </button>
          </form>

          <div className="divider">
            <span>or continue with</span>
          </div>

          <button className="google-button" type="button">
            <span className="google-icon">G</span>
            Continue with Google
          </button>

          <p className="signup-text">
            Don't have an account?{" "}
            <a href="/signup">Create one</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default SignIn;