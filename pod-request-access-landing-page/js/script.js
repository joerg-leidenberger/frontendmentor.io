'use strict';

const validateEmail = () => {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  const email = document.getElementById('email').value;
  const validationErrorDiv = document.querySelector('.validation-error');

  if (!emailPattern.test(email)) {
    validationErrorDiv.style.display = 'block';
    return false;
  } else {
    validationErrorDiv.style.display = 'none';
    return true;
  }
};

document.getElementById('email').addEventListener('blur', validateEmail);

document.getElementById('emailForm').addEventListener('submit', (event) => {
  const isValid = validateEmail();
  if (!isValid) {
    event.preventDefault();
  }
});
