/* JavaScript to toggle password */
const togglePassword = document.querySelector("#toggle");
const password = document.querySelector("#password");
const showImg = document.querySelector("#show");
const hideImg = document.querySelector("#hide");

togglePassword.addEventListener("click", function (e) {
  /* toggle the type attribute */
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  /* toggle image display */
  if (type === "password") {
    hide.style.display = "none";
    show.style.display = "inline-block";
  } else {
    show.style.display = "none";
    hide.style.display = "inline-block";
  }
});
/*Open Side Menu*/
function openMenu() {
  document.getElementById("side-menu").style.display = "block";
  document.getElementById("menu-btn").style.display = "none";
  document.getElementById("menu-close").style.display = "block";
}
/*Close Side Menu*/
function closeMenu() {
  document.getElementById("side-menu").style.display = "none";
  document.getElementById("menu-btn").style.display = "block";
  document.getElementById("menu-close").style.display = "none";
}

// Function to handle logout
function logout() {
  // Perform logout actions here
  window.location.href = "admin.html"; // Example: Redirect to logout page
}
