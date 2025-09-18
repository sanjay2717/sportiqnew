// app.js

// Get data
function getUser() {
  return JSON.parse(localStorage.getItem("sportiqDetails")) || null;
}

// Save data
function saveUser(user) {
  localStorage.setItem("sportiqDetails", JSON.stringify(user));
}

// Require login
function requireLogin() {
  const user = getUser();
  if (!user || !user.username || !user.email) {
    window.location.href = "login.html";
  }
}

// Logout
function logoutUser() {
  localStorage.removeItem("sportiqDetails");
  window.location.href = "login.html";
}
