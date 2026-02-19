// Oasis Interior Design - simple form demo (Module 6 basics)

function isValidEmail(email) {
  // Very simple check for a beginner project
  return email.includes("@") && email.includes(".");
}

function showMessage(element, message, type) {
  element.textContent = message;
  element.classList.remove("success", "error");

  if (type === "success") {
    element.classList.add("success");
  } else {
    element.classList.add("error");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signupForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const roomSelect = document.getElementById("room");
  const agreeCheck = document.getElementById("agree");
  const messageEl = document.getElementById("formMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // keep user on page

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const room = roomSelect.value;
    const agreed = agreeCheck.checked;

    // Conditionals
    if (email === "" || !isValidEmail(email)) {
      showMessage(messageEl, "Please enter a valid email address (example: you@example.com).", "error");
      emailInput.focus();
      return;
    }

    if (!agreed) {
      showMessage(messageEl, "Please check the box to confirm this is a class project demo form.", "error");
      agreeCheck.focus();
      return;
    }

    // Success message (no data stored)
    const displayName = name !== "" ? name : "there";
    showMessage(
      messageEl,
      `Thanks, ${displayName}! Your starter checklist is ready for your ${room}. (Demo form — nothing is stored.)`,
      "success"
    );

    // Clear form fields (optional)
    form.reset();
  });
});
