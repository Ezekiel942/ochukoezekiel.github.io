<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contact — Ezekiel Ochuko</title>
  <link rel="stylesheet" href="assets/css/style.css" />

  <!-- SVG Favicon -->
  <link rel="icon" href="data:image/svg+xml,
  %3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E
  %3Crect width='100' height='100' rx='20' fill='%236b21a8'/%3E
  %3Ctext x='50' y='65' font-size='50' text-anchor='middle' fill='white' font-family='Poppins'%3EEO%3C/text%3E
  %3C/svg%3E" type="image/svg+xml" />

  <!-- Meta Description for SEO -->
  <meta name="description" content="Contact Ezekiel Ochuko — Junior Backend Developer skilled in Node.js, Express, and MongoDB. Get in touch for collaborations, internships, or backend projects." />
</head>

<body>
  <!-- Navigation -->
  <nav class="nav">
    <div class="container nav-inner">
      <a class="brand" href="index.html">Ezekiel Ochuko</a>
      <ul class="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="projects.html">Portfolio</a></li>
        <li><a href="experience.html">Experience</a></li>
        <li><a href="resume.html">Resume</a></li>
      </ul>
      <button id="theme-toggle" class="theme-toggle">🌙</button>
    </div>
  </nav>

  <!-- Main Contact Section -->
  <main class="container content">
    <section>
      <h2>Contact Me</h2>
      <p>Let’s connect! Whether it’s a project, internship, or collaboration opportunity — I’d love to hear from you.</p>

      <!-- Contact Form -->
      <form id="contact-form">
        <div class="form-group">
          <input type="text" id="name" name="name" required />
          <label for="name">Your Name</label>
        </div>

        <div class="form-group">
          <input type="email" id="email" name="email" required />
          <label for="email">Your Email</label>
        </div>

        <div class="form-group">
          <textarea id="message" name="message" rows="5" required></textarea>
          <label for="message">Your Message</label>
        </div>

        <button type="submit" class="btn">Send Message</button>
      </form>

      <p id="status" class="status"></p>
    </section>
  </main>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <p>© 2025 Ezekiel Ochuko — Remote (GMT+1, Nigeria)</p>
      <p>
        💻 <a href="https://github.com/Ezekiel942" target="_blank">GitHub</a> |
        🔗 <a href="https://linkedin.com/in/ochuko-ezekiel-30125929a" target="_blank">LinkedIn</a>
      </p>
    </div>
  </footer>

  <!-- Scripts -->
  <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>
  <script src="assets/js/main.js"></script>

  <script>
    // Initialize EmailJS (only public key)
    (function() {
      emailjs.init("nk60I8QPzgN1mYwAM");
    })();

    const form = document.getElementById("contact-form");
    const status = document.getElementById("status");

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      status.textContent = "📨 Sending…";

      try {
        await emailjs.send("service_18vthyl", "template_fl8p363", {
          from_name: form.name.value,
          from_email: form.email.value,
          message: form.message.value
        });

        status.textContent = "Message sent successfully!";
        form.reset();
      } catch (err) {
        console.error(err);
        status.textContent = "Message failed. Please try again.";
      }
    });
  </script>
</body>
</html>
