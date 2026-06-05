//index
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


function showSkills(category) {
  const skillDetails = document.getElementById("skill-details");

  const skills = {
    programming: `
      <h3>Programming Languages</h3>
      <div class="skill-icons">
        <div class="skill-item"><i class="devicon-php-plain"></i><p>PHP</p></div>
        <div class="skill-item"><i class="devicon-java-plain"></i><p>Java</p></div>
        <div class="skill-item"><i class="devicon-javascript-plain"></i><p>JavaScript</p></div>
        <div class="skill-item"><i class="devicon-python-plain"></i><p>Python</p></div>
      </div>
    `,

    frontend: `
      <h3>Front-End Development</h3>
      <div class="skill-icons">
        <div class="skill-item"><i class="devicon-html5-plain"></i><p>HTML</p></div>
        <div class="skill-item"><i class="devicon-css3-plain"></i><p>CSS</p></div>
        <div class="skill-item"><i class="devicon-javascript-plain"></i><p>JavaScript</p></div>
      </div>
    `,

    backend: `
      <h3>Back-End Development</h3>
      <div class="skill-icons">
        <div class="skill-item"><i class="devicon-php-plain"></i><p>PHP</p></div>
        <div class="skill-item"><i class="devicon-codeigniter-plain"></i><p>CodeIgniter 4</p></div>
      </div>
    `,

    database: `
      <h3>Database</h3>
      <div class="skill-icons">
        <div class="skill-item"><i class="devicon-mysql-plain"></i><p>MySQL</p></div>
      </div>
    `,

    software: `
      <h3>Software Development</h3>
      <div class="skill-icons">
        <div class="skill-item"><i class="devicon-git-plain"></i><p>Git</p></div>
        <div class="skill-item"><i class="devicon-github-original"></i><p>GitHub</p></div>
      </div>
    `
  };

  skillDetails.innerHTML = skills[category];
}

//Projects
function openProjectModal(project) {
  const modal = document.getElementById("projectModal");

  const title = document.getElementById("modalTitle");
  const overview = document.getElementById("modalOverview");
  const tech = document.getElementById("modalTech");
  const features = document.getElementById("modalFeatures");
  const outcome = document.getElementById("modalOutcome");

  const projectData = {
    eatsmart: {
      title: "EatSmart",
      overview:
        "EatSmart is a web-based nutrition and meal planning system designed to help users manage healthy eating habits and receive personalized food recommendations.",
      tech: [
        "PHP", 
        "MySQL", 
        "HTML", 
        "CSS", 
        "JavaScript"
      ],
      features: [
        "User-friendly meal planning interface", 
        "food recommendation section", 
        "database storage, and nutrition-related information management",
      ],
      outcome:
        "This project improved my understanding of database integration, web interface design, and building practical systems that support user health and lifestyle needs."
    },

    bookcorner: {
      title: "BookCorner",
      overview:
        "BookCorner is a web-based online bookstore system that allows users to browse books and manage book-related information through a simple web interface.",
      tech: [
        "PHP", 
        "MySQL", 
        "HTML", 
        "CSS"
      ],
      features: [
        "Book listing", 
        "book details display",
        "user-friendly navigation", 
        "order-related pages",
        "database management",
      ],
      outcome:
        "This project helped me strengthen my skills in web development, database design, and creating structured web applications for online business purposes."
    }
  };

  title.textContent = projectData[project].title;
  overview.textContent = projectData[project].overview;

  tech.innerHTML =
  "<ul><li>" +
  projectData[project].tech.join("</li><li>") +
  "</li></ul>";

features.innerHTML =
  "<ul><li>" +
  projectData[project].features.join("</li><li>") +
  "</li></ul>";

  outcome.textContent = projectData[project].outcome;

  modal.style.display = "flex";
}

function closeProjectModal() {
  document.getElementById("projectModal").style.display = "none";
}



