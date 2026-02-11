const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Plot = require("./models/Plot");
const Contact = require("./models/Contact");

// 🔥 PDF related
const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

// =========================
// MongoDB Connection
// =========================
mongoose
  .connect("mongodb://127.0.0.1:27017/property_registration")
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Error:", err));

// =========================
// USER SCHEMA
// =========================
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, default: "user" },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

// =========================
// REGISTER API
// =========================
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const user = new User({ name, email, password });
    await user.save();

    res.json({ message: "User Registered Successfully", userId: user._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =========================
// USER LOGIN
// =========================
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    res.json({ message: "Login successful", userId: user._id, role: user.role });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =========================
// ADMIN LOGIN
// =========================
app.post("/admin/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await User.findOne({ email, role: "admin" });
    if (!admin || admin.password !== password) {
      return res.status(400).json({ message: "Invalid admin credentials" });
    }

    res.json({ message: "Admin login successful", adminId: admin._id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =========================
// PLOT REGISTER
// =========================
app.post("/plot-register", async (req, res) => {
  try {
    const plot = new Plot({ ...req.body, status: "Pending" });
    await plot.save();
    res.json({ message: "Plot registered successfully (Pending)" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =========================
// USER APPLICATIONS
// =========================
app.get("/my-applications/:userId", async (req, res) => {
  try {
    const plots = await Plot.find({ userId: req.params.userId });
    res.json(plots);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =========================
// ADMIN - ALL PLOTS
// =========================
app.get("/admin/plots", async (req, res) => {
  try {
    const plots = await Plot.find().sort({ createdAt: -1 });
    res.json(plots);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =========================
// ADMIN UPDATE STATUS + PDF GENERATE 🔥
// =========================
app.put("/admin/update-status/:id", async (req, res) => {
  try {
    const { status } = req.body;
    const plot = await Plot.findById(req.params.id);

    if (!plot) return res.status(404).json({ message: "Application not found" });

    if (status && status.toLowerCase() === "approved") {

      const pdfFolder = path.join(__dirname, "pdfs");
      if (!fs.existsSync(pdfFolder)) fs.mkdirSync(pdfFolder);

      const pdfName = `Deed_${plot._id}.pdf`;
      const pdfPath = path.join(pdfFolder, pdfName);

      const doc = new PDFDocument();
      doc.pipe(fs.createWriteStream(pdfPath));

      doc.fontSize(18).text("PROPERTY SALE DEED", { align: "center" });
      doc.moveDown();
      doc.fontSize(12);

      doc.text(`Seller Name: ${plot.sellerName}`);
      doc.text(`Buyer Name: ${plot.buyerName}`);
      doc.text(`Plot Number: ${plot.plotNumber}`);
      doc.text(`Survey Number: ${plot.surveyNumber}`);
      doc.text(`Area: ${plot.area}`);
      doc.text(`Village: ${plot.village}`);
      doc.text(`Taluka: ${plot.taluka}`);
      doc.text(`District: ${plot.district}`);

      doc.moveDown();
      doc.text("Approved By: Sub-Divisional Officer");
      doc.text(`Date: ${new Date().toLocaleDateString()}`);
      doc.end();

      plot.deedPdf = pdfName;
    }

    plot.status = status;
    await plot.save();

    res.json({ message: "Status updated & deed generated" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =========================
// DOWNLOAD DEED PDF ✅ FIXED
// =========================
app.get("/download-deed/:filename", (req, res) => {
  const filePath = path.join(__dirname, "pdfs", req.params.filename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ message: "PDF not found" });
  }

  res.download(filePath);
});

// =========================
// CONTACT FORM API
// =========================
app.post("/contact", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const contact = new Contact({ name, email, subject, message });
    await contact.save();

    res.json({ message: "Message sent successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// =========================
// SERVER START
// =========================
app.listen(5000, () => {
  console.log("🚀 Server running on port 5000");
});
