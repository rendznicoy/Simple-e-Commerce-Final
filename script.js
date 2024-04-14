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

function getFile(e) {}

/* function getImagePreview(event) {
  var image = URL.createObjectURL(event.target.files[0]);
  var imageDiv = document.getElementById("card");
  var newImg = document.createElement("img");
  imageDiv.innerHTML = ""; // Clear the contents of the imageDiv
  newImg.src = image;
  newImg.width = "200";
  newImg.height = "200";
  imageDiv.appendChild(newImg);

  // Change the color of the fa-circle-plus icon to white
  var circlePlusIcon = document.querySelector(".fa-circle-plus");
  circlePlusIcon.classList.add("white-icon");
} */

/* var form = document.getElementById("myForm"),
  imgInput = document.querySelector(".img"),
  file = document.getElementById("imgInput"),
  identification = document.getElementById("identification"),
  name = document.getElementById("name"),
  price = document.getElementById("price"),
  description = document.getElementById("description"),
  seller = document.getElementById("seller"),
  submitBtn = document.querySelector(".submit"),
  userInfo = document.getElementById("data");

let getData = localStorage.getItem("imgInput")
  /? JSON.parse(localStorage.getItem("imgInput"))
  : [];

let isData = false,
  editId;

file.onchange = function () {
  console.log("File selected");
  if (file.files && file.files[0]) {
    if (file.files[0].size < 1000000) {
      var fileReader = new FileReader();
      fileReader.onload = function (e) {
        imgUrl = e.target.result;
        imgInput.src = imgUrl;
      };
      fileReader.readAsDataURL(file.files[0]);
    } else {
      alert("This file is too large!");
    }
  }
}; */
