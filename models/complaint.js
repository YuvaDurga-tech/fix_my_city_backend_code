import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema({
  username: String,
  category: String,
  city: String,
  title: String,
  details: String,
  location: {
    address: String,
    lat: Number,
    lng: Number,
  },
  date: { type: String, default: new Date().toISOString().split("T")[0] },
  status: { type: String, default: "Pending" },
  photo: String,
});

export default mongoose.model("Complaint", complaintSchema);
