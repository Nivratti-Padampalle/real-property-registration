/*import { useState } from "react";
import Navbar from "./Navbar";
import "./PlotForm.css";

function PlotForm() {
  const [formData, setFormData] = useState({
    ownerName: "",
    plotNo: "",
    surveyNo: "",
    area: "",
    village: "",
    taluka: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Plot Registration Submitted Successfully!");
    console.log(formData);
  }

  return (
    <>
      <Navbar />

      <div className="plot-form-container">
        <h2>Plot Registration Form</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="ownerName"
            placeholder="Owner Name"
            value={formData.ownerName}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="plotNo"
            placeholder="Plot Number"
            value={formData.plotNo}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="surveyNo"
            placeholder="Survey Number"
            value={formData.surveyNo}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="area"
            placeholder="Area (sq.ft)"
            value={formData.area}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="village"
            placeholder="Village"
            value={formData.village}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="taluka"
            placeholder="Taluka"
            value={formData.taluka}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit Registration</button>
        </form>
      </div>
    </>
  );
}

export default PlotForm;
*/
/*import { useState } from "react";
import Navbar from "./Navbar";
import "./PlotForm.css";

function PlotForm() {
  const [formData, setFormData] = useState({
    sellerName: "",
    buyerName: "",
    propertyAddress: "",
    plotNumber: "",
    surveyNumber: "",
    area: "",
    village: "",
    taluka: "",
    district: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      // 🔥 GET LOGGED-IN USER ID
      const userId = localStorage.getItem("userId");

      if (!userId) {
        alert("User not logged in!");
        return;
      }

      const res = await fetch("http://localhost:5000/plot-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          userId, // 🔥 VERY IMPORTANT
        }),
      });

      const data = await res.json();
      alert(data.message || "Plot Registered Successfully");

      setFormData({
        sellerName: "",
        buyerName: "",
        propertyAddress: "",
        plotNumber: "",
        surveyNumber: "",
        area: "",
        village: "",
        taluka: "",
        district: "",
      });
    } catch (error) {
      alert("Failed to register plot");
    }
  }

  return (
    <>
      <Navbar />

      <div className="plot-form-container">
        <h2>Plot Registration</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="sellerName"
            placeholder="Seller Name"
            value={formData.sellerName}
            onChange={handleChange}
            required
          />

          <input
            name="buyerName"
            placeholder="Buyer Name"
            value={formData.buyerName}
            onChange={handleChange}
            required
          />

          <textarea
            name="propertyAddress"
            placeholder="Complete Property Address"
            value={formData.propertyAddress}
            onChange={handleChange}
            required
          />

          <input
            name="plotNumber"
            placeholder="Plot Number"
            value={formData.plotNumber}
            onChange={handleChange}
            required
          />

          <input
            name="surveyNumber"
            placeholder="Survey Number"
            value={formData.surveyNumber}
            onChange={handleChange}
            required
          />

          <input
            name="area"
            placeholder="Area (sq.ft)"
            value={formData.area}
            onChange={handleChange}
            required
          />

          <input
            name="village"
            placeholder="Village"
            value={formData.village}
            onChange={handleChange}
            required
          />

          <input
            name="taluka"
            placeholder="Taluka"
            value={formData.taluka}
            onChange={handleChange}
            required
          />

          <input
            name="district"
            placeholder="District"
            value={formData.district}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit Plot Registration</button>
        </form>
      </div>
    </>
  );
}

export default PlotForm;
*/
import { useState } from "react";
import Navbar from "./Navbar";
import "./PlotForm.css";

function PlotForm() {
  const [formData, setFormData] = useState({
    sellerName: "",
    buyerName: "",
    propertyAddress: "",
    plotNumber: "",
    surveyNumber: "",
    area: "",
    village: "",
    taluka: "",
    district: "",
  });

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      // 🔥 GET LOGGED-IN USER ID
      const userId = localStorage.getItem("userId");
      console.log("USER ID:", userId); // 🔍 DEBUG

      if (!userId) {
        alert("User not logged in!");
        return;
      }

      const payload = {
        ...formData,
        userId,
      };

      console.log("SENDING DATA:", payload); // 🔍 DEBUG

      const res = await fetch("http://localhost:5000/plot-register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      alert(data.message || "Plot Registered Successfully");

      setFormData({
        sellerName: "",
        buyerName: "",
        propertyAddress: "",
        plotNumber: "",
        surveyNumber: "",
        area: "",
        village: "",
        taluka: "",
        district: "",
      });
    } catch (error) {
      console.error("ERROR:", error);
      alert("Failed to register plot");
    }
  }

  return (
    <>
      <Navbar />

      <div className="plot-form-container">
        <h2>Plot Registration</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="sellerName"
            placeholder="Seller Name"
            value={formData.sellerName}
            onChange={handleChange}
            required
          />

          <input
            name="buyerName"
            placeholder="Buyer Name"
            value={formData.buyerName}
            onChange={handleChange}
            required
          />

          <textarea
            name="propertyAddress"
            placeholder="Complete Property Address"
            value={formData.propertyAddress}
            onChange={handleChange}
            required
          />

          <input
            name="plotNumber"
            placeholder="Plot Number"
            value={formData.plotNumber}
            onChange={handleChange}
            required
          />

          <input
            name="surveyNumber"
            placeholder="Survey Number"
            value={formData.surveyNumber}
            onChange={handleChange}
            required
          />

          <input
            name="area"
            placeholder="Area (sq.ft)"
            value={formData.area}
            onChange={handleChange}
            required
          />

          <input
            name="village"
            placeholder="Village"
            value={formData.village}
            onChange={handleChange}
            required
          />

          <input
            name="taluka"
            placeholder="Taluka"
            value={formData.taluka}
            onChange={handleChange}
            required
          />

          <input
            name="district"
            placeholder="District"
            value={formData.district}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit Plot Registration</button>
        </form>
      </div>
    </>
  );
}

export default PlotForm;

