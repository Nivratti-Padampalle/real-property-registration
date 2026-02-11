/*const mongoose = require("mongoose");

const plotSchema = new mongoose.Schema({
  sellerName: String,
  buyerName: String,
  propertyAddress: String,

  plotNumber: String,
  surveyNumber: String,
  area: String,
  village: String,
  taluka: String,
  district: String,

  status: {
    type: String,
    default: "Pending"   // 👈 IMPORTANT
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Plot", plotSchema);
*/
const mongoose = require("mongoose");

const plotSchema = new mongoose.Schema({
  // 🔥 Link plot with logged-in user
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  sellerName: String,
  buyerName: String,
  propertyAddress: String,

  plotNumber: String,
  surveyNumber: String,
  area: String,
  village: String,
  taluka: String,
  district: String,
deedPdf: String,

  status: {
    type: String,
    default: "Pending"   // 👈 IMPORTANT
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Plot", plotSchema);
