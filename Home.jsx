import { useNavigate } from "react-router-dom";
import HomeNavbar from "./HomeNavbar";
import "./Home.css";


function Home() {
  const navigate = useNavigate();

  return (
    <>
      <HomeNavbar />

      <section className="hero">
        <div className="hero-text">
          <h1>Online Plot Registration System</h1>
          <p>
            A secure and transparent platform to register plots and manage
            property records digitally.
          </p>

          <button onClick={() => navigate("/start")}>
  Get Started
</button>

        </div>

        <div className="hero-image">
          <img
            src="/registry_image.png"
            alt="3D Registry"
          />
        </div>
      </section>

      <section className="info">
        <div className="card">
          <h3>Digital Registration</h3>
          <p>Paperless and fast plot registration system.</p>
        </div>

        <div className="card">
          <h3>Secure Records</h3>
          <p>All property data stored safely and securely.</p>
        </div>

        <div className="card">
          <h3>Easy Tracking</h3>
          <p>Track your application status anytime.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Online Registry System | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default Home;
