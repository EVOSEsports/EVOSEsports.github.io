const menuIcon = document.getElementById("menu-icon");
const navList = document.getElementById("nav-list");

menuIcon.addEventListener("click", () => {
  navList.classList.toggle("hidden");
  menuIcon.textContent = menuIcon.textContent === "☰" ? "✖" : "☰";
});

navList.addEventListener("click", () =>{
    navList.classList.toggle("hidden");
});