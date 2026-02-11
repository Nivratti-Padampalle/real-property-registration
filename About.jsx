import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">

      {/* HEADER SECTION */}
      <div className="about-header">
        <h2>About Our System</h2>
        <p>
          Online Property Registration System is a digital platform designed
          to simplify, secure, and speed up property-related services for
          citizens and government authorities.
        </p>
      </div>

      {/* SECTION 1 */}
      <div className="about-section">
        <img
          src="https://images.unsplash.com/photo-1581092919535-7146c43f8b2b?auto=format&fit=crop&w=900&q=60"
          alt="Digital Governance"
        />
        <div className="about-content">
          <h3>🌐 Digital Property Management</h3>
          <p>
            The system enables complete digitization of property registration
            processes. Citizens can apply for registration, upload documents,
            and track application status online without visiting government
            offices multiple times.
          </p>
          <p>
            This reduces paperwork, saves time, and ensures transparency in
            property transactions.
          </p>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="about-section reverse">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=60"
          alt="Secure System"
        />
        <div className="about-content">
          <h3>🔒 Secure & Reliable Platform</h3>
          <p>
            Security is a key feature of the system. User authentication,
            data encryption, and controlled access ensure that sensitive
            property information remains protected.
          </p>
          <p>
            Only authorized officials can verify documents and approve
            applications.
          </p>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="about-section">
        <img
          src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=60"
          alt="Transparency"
        />
        <div className="about-content">
          <h3>📊 Transparency & Tracking</h3>
          <p>
            Applicants can track their application status in real time such
            as Submitted, Pending, Approved, or Rejected.
          </p>
          <p>
            This improves communication between citizens and authorities and
            increases trust in the registration process.
          </p>
        </div>
      </div>

      {/* SECTION 4 */}
      <div className="about-section reverse">
        <img
          src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=900&q=60"
          alt="Government Services"
        />
        <div className="about-content">
          <h3>🏛️ Government & Citizen Friendly</h3>
          <p>
            The platform benefits both citizens and government offices by
            reducing workload, minimizing errors, and speeding up approvals.
          </p>
          <p>
            It supports the vision of Digital India and e-Governance.
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;
