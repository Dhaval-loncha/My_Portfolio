// for typing effect

var typeData = new Typed(".role", {
  strings: ["Front-End Developer.", "Programmer.", "Web Developer."],
  loop: true,
  typeSpeed: 100,
  backSpeed: 70,
  backDelay: 1000,
});


// toggle menu

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const cross = document.getElementById("cross");
  const headerMenu = document.getElementById("header-menu");

  hamburger.addEventListener("click", function () {
    headerMenu.classList.add("active");
    hamburger.style.display = "none";
    cross.style.display = "block";
  });

  cross.addEventListener("click", function () {
    headerMenu.classList.remove("active");
    hamburger.style.display = "block";
    cross.style.display = "none";
  });
});

// script.js
// displaySkills.js
document.addEventListener('DOMContentLoaded', function() {
  const skillsContent = document.querySelector(".items");

  async function displaySkills() {
      let response = await fetch("json/skill.json");
      let skills = await response.json();

      let numSkills = skills.length;

      // Define the number of columns based on the number of skills
      let numColumns;
      if (numSkills <= 4) {
          numColumns = 2;
      } else if (numSkills <= 6) {
          document.querySelector(".items").style.gap = "2rem";
          document.querySelector(".about-content").style.gap = "10rem";
          numColumns = 3;
      } else if (numSkills > 6) {
          document.querySelector(".items").style.gap = "1rem";
          document.querySelector(".about-content").style.gap = "5rem";
          document.querySelector(".about-content").style.margin = "5rem 7rem 0";
          numColumns = 4;
      }

      // Update the grid layout
      skillsContent.style.gridTemplateColumns = `repeat(${numColumns}, 1fr)`;

      // Create HTML content for skill items and apply border styles
      let html = "";
      for (let i = 0; i < skills.length; i++) {
          html += `<div class="skill-item td-anime">
              <img src="${skills[i].img}" alt="">
              <div class="skill-name">${skills[i].name}</div>
          </div>`;
      }

      // Add the HTML content to the skills container
      skillsContent.innerHTML = html;

      // Apply border styles based on the number of skills
      document.querySelectorAll(".skill-item").forEach(skill => {
          if (numSkills <= 6) {
              skill.classList.remove("no-border");
              skill.classList.add("with-border");
          } else {
              skill.classList.remove("with-border");
              skill.classList.add("no-border");
          }
      });

      // Dispatch a custom event to signal that skills have been loaded
      document.dispatchEvent(new Event('skillsLoaded'));
  }

  displaySkills();
});


// add projects to portfolio

async function displayProject() {
  let response = await fetch("json/project.json");
  let projects = await response.json();
  console.log(projects);

  const projectContent = document.querySelector(".project-content");

  for (let i = 0; i < projects.length; i++) {
      projectContent.innerHTML += `<div class="project-item">
      <div class="p-img pi-down">
        <img src="${projects[i].img}" alt="">
      </div>
      <div class="p-detail fonts pd-up">
        <h2>${projects[i].title}</h2>
        <p>${projects[i].description}</p>
        <div class="p-btn">
          <a href="${projects[i].live}" target="_blank">Live Website</a>
          <a href="${projects[i].code}" target="_blank">Code</a>
        </div>
      </div>
    </div>`;
  }

  document.dispatchEvent(new Event('projectsLoaded'));
}

document.addEventListener('DOMContentLoaded', function() {
  displayProject();
});


// nav-menu color change

document.addEventListener("DOMContentLoaded", function() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".header-menu ul li a");
  
  if (window.location.hash) {
    history.replaceState(null, null, ' ');
  }

  function changeLinkState() {
      let index = sections.length;

      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

      navLinks.forEach((link) => link.classList.remove("active"));
      navLinks[index].classList.add("active");
  }

  changeLinkState();
  window.addEventListener("scroll", changeLinkState);

});

document.querySelector(".up").addEventListener("click",function (){

  if (window.location.hash) {
    history.replaceState(null, null, ' ');
  }
})


// document.addEventListener("DOMContentLoaded", () => {
// 	Check if the current URL hash is not '#home'
// 	if (window.location.hash !== "#home") {
// 		Set the hash to '#home' to navigate to the home section
// 		window.location.hash = "#home";
// 	}

// 	Scroll to the top of the page to avoid any visual glitch
// 	window.scrollTo(0, 0);
// });


