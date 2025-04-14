 // Modal functionality
 const loginBtn = document.getElementById('loginBtn');
 const loginModal = document.getElementById('loginModal');
 const closeModal = document.querySelector('.close-modal');

 loginBtn.addEventListener('click', () => {
     loginModal.style.display = 'flex';
 });

 closeModal.addEventListener('click', () => {
     loginModal.style.display = 'none';
 });

 window.addEventListener('click', (event) => {
     if (event.target === loginModal) {
         loginModal.style.display = 'none';
     }
 });

 // Language switcher
 const languageOptions = document.querySelectorAll('.language-option');
 
 languageOptions.forEach(option => {
     option.addEventListener('click', () => {
         // Remove active class from all options
         languageOptions.forEach(opt => opt.classList.remove('active'));
         
         // Add active class to clicked option
         option.classList.add('active');
         
         // Here you would normally implement language switching logic
         console.log(`Language switched to: ${option.textContent}`);
     });
 });

 // Smooth scrolling for navigation links
 document.querySelectorAll('nav a').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         
         const targetId = this.getAttribute('href');
         if (targetId.startsWith('#')) {
             const targetElement = document.querySelector(targetId);
             if (targetElement) {
                 window.scrollTo({
                     top: targetElement.offsetTop - 100,
                     behavior: 'smooth'
                 });
             }
         }
     });
 });