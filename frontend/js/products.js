const API = "http://localhost:5000/api/products";

const table = document.getElementById("productTable");
const modal = document.getElementById("productModal");

function openAddModal() {
  modal.style.display = "flex";
  document.getElementById("modalTitle").innerText = "Add Product";
  document.getElementById("productId").value = "";
  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
}

function closeModal() {
  modal.style.display = "none";
}

// Delete Modal
let productIdToDelete = null;

function openDeleteModal(productId) {
  productIdToDelete = productId;
  document.getElementById("deleteModal").style.display = "flex";
}

function closeDeleteModal() {
  productIdToDelete = null;
  document.getElementById("deleteModal").style.display = "none";
}


async function fetchProducts() {
  const res = await fetch(API);
  const data = await res.json();

  table.innerHTML = "";
  data.forEach(p => {
    table.innerHTML += `
      <tr>
        <td>${p.name}</td>
        <td>₹${p.price}</td>
        <td>${p.status || "Active"}</td>
        <td>
          <span class="action-btn" onclick="editProduct(${p.id}, '${p.name}', ${p.price})">Edit</span>
          <span class="action-btn" onclick="openDeleteModal(${p.id})">Delete</span>
        </td>
      </tr>
    `;
  });
}

function editProduct(id, name, price) {
  openAddModal();
  document.getElementById("modalTitle").innerText = "Edit Product";
  document.getElementById("productId").value = id;
  document.getElementById("name").value = name;
  document.getElementById("price").value = price;
}

async function saveProduct() {
  const id = document.getElementById("productId").value;
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;

  const method = id ? "PUT" : "POST";
  const url = id ? `${API}/${id}` : API;

  await fetch(url, {
    method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, price })
  });

  closeModal();
  fetchProducts();
}

async function deleteProduct() {
  if (!productIdToDelete) return;

  try {
    await fetch(`${API}/${productIdToDelete}`, {
      method: "DELETE",
    });

    closeDeleteModal();
    fetchProducts();
  } catch (error) {
    console.error("Failed to delete product", error);
  }
}

document.getElementById("confirmDelete").addEventListener("click", deleteProduct);
document.getElementById("cancelDelete").addEventListener("click", closeDeleteModal);


fetchProducts();
