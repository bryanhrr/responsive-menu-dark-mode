const container = document.querySelector(".container");
const linkItems = document.querySelectorAll(".link-item");
const darkMode = document.querySelector(".dark-mode");
const logo = document.querySelector(".logo svg");

//Container Hover
container.addEventListener("mouseenter", () => {
  container.classList.add("active");
});

//Container Hover Leave
container.addEventListener("mouseleave", () => {
  container.classList.remove("active");
});

//Link-items Clicked
for (let i = 0; i < linkItems.length; i++) {
  if (!linkItems[i].classList.contains("dark-mode")) {
    linkItems[i].addEventListener("click", (e) => {
      linkItems.forEach((linkItem) => {
        linkItem.classList.remove("active");
      });
      linkItems[i].classList.add("active");
    });
  }
}

// Dark Mode Functionality
darkMode.addEventListener("click", function () {
  if (document.body.classList.contains("dark-mode")) {
    darkMode.querySelector("span").textContent = "dark mode";
    darkMode.querySelector("ion-icon").setAttribute("name", "moon-outline");

    logo.style.fill = "#000";
  } else {
    darkMode.querySelector("span").textContent = "light mode";
    darkMode.querySelector("ion-icon").setAttribute("name", "sunny-outline");
    logo.style.fill = "#fff";
  }
  document.body.classList.toggle("dark-mode");
});
