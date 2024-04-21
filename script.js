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

// Function to handle logout
function logout() {
  // Perform logout actions here
  window.location.href = "admin.html"; // Example: Redirect to logout page
}

// JavaScript function to handle the search functionality
function searchTable() {
  // Get the input value from the search bar
  var input = document.getElementById("searchInput").value.toLowerCase();
  // Get the table body rows
  var rows = document.getElementById("data").getElementsByTagName("tr");

  // Loop through all table body rows and hide/show those that don't match the search query
  for (var i = 0; i < rows.length; i++) {
    var rowData = rows[i].innerText.toLowerCase();
    if (rowData.includes(input)) {
      rows[i].style.display = "";
    } else {
      rows[i].style.display = "none";
    }
  }
}

// Attach an event listener to trigger the search function when the input value changes
document.getElementById("searchInput").addEventListener("input", searchTable);
