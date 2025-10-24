// Simple contact form validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const response = document.getElementById("responseMsg");

  if (!name || !email || !message) {
    response.textContent = "⚠ Please fill out all fields.";
    response.style.color = "red";
  } else {
    response.textContent = "✅ Message sent successfully! Thank you.";
    response.style.color = "green";
    document.getElementById("contactForm").reset();
  }
});