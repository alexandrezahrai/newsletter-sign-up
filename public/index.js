const contentSection = document.getElementById("content");
const signupForm = document.getElementById("signup-form");
const emailInput = document.getElementById("email-input");
const requiredMessage = document.getElementById("form-required");
const detailsWrapper = document.getElementById("details");
const successMessage = document.getElementById("details-email");

function validateForm(event) {
  event.preventDefault();

  let emailValue = emailInput.value;

  if (emailValue === "") {
    requiredMessage.classList.remove("hidden");
    emailInput.classList.add("required");
    return false;
  } else {
    signupForm.style.display = "none";
    contentSection.classList.replace("max-w-[950px]", "max-w-[500px]");
    detailsWrapper.style.display = "flex";
    successMessage.textContent = emailValue;
    return true;
  }
}
