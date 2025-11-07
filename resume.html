// ====== THEME TOGGLE ======
const toggleTheme = document.getElementById("theme-toggle");

// restore saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  document.body.setAttribute("data-theme", "light");
  if (toggleTheme) toggleTheme.textContent = "☀️";
}

toggleTheme?.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");
  if (currentTheme === "light") {
    document.body.removeAttribute("data-theme");
    toggleTheme.textContent = "🌙";
    localStorage.removeItem("theme");
  } else {
    document.body.setAttribute("data-theme", "light");
    toggleTheme.textContent = "☀️";
    localStorage.setItem("theme", "light");
  }
});

// ====== SMOOTH SCROLL ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(anchor.getAttribute("href"))?.scrollIntoView({ behavior: "smooth" });
  });
});

// ====== STATUS FADE ANIMATION ======
const statusMsg = document.getElementById("status");
if (statusMsg) {
  const observer = new MutationObserver(() => {
    if (statusMsg.textContent.trim() !== "") {
      statusMsg.style.opacity = "1";
      statusMsg.style.transition = "opacity 0.6s ease";
      setTimeout(() => { statusMsg.style.opacity = "0"; }, 3500);
    }
  });
  observer.observe(statusMsg, { childList: true });
}

// ====== FLOATING LABEL EFFECT ======
document.querySelectorAll(".form-group input, .form-group textarea").forEach(field => {
  field.addEventListener("focus", () => field.parentElement.classList.add("active"));
  field.addEventListener("blur", () => { if (!field.value) field.parentElement.classList.remove("active"); });
});

console.log("%cWelcome to Ezekiel Ochuko’s Portfolio 🚀", "color:#7c3aed;font-weight:bold;");
