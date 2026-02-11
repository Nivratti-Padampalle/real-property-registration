/*import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthChoice from "./component/AuthChoice";
import Register from "./component/Register";
import MyApplications from "./component/MyApplications";

import Services from "./component/Services";
import About from "./component/About";
import Contact from "./component/Contact";

import Home from "./component/Home";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import PlotForm from "./component/PlotForm";
import AdminDashboard from "./component/AdminDashboard";



function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/my-applications" element={isLoggedIn ? <MyApplications /> : <Login />}
/>

        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/start" element={<AuthChoice />} />
        <Route path="/register" element={<Register />} />

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Login />}
        />

        <Route
          path="/new-registration"
          element={isLoggedIn ? <PlotForm /> : <Login />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
*/import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./component/Home";
import AuthChoice from "./component/AuthChoice";
import Register from "./component/Register";
import Login from "./component/Login";
import Dashboard from "./component/Dashboard";
import PlotForm from "./component/PlotForm";
import MyApplications from "./component/MyApplications";

import Services from "./component/Services";
import About from "./component/About";
import Contact from "./component/Contact";
import Help from "./component/Help";   // 🔥 NEW

import AdminLogin from "./component/AdminLogin";
import AdminDashboard from "./component/AdminDashboard";

function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  const isAdminLoggedIn =
    localStorage.getItem("isAdminLoggedIn") === "true";

  return (
    <BrowserRouter>
      <Routes>
        {/* ============ USER ROUTES ============ */}

        <Route path="/" element={<Home />} />
        <Route path="/start" element={<AuthChoice />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Login />}
        />

        <Route
          path="/new-registration"
          element={isLoggedIn ? <PlotForm /> : <Login />}
        />

        <Route
          path="/my-applications"
          element={isLoggedIn ? <MyApplications /> : <Login />}
        />

        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} /> {/* 🔥 FIXED */}

        {/* ============ ADMIN ROUTES ============ */}

        <Route path="/admin" element={<AdminLogin />} />

        <Route
          path="/admin/dashboard"
          element={
            isAdminLoggedIn ? <AdminDashboard /> : <AdminLogin />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
