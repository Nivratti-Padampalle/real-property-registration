import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services-container">

      <h2 className="main-title">Our Property Services</h2>
      <p className="subtitle">
        Online Property Registration System provides end-to-end digital
        services related to property registration, verification, and tracking.
      </p>

      {/* SERVICE 1 */}
      <div className="service-box">
        <img
          src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=60"
          alt="Property Registration"
        />
        <div className="service-content">
          <h3>🏠 Online Property Registration</h3>
          <p>
            Citizens can register residential, commercial, or agricultural
            property online without visiting government offices.
          </p>
          <p>
            The digital registration process saves time and improves
            transparency.
          </p>
        </div>
      </div>

      {/* SERVICE 2 */}
      <div className="service-box reverse">
        <img
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=60"
          alt="Property Search"
        />
        <div className="service-content">
          <h3>🔍 Property Search & Verification</h3>
          <p>
            Users can search properties using property ID, owner name,
            or location.
          </p>
          <p>
            This helps verify ownership and avoid fraud.
          </p>
        </div>
      </div>

      {/* SERVICE 3 */}
      <div className="service-box">
        <img
          src="https://images.unsplash.com/photo-1605902711622-cfb43c44367f?auto=format&fit=crop&w=900&q=60"
          alt="Stamp Duty"
        />
        <div className="service-content">
          <h3>💰 Stamp Duty & Fee Calculation</h3>
          <p>
            The system calculates stamp duty and registration fees
            automatically.
          </p>
          <p>
            Accurate calculation reduces manual errors.
          </p>
        </div>
      </div>

      {/* SERVICE 4 */}
      <div className="service-box reverse">
        <img
          src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=900&q=60"
          alt="Document Verification"
        />
        <div className="service-content">
          <h3>📄 Digital Document Verification</h3>
          <p>
            Required documents are uploaded and verified digitally.
          </p>
          <p>
            This increases trust and reduces fake documentation.
          </p>
        </div>
      </div>

      {/* SERVICE 5 */}
      <div className="service-box">
        <img
          src="https://images.unsplash.com/photo-1506784365847-bbad939e9335?auto=format&fit=crop&w=900&q=60"
          alt="Appointment Booking"
        />
        <div className="service-content">
          <h3>📅 Online Appointment Booking</h3>
          <p>
            Applicants can book appointments with the registrar office online.
          </p>
          <p>
            This reduces waiting time and crowd.
          </p>
        </div>
      </div>

      {/* SERVICE 6 */}
      <div className="service-box reverse">
        <img
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=60"
          alt="Application Status Tracking"
        />
        <div className="service-content">
          <h3>📊 Application Status Tracking</h3>
          <p>
            Users can track application status like Pending, Approved, or Rejected.
          </p>
          <p>
            This ensures transparency in the system.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Services;
