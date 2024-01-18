function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  function navigateTo(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
 }
 // Example usage for the arrows
document.getElementById('arrow-experience').addEventListener('click', function() {
  navigateTo('experience');
});

document.getElementById('arrow-projects').addEventListener('click', function() {
  navigateTo('projects');
});
  
document.getElementById('arrow-contact').addEventListener('click', function () {
     navigateTo('contact');
 }); 
 function submitForm() {
  const form = document.getElementById('contactForm');
  form.submit();
}