// Hamburger menu toggle
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark mode toggle functionality
document.getElementById('theme-toggle').addEventListener('click', function() {
  // Toggle dark mode on the body element
  document.body.classList.toggle('dark-mode');
  
  // Toggle button class for styling
  this.classList.toggle('dark-mode');

  // Save the theme preference in localStorage
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});

// Apply the saved theme when the page loads
window.addEventListener('DOMContentLoaded', (event) => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('theme-toggle').classList.add('dark-mode');
  }
});
