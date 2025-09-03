// Hamburger toggle for mobile menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');

hamburger.addEventListener('click', () => {
  if(mobileMenu.style.top === '60px') {
    mobileMenu.style.top = '-100%';
    overlay.style.display = 'none';
    hamburger.classList.remove('fa-times');
    hamburger.classList.add('fa-bars');
  } else {
    mobileMenu.style.top = '60px'; // below navbar
    overlay.style.display = 'block';
    hamburger.classList.remove('fa-bars');
    hamburger.classList.add('fa-times');
  }
});

overlay.addEventListener('click', () => {
  mobileMenu.style.top = '-100%';
  overlay.style.display = 'none';
  hamburger.classList.remove('fa-times');
  hamburger.classList.add('fa-bars');
});



// js for FAQ Rooms section
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const isActive = item.classList.contains('active');

    // Close all
    document.querySelectorAll('.faq-item').forEach(other => other.classList.remove('active'));

    // Toggle clicked
    if(!isActive) item.classList.add('active');

    // Update icon
    document.querySelectorAll('.faq-icon').forEach(icon => icon.textContent = '+');
    if(!isActive) button.querySelector('.faq-icon').textContent = '-';
  });
});