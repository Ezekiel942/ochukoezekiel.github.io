// ====== THEME TOGGLE ======
const toggleTheme = document.getElementById("theme-toggle");

toggleTheme?.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");
  if (currentTheme === "light") {
    document.body.removeAttribute("data-theme");
    toggleTheme.textContent = "🌙";
  } else {
    document.body.setAttribute("data-theme", "light");
    toggleTheme.textContent = "☀️";
  }
});

// ====== SMOOTH SCROLL (for navigation) ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))?.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ====== FORM STATUS ANIMATION ======
const statusMsg = document.getElementById("status");

if (statusMsg) {
  const observer = new MutationObserver(() => {
    if (statusMsg.textContent.trim() !== "") {
      statusMsg.style.opacity = "1";
      statusMsg.style.transition = "opacity 0.6s ease";
      setTimeout(() => {
        statusMsg.style.opacity = "0";
      }, 3000);
    }
  });
  observer.observe(statusMsg, { childList: true });
}

// ====== FLOATING LABEL FOCUS ======
document.querySelectorAll(".form-group input, .form-group textarea").forEach(field => {
  field.addEventListener("focus", () => {
    field.parentElement.classList.add("active");
  });
  field.addEventListener("blur", () => {
    if (!field.value) {
      field.parentElement.classList.remove("active");
    }
  });
});

// ====== CONSOLE GREETING ======
console.log("%cWelcome to Ezekiel Ochuko's Portfolio 🚀", "color:#7c3aed;font-weight:bold;");
// ====== THEME TOGGLE ======
const toggleTheme = document.getElementById("theme-toggle");

toggleTheme?.addEventListener("click", () => {
  const currentTheme = document.body.getAttribute("data-theme");
  if (currentTheme === "light") {
    document.body.removeAttribute("data-theme");
    toggleTheme.textContent = "🌙";
  } else {
    document.body.setAttribute("data-theme", "light");
    toggleTheme.textContent = "☀️";
  }
});

// ====== SMOOTH SCROLL (for navigation) ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))?.scrollIntoView({
      behavior: "smooth"
    });
  });
});

// ====== FORM STATUS ANIMATION ======
const statusMsg = document.getElementById("status");

if (statusMsg) {
  const observer = new MutationObserver(() => {
    if (statusMsg.textContent.trim() !== "") {
      statusMsg.style.opacity = "1";
      statusMsg.style.transition = "opacity 0.6s ease";
      setTimeout(() => {
        statusMsg.style.opacity = "0";
      }, 3000);
    }
  });
  observer.observe(statusMsg, { childList: true });
}

// ====== FLOATING LABEL FOCUS ======
document.querySelectorAll(".form-group input, .form-group textarea").forEach(field => {
  field.addEventListener("focus", () => {
    field.parentElement.classList.add("active");
  });
  field.addEventListener("blur", () => {
    if (!field.value) {
      field.parentElement.classList.remove("active");
    }
  });
});

// ====== CONSOLE GREETING ======
console.log("%cWelcome to Ezekiel Ochuko's Portfolio 🚀", "color:#7c3aed;font-weight:bold;");
