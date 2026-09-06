// ---------------------------------------------------
// Mobile nav toggle
// ---------------------------------------------------
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // close the mobile menu after choosing a link
  nav.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ---------------------------------------------------
// Team carousel (horizontal scroll)
// ---------------------------------------------------
const teamTrack = document.getElementById("teamTrack");
const teamPrev = document.getElementById("teamPrev");
const teamNext = document.getElementById("teamNext");

if (teamTrack && teamPrev && teamNext) {
  const scrollByCard = (direction) => {
    const card = teamTrack.querySelector(".team-card");
    if (!card) return;
    const cardWidth = card.getBoundingClientRect().width * 2;
    const gap = parseFloat(getComputedStyle(teamTrack).gap) || 20;
    teamTrack.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  teamPrev.addEventListener("click", () => scrollByCard(-1));
  teamNext.addEventListener("click", () => scrollByCard(1));
}

// ---------------------------------------------------
// Contact form (front-end only — no backend wired up)
// ---------------------------------------------------
const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = contactForm.querySelector("#name").value.trim();
    formNote.textContent = name
      ? `Thanks, ${name} — we'll write back within a day or two.`
      : `Thanks — we'll write back within a day or two.`;
    contactForm.reset();
  });
}
