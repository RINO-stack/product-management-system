const LOGIN_KEY = "loggedIn";

/* ---------------- LOGIN ---------------- */

const loginForm = document.getElementById("loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (data.success) {
        // Save login session
        localStorage.setItem(LOGIN_KEY, "true");

        // Redirect to dashboard
        window.location.href = "dashboard.html";
      } else {
        document.getElementById("errorMsg").innerText = data.message;
      }
    } catch (error) {
      document.getElementById("errorMsg").innerText = "Server error";
    }
  });
}

/* ---------------- LOGOUT ---------------- */

function logout() {
  localStorage.removeItem(LOGIN_KEY);
  window.location.href = "login.html";
}

/* ---------------- AUTH GUARD ---------------- */

function protectPage() {
  const isLoggedIn = localStorage.getItem(LOGIN_KEY);

  if (!isLoggedIn) {
    window.location.href = "login.html";
  }
}

/* Run protection on dashboard & reports */
if (
  window.location.pathname.includes("dashboard") ||
  window.location.pathname.includes("reports")
) {
  protectPage();
}
