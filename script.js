window.addEventListener("load", function() {
  const intro = document.getElementById("intro");
  const mainContent = document.getElementById("main-content");
  const aboutSection = document.querySelector(".about-section");

  
  setTimeout(() => {
    intro.style.opacity = "0";

    setTimeout(() => {
      intro.style.display = "none";
      mainContent.style.display = "block";
      if (aboutSection) {
        aboutSection.style.display = "flex";
      }
    }, 1000); 
    
  }, 3000); 
});
