import Navbar from "./Navbar";
import "./Dashboard.css";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />

      <div className="dashboard">
        <h2>Sub-Registrar Dashboard</h2>

        <div className="card-container">
          
          <div className="card">
            <h3>New Registration</h3>
            <p>Apply for new plot registration</p>
            <button onClick={() => navigate("/new-registration")}>
              Apply
            </button>
          </div>

         
          <div className="card">
            <h3>My Applications</h3>
            <p>Check registration status</p>
            <button onClick={() => navigate("/my-applications")}>
              View
            </button>
          </div>

        
         
        </div>
      </div>
    </>
  );
}

export default Dashboard;
