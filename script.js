

document.addEventListener("DOMContentLoaded", () => {
  console.log("script loaded")
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");
  const successBanner = document.querySelector('[data-testid="test-contact-success"]');
  const popup = document.querySelector('[data-testid="test-contact-popup"]');

  if (!form) return;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function showError(inputEl, errorId, text) {
    const errorEl = document.getElementById(errorId);
    if (!errorEl || !inputEl) return false;
    if (!inputEl.getAttribute("aria-describedby")) {
      inputEl.setAttribute("aria-describedby", errorId);
    }
    inputEl.classList.add("error");
    inputEl.setAttribute("aria-invalid", "true");
    if (text) errorEl.textContent = text;
    errorEl.classList.add("show");
    return false;
  }

  function clearError(inputEl, errorId) {
    const errorEl = document.getElementById(errorId);
    if (!inputEl || !errorEl) return;
    inputEl.classList.remove("error");
    inputEl.removeAttribute("aria-invalid");
    errorEl.classList.remove("show");
  }

  function validateName() {
    const v = (nameInput?.value || "").trim();
    return v ? (clearError(nameInput, "name-error"), true)
             : showError(nameInput, "name-error", "Full name is required.");
  }
  function validateEmail() {
    const v = (emailInput?.value || "").trim();
    if (!v) return showError(emailInput, "email-error", "Email is required.");
    return emailRegex.test(v)
      ? (clearError(emailInput, "email-error"), true)
      : showError(emailInput, "email-error", "Please enter a valid email (e.g. name@example.com).");
  }
  function validateSubject() {
    const v = (subjectInput?.value || "").trim();
    return v ? (clearError(subjectInput, "subject-error"), true)
             : showError(subjectInput, "subject-error", "Subject is required.");
  }
  function validateMessage() {
    const v = (messageInput?.value || "").trim();
    if (!v) return showError(messageInput, "message-error", "Message is required.");
    return v.length >= 10
      ? (clearError(messageInput, "message-error"), true)
      : showError(messageInput, "message-error", "Message must be at least 10 characters.");
  }

  // Real-time clearing
  [nameInput, emailInput, subjectInput, messageInput].forEach((el) => {
    el?.addEventListener("input", () => {
      const errId = el.getAttribute("aria-describedby");
      if (errId) clearError(el, errId);
    });
    el?.addEventListener("blur", () => {
      if (el === nameInput) validateName();
      if (el === emailInput) validateEmail();
      if (el === subjectInput) validateSubject();
      if (el === messageInput) validateMessage();
    });
  });

  function showPopup(message, type = "success") {
    if (!popup) return;
    popup.textContent = message;
    popup.className = `popup show ${type}`;
    popup.setAttribute("data-state", type); // helpful for tests
    setTimeout(() => popup.classList.remove("show"), 3000);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const okName = validateName();
    const okEmail = validateEmail();
    const okSubject = validateSubject();
    const okMessage = validateMessage();

    // Clear lingering errors from a previous attempt
    if (okName && okEmail && okSubject && okMessage) {
      document.querySelectorAll(".error-message.show").forEach((el) => el.classList.remove("show"));
      document.querySelectorAll("#contactForm input, #contactForm textarea").forEach((el) => {
        el.classList.remove("error");
        el.removeAttribute("aria-invalid");
      });

      // Success banner (kept for test visibility)
      if (successBanner) {
        successBanner.classList.add("show");
        setTimeout(() => successBanner.classList.remove("show"), 5000);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      // Popup success (UI feedback)
      showPopup("Message sent successfully! I'll get back to you soon.", "success");
      form.reset();
    } else {
      // Popup first failing field message (optional generic)
      showPopup("Please fix the highlighted fields and try again.", "error");
    }
  });
});