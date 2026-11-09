import { useState } from "react";
import "./home.css";
import Navbar from "../Navbar/Navbar";

function Home() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [loadingGPS, setLoadingGPS] = useState(false);

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Your browser does not support GPS");
      return;
    }

    setLoadingGPS(true);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setPickup(`${latitude}, ${longitude}`);
        setLoadingGPS(false);

        console.log("GPS:", latitude, longitude);
      },
      (error) => {
        console.error(error);
        alert(error.message);
        setLoadingGPS(false);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  const handleFindRide = () => {
    if (!pickup || !destination) {
      alert("Please enter pickup and destination");
      return;
    }

    console.log({
      pickup,
      destination,
    });
  };

  return (
    <div className="home-page">
      <Navbar />

      <main className="home-main">
        <section className="hero-section">
          <div className="hero-overlay"></div>

          <div className="hero-content">
            <div className="hero-copy">
              <p className="hero-eyebrow">
                YOUR JOURNEY STARTS HERE
              </p>

              <h1>
                Where are you
                <br />
                <span>going today?</span>
              </h1>

              <p className="hero-description">
                Get where you need to go safely, comfortably, and on time.
              </p>
            </div>

            <div className="booking-card">
              <div className="booking-header">
                <div>
                  <p className="booking-eyebrow">BOOK A RIDE</p>
                  <h2>Where to?</h2>
                </div>

                <button
                  className="location-button"
                  onClick={getCurrentLocation}
                  disabled={loadingGPS}
                >
                  {loadingGPS ? "..." : "⌖"}
                </button>
              </div>

              <div className="location-inputs">
                <div className="location-line">
                  <div className="location-dot pickup"></div>

                  <div className="location-field">
                    <label>Pickup location</label>
                    <input
                      type="text"
                      placeholder="Use current location"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
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
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <button
                className="find-ride-button"
                onClick={handleFindRide}
              >
                Find a ride
                <span>→</span>
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;