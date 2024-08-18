function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function showOverlay(src) {
  const overlay = document.getElementById('overlay');
  const overlayImage = document.getElementById('overlayImage');
  overlayImage.src = src;
  overlay.classList.add('show');
  document.body.style.overflow = 'hidden'; // Prevent scrolling
}

function hideOverlay() {
  const overlay = document.getElementById('overlay');
  overlay.classList.remove('show');
  document.body.style.overflow = ''; // Restore scrolling
}

