// Import database connection
const db = require("../db");

// Login controller
// Verifies username and password from users table
exports.login = (req, res) => {
  const { username, password } = req.body;

  // SQL query to check user credentials
  const sql = "SELECT * FROM users WHERE username=? AND password=?";

  db.query(sql, [username, password], (err, result) => {
    if (err) {
      return res.status(500).json(err);
    }

    // If user exists
    if (result.length > 0) {
      res.json({
        success: true,
        message: "Login successful"
      });
    } else {
      // Invalid username or password
      res.json({
        success: false,
        message: "Invalid credentials"
      });
    }
  });
};
