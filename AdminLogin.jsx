import { useState } from "react";
import "./AdminLogin.css";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleAdminLogin(e) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        // 🔥 IMPORTANT
        localStorage.setItem("isAdminLoggedIn", "true");
        localStorage.setItem("adminId", data.adminId);

        alert("Admin login successful");

        // 🔥 FORCE redirect + re-render
        window.location.href = "/admin/dashboard";
      } else {
        alert(data.message || "Invalid admin credentials");
      }
    } catch (error) {
      alert("Server not responding");
      console.error("ADMIN LOGIN ERROR:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="admin-login-container">
      <h2>Admin Authentication</h2>

      <p className="note">Sub-Divisional Officer Login</p>

      <form onSubmit={handleAdminLogin}>
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login as Admin"}
        </button>
      </form>
    </div>
  );
}

export default AdminLogin;
