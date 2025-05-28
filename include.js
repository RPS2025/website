function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  elements.forEach(async el => {
    const file = el.getAttribute('data-include');
    try {
      const res = await fetch(file);
      const html = await res.text();
      el.innerHTML = html;
    } catch (e) {
      el.innerHTML = "Could not load " + file;
    }
  });
}
window.addEventListener('DOMContentLoaded', includeHTML);



document.addEventListener('DOMContentLoaded', function() {
  let slideIndex = 1;
  showSlides(slideIndex);
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    
    // Auto-advance every 5 seconds
    setTimeout(function() {
      showSlides(slideIndex += 1);
    }, 5000);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  // Make dots clickable
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', function() {
      currentSlide(i + 1);
    });
  }
});