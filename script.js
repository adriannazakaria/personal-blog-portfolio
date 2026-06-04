window.addEventListener("scroll", revealSections);

function revealSections() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach((section) => {
    const windowHeight = window.innerHeight;
    const sectionTop = section.getBoundingClientRect().top;
    const revealPoint = 120;

    if (sectionTop < windowHeight - revealPoint) {
      section.classList.add("active");
    }
  });
}

revealSections();
