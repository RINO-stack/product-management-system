// Import database connection
const db = require("../db");

// Add new product
exports.addProduct = (req, res) => {
  const sql = "INSERT INTO products SET ?";

  db.query(sql, req.body, (err) => {
    if (err) return res.status(500).json(err);

    res.json({ message: "Product added successfully" });
  });
};

// Get all products
exports.getProducts = (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) return res.status(500).json(err);

    res.json(result);
  });
};

// Update product by ID
exports.updateProduct = (req, res) => {
  const { name, price, quantity, category } = req.body;

  const sql = `
    UPDATE products
    SET name=?, price=?, quantity=?, category=?
    WHERE id=?
  `;

  db.query(
    sql,
    [name, price, quantity, category, req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({ message: "Product updated successfully" });
    }
  );
};

// Delete product by ID
exports.deleteProduct = (req, res) => {
  db.query(
    "DELETE FROM products WHERE id=?",
    [req.params.id],
    (err) => {
      if (err) return res.status(500).json(err);

      res.json({ message: "Product deleted successfully" });
    }
  );
};

// Generate report (total products & total inventory value)
exports.getReport = (req, res) => {
  const report = {};

  // Get total product count
  db.query("SELECT COUNT(*) AS totalProducts FROM products", (err, result) => {
    if (err) return res.status(500).json(err);

    report.totalProducts = result[0].totalProducts;

    // Get total inventory value
    db.query(
      "SELECT SUM(price * quantity) AS totalValue FROM products",
      (err2, result2) => {
        if (err2) return res.status(500).json(err2);

        report.totalValue = result2[0].totalValue || 0;
        res.json(report);
      }
    );
  });
};
