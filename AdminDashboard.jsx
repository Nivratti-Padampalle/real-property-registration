import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import "./AdminDashboard.css";

function AdminDashboard() {
  const [plots, setPlots] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // 🔥 Protect admin route
  useEffect(() => {
    const isAdminLoggedIn = localStorage.getItem("isAdminLoggedIn");

    if (isAdminLoggedIn !== "true") {
      navigate("/admin");
      return;
    }

    fetchPlots();
  }, []);

  // 🔥 Fetch all plots
  async function fetchPlots() {
    try {
      const res = await fetch("http://localhost:5000/admin/plots");
      const data = await res.json();

      console.log("ADMIN PLOTS:", data); // 🔍 DEBUG

      setPlots(data);
      setLoading(false);
    } catch (err) {
      console.error("FETCH ERROR:", err);
      setLoading(false);
    }
  }

  // 🔥 Update status
  async function updateStatus(id, status) {
    try {
      const res = await fetch(
        `http://localhost:5000/admin/update-status/${id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status }),
        }
      );

      const data = await res.json();
      alert(data.message);

      // refresh list
      fetchPlots();
    } catch (err) {
      alert("Failed to update status");
      console.error("STATUS UPDATE ERROR:", err);
    }
  }

  return (
    <>
      <Navbar />

      <div className="admin-container">
        <h2>Sub-Divisional Officer Panel</h2>

        {loading ? (
          <p>Loading plots...</p>
        ) : plots.length === 0 ? (
          <p>No plots found</p>
        ) : (
          <table className="admin-table">
            <thead>
              <tr>
                <th>Plot No</th>
                <th>Seller</th>
                <th>Buyer</th>
                <th>Village</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {plots.map((plot) => (
                <tr key={plot._id}>
                  <td>{plot.plotNumber}</td>
                  <td>{plot.sellerName}</td>
                  <td>{plot.buyerName}</td>
                  <td>{plot.village}</td>
                  <td>
                    <span className={`status ${plot.status.toLowerCase()}`}>
                      {plot.status}
                    </span>
                  </td>
                  <td>
                    <button
                      className="approve-btn"
                      onClick={() => updateStatus(plot._id, "Approved")}
                      disabled={plot.status !== "Pending"}
                    >
                      Approve
                    </button>

                    <button
                      className="reject-btn"
                      onClick={() => updateStatus(plot._id, "Rejected")}
                      disabled={plot.status !== "Pending"}
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default AdminDashboard;
