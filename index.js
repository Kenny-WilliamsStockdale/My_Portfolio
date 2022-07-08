// typed animation section
var typed = new Typed('.typed', {
  strings: ['Student', 'Web Designer', 'Web Developer', 'Coordinator'],
  typeSpeed: 100,
  backSpeed: 50,
  loop: true,
  startDelay: 100,
});

// close mobile navigation input checkbox function on check vanilla js only
function closeNav() {
  document.getElementById('nav-check').checked = false;
}