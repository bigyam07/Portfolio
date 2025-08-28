const menuButton = document.querySelector(".menu-bar");
let isToggle = false;
menuButton.addEventListener('click', () => {
  if (!isToggle) {
    document.querySelector(".menu-list").style.display = "block";
    isToggle = true;
  } else {
    document.querySelector(".menu-list").style.display = "none";
    isToggle = false;
  }
});
