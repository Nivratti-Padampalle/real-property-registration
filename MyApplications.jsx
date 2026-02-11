/*import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./MyApplications.css";
function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/my-applications")
      .then(res => res.json())
      .then(data => setApplications(data));
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ padding: "20px" }}>
        <h2>My Applications</h2>

        {applications.length === 0 ? (
          <p>No applications found</p>
        ) : (
          <table border="1" cellPadding="10">
            <thead>
              <tr>
                <th>Plot No</th>
                <th>Survey No</th>
                <th>Village</th>
                <th>Taluka</th>
                <th>Area</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, index) => (
                <tr key={index}>
                  <td>{app.plotNumber}</td>
                  <td>{app.surveyNumber}</td>
                  <td>{app.village}</td>
                  <td>{app.taluka}</td>
                  <td>{app.area}</td>
                  <td>{app.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default MyApplications;
*/
//update on user my application diffenrent 
/*
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./MyApplications.css";

function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/my-applications")
      .then(res => res.json())
      .then(data => setApplications(data));
  }, []);

  return (
    <>
      <Navbar />

      <div className="myapp-container">
        <h2>My Applications</h2>

        {applications.length === 0 ? (
          <p className="empty-text">No applications found</p>
        ) : (
          <div className="card-grid">
            {applications.map((app, index) => (
              <div className="app-card" key={index}>
                <div className="card-header">
                  <span className="plot-no">
                    Plot No: {app.plotNumber}
                  </span>
                  <span
                    className={`status ${app.status?.toLowerCase()}`}
                  >
                    {app.status}
                  </span>
                </div>

                <div className="card-body">
                  <p><b>Seller:</b> {app.sellerName}</p>
                  <p><b>Buyer:</b> {app.buyerName}</p>
                  <p><b>Survey No:</b> {app.surveyNumber}</p>
                  <p><b>Area:</b> {app.area}</p>
                  <p><b>Village:</b> {app.village}</p>
                  <p><b>Taluka:</b> {app.taluka}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default MyApplications;
*/
/*
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./MyApplications.css";

function MyApplications() {
  const [applications, setApplications] = useState([]);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    if (!userId) return;

    fetch(`http://localhost:5000/api/my-applications/${userId}`)
      .then(res => res.json())
      .then(data => setApplications(data))
      .catch(err => console.error("Error:", err));
  }, [userId]);

  return (
    <>
      <Navbar />

      <div className="myapp-container">
        <h2>My Applications</h2>

        {applications.length === 0 ? (
          <p className="empty-text">No applications found</p>
        ) : (
          <div className="card-grid">
            {applications.map((app, index) => (
              <div className="app-card" key={index}>
                <div className="card-header">
                  <span className="plot-no">
                    Plot No: {app.plotNumber}
                  </span>
                  <span
                    className={`status ${app.status?.toLowerCase()}`}
                  >
                    {app.status}
                  </span>
                </div>

                <div className="card-body">
                  <p><b>Seller:</b> {app.sellerName}</p>
                  <p><b>Buyer:</b> {app.buyerName}</p>
                  <p><b>Survey No:</b> {app.surveyNumber}</p>
                  <p><b>Area:</b> {app.area}</p>
                  <p><b>Village:</b> {app.village}</p>
                  <p><b>Taluka:</b> {app.taluka}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default MyApplications;
*/
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./MyApplications.css";

function MyApplications() {
  const [applications, setApplications] = useState([]);

  const userId = localStorage.getItem("userId");
  console.log("MY APPS USER ID:", userId); // 🔍 DEBUG

  useEffect(() => {
    if (!userId) return;

    fetch(`http://localhost:5000/my-applications/${userId}`)
      .then(res => res.json())
      .then(data => {
        console.log("MY APPS RESPONSE:", data); // 🔍 DEBUG
        setApplications(data);
      })
      .catch(err => console.error("FETCH ERROR:", err));
  }, [userId]);

  return (
    <>
      <Navbar />

      <div className="myapp-container">
        <h2>My Applications</h2>

        {applications.length === 0 ? (
          <p className="empty-text">No applications found</p>
        ) : (
          <div className="card-grid">
            {applications.map((app) => (
              <div className="app-card" key={app._id}>
                <div className="card-header">
                  <span className="plot-no">
                    Plot No: {app.plotNumber}
                  </span>
                  <span
                    className={`status ${app.status?.toLowerCase()}`}
                  >
                    {app.status}
                  </span>
                </div>

                <div className="card-body">
                  <p><b>Seller:</b> {app.sellerName}</p>
                  <p><b>Buyer:</b> {app.buyerName}</p>
                  <p><b>Survey No:</b> {app.surveyNumber}</p>
                  <p><b>Area:</b> {app.area}</p>
                  <p><b>Village:</b> {app.village}</p>
                  <p><b>Taluka:</b> {app.taluka}</p>
                  <p><b>District:</b> {app.district}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default MyApplications;


