// Typewriter effect
const typewriter = document.getElementById("typewriter");
const titles = [
  "Strategic Data Analyst",
  "Fraud Detection Specialist",
  "BI Automation Expert"
];
let index = 0;
let char = 0;

function type() {
  if (char < titles[index].length) {
    typewriter.textContent += titles[index].charAt(char);
    char++;
    setTimeout(type, 100);
  } else {
    setTimeout(() => {
      typewriter.textContent = "";
      char = 0;
      index = (index + 1) % titles.length;
      type();
    }, 2000);
  }
}
type();

// Theme toggle
const toggle = document.getElementById
// Load certificates from certificate.json
fetch('assets/certificate/certificate.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('cert-list');
    data.forEach(cert => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.innerHTML = `
        <h3>${cert.title}</h3>
        <a href="assets/certificate/${cert.file}" class="btn" target="_blank">View Certificate</a>
      `;
      container.appendChild(card);
    });

  });
