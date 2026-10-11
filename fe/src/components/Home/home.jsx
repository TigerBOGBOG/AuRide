import "./home.css";

function Home() {
  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="home-navbar">
        <div className="home-logo">
          <div className="logo-icon">↗</div>
          <span>Auride</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#rides">My Rides</a>
          <a href="#help">Help</a>
        </div>

        <div className="nav-profile">
          <div className="profile-avatar">P</div>
          <span>Pannarong</span>
          <span className="profile-arrow">⌄</span>
        </div>
      </nav>

      {/* Hero */}
      <main className="home-main">
        <section className="hero-section">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <div className="hero-copy">
              <p className="hero-eyebrow">YOUR JOURNEY STARTS HERE</p>

              <h1>
                Where are you
                <br />
                <span>going today?</span>
              </h1>

              <p className="hero-description">
                Get where you need to go safely, comfortably, and on time.
              </p>
            </div>

            {/* Booking Card */}
            <div className="booking-card">
              <div className="booking-header">
                <div>
                  <p className="booking-eyebrow">BOOK A RIDE</p>
                  <h2>Where to?</h2>
                </div>

                <button className="location-button">⌖</button>
              </div>

              <div className="location-inputs">
                <div className="location-line">
                  <div className="location-dot pickup"></div>

                  <div className="location-field">
                    <label>Pickup location</label>
                    <input
                      type="text"
                      placeholder="Enter pickup location"
                    />
                  </div>
                </div>

                <div className="route-line"></div>

                <div className="location-line">
                  <div className="location-dot destination"></div>

                  <div className="location-field">
                    <label>Destination</label>
                    <input
                      type="text"
                      placeholder="Where are you going?"
                    />
                  </div>
                </div>
              </div>

              <button className="find-ride-button">
                Find a ride
                <span>→</span>
              </button>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="quick-section">
          <div className="section-heading">
            <div>
              <p className="section-eyebrow">QUICK ACCESS</p>
              <h2>Everything you need</h2>
            </div>
          </div>

          <div className="quick-grid">
            <div className="quick-card">
              <div className="quick-icon">＋</div>
              <div>
                <h3>Book a ride</h3>
                <p>Get a ride to your destination</p>
              </div>
              <span className="card-arrow">→</span>
            </div>

            <div className="quick-card">
              <div className="quick-icon blue">◷</div>
              <div>
                <h3>Ride history</h3>
                <p>View your previous journeys</p>
              </div>
              <span className="card-arrow">→</span>
            </div>

            <div className="quick-card">
              <div className="quick-icon navy">★</div>
              <div>
                <h3>Saved places</h3>
                <p>Go to your favorite locations</p>
              </div>
              <span className="card-arrow">→</span>
            </div>
          </div>
        </section>

        {/* Promo */}
        <section className="promo-section">
          <div className="promo-content">
            <p className="promo-eyebrow">AURIDE PLUS</p>
            <h2>More freedom in every journey.</h2>
            <p>
              Enjoy priority pickup, premium rides and more with Auride Plus.
            </p>

            <button className="promo-button">
              Explore Auride Plus
              <span>→</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;