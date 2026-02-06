const API = "http://localhost:5000/api/products";

async function loadReports() {
  const res = await fetch(API);
  const products = await res.json();

  const totalProducts = products.length;

  const totalValue = products.reduce(
    (sum, p) => sum + Number(p.price),
    0
  );

  const avgPrice = totalProducts
    ? (totalValue / totalProducts).toFixed(2)
    : 0;

  document.getElementById("totalProducts").innerText = totalProducts;
  document.getElementById("totalValue").innerText = `₹${totalValue}`;
  document.getElementById("avgPrice").innerText = `₹${avgPrice}`;
}

loadReports();
