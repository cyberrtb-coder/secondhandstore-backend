const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// ✅ Root route
app.get("/", (req, res) => {
  res.send("✅ SecondHandStore Backend is LIVE on Vercel!");
});

// ✅ Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the SecondHandStore API!" });
});

// ✅ Example: Products route
app.get("/api/products", (req, res) => {
  res.json([
    { id: 1, name: "Used Laptop", price: 450 },
    { id: 2, name: "Vintage Camera", price: 120 },
    { id: 3, name: "Old Phone", price: 60 },
  ]);
});

// Start server (for local testing)
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => console.log(`Server running locally on port ${PORT}`));
}

// ✅ Export app for Vercel Serverless Functions
module.exports = app;
