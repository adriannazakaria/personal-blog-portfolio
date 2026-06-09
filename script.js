//Scroll reveal animation
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


//Project popup modal
function openProjectModal(project) {
  const modal = document.getElementById("projectModal");

  const title = document.getElementById("modalTitle");
  const purpose = document.getElementById("modalPurpose");
  const features = document.getElementById("modalFeatures");
  const tech = document.getElementById("modalTech");
  const outcome = document.getElementById("modalOutcome");

  const projectData = {
    eatsmart: {
      title: "EatSmart",
      purpose:
        "EatSmart is a web-based nutrition and meal planning system developed to promote healthier eating habits and improve awareness of daily nutritional intake. The system was designed to help users organize their meals, monitor calorie consumption, and access nutrition-related information in amore convenient and structured way. By providing personalized recommendations and health-focused features, EatSmart encourages users to make informed dietary decisions and maintain a balanced lifestyle.",
      features: [
        "Supports role-based access control with dedicated functionalities for Admin, Nutritionist, and User.", 
        "Generates personalized calorie recommendations through BMI calculation and health assessment.", 
        "Maintains a comprehensive food database with detailed nutritional information and calorie values.",
        "Enables users to track health progress and monitor daily calorie consumption through an iterative dashboard.",
      ],
        tech: [
        "CodeIgniter 4",
        "PHP", 
        "MySQL", 
        "HTML", 
        "CSS", 
      ],
      outcome:
        "The system provides users with a more structured approach to managing their dietary habits, enabling them to make informed food choices and monitor their nutritional intake more effectively."
    },

    bookcorner: {
      title: "BookCorner",
      purpose:
        "BookCorner is a web-based platform developed to support students in buying and selling pre-owned academic books at affordable prices. The project aims to reduce the financial burden of purchasing educational material while encouraging the reuse of books within the student community. By providing a centralized marketplace, the system helps students easily access learning resources and connect with other students who wish to exchange or sell books.",
      features: [
        "Supports role-based access control with dediacted functionalities for Admin, Seller, and Buyer.", 
        "Allows users to browse and search book listings based on title, category, or academic subject.",
        "Enable students to create, update, and manage book advertisements for pre-owned academic materials.", 
        "Facilitates communication between buyers and sellers to simplify the book purchasing process.",
      ],
        tech: [
        "CodeIgniter 4",
        "PHP", 
        "MySQL", 
        "HTML", 
        "CSS",
      ],
      outcome:
        "The system provides students with a convenient and accessible platform to buy and sell pre-owned academic books, helping them reduce educational expenses while promoting the reuse of learning materials."
    }
  };

  title.textContent = projectData[project].title;
  purpose.textContent = projectData[project].purpose;

  features.innerHTML = 
    "<ul><li>" + projectData[project].features.join("</li><li>") + "</li></ul>";
  
  tech.innerHTML =
    "<ul><li>" + projectData[project].tech.join("</li><li>") + "</li></ul>";

  outcome.textContent = projectData[project].outcome;

  modal.style.display = "flex";
}

function closeProjectModal() {
  document.getElementById("projectModal").style.display = "none";
}

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}



