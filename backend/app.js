// Import required modules
const express = require("express");
const cors = require("cors");

// Import route files
const authRoutes = require("./routes/auth.routes");
const productRoutes = require("./routes/product.routes");

// Initialize express app
const app = express();

// Middleware to allow cross-origin requests
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Route middlewares
// All auth and product APIs will start with /api
app.use("/api", authRoutes);
app.use("/api", productRoutes);

// Base route to check if server is running
app.get("/", (req, res) => {
  res.send("Product Management Backend Running");
});

// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});
