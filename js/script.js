const form = document.getElementById('form');
const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const email = document.getElementById('email');
const number = document.getElementById('number');
const username = document.getElementById('username');
const guardian = document.getElementById('guardian');
const age = document.getElementById('age');
const dateTime = document.getElementById('dateTime');
const meal = document.getElementById('meal');
const participant = document.getElementById('participant');
const password = document.getElementById('password');
const rePassword = document.getElementById('rePassword');

addEventListener('submit', (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.errorName');

  errorDisplay.innerText = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success');
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.errorName');

  errorDisplay.innerText = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = (email) => {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = () => {
  const fNameValue = fName.value.trim();
  const lNameValue = lName.value.trim();
  const emailValue = email.value.trim();
  const numberValue = number.value.trim();
  const usernameValue = username.value.trim();
  const guardianValue = guardian.value.trim();
  const ageValue = age.value.trim();
  const dateTimeValue = dateTime.value.trim();
  const mealValue = meal.value.trim();
  const participantValue = participant.value.trim();
  const passwordValue = password.value.trim();
  const rePasswordValue = rePassword.value.trim();

  if (fNameValue === '') {
    setError(fName, '* First name is required');
  } else {
    setSuccess(fName);
  }
  if (lNameValue === '') {
    setError(lName, '* Last name is required');
  } else {
    setSuccess(lName);
  }
  if (emailValue === '') {
    setError(email, '* Email is required');
  } else if (!isValidEmail(emailValue)) {
    setError(email, '* Provide a valid email address');
  } else {
    setSuccess(email);
  }
  if (numberValue === '') {
    setError(number, '* Number is required');
  } else {
    setSuccess(number);
  }
  if (usernameValue === '') {
    setError(username, '* Username is required');
  } else {
    setSuccess(username);
  }
  if (guardianValue === '') {
    setError(guardian, '* Guardian name is required');
  } else {
    setSuccess(guardian);
  }
  if (ageValue === '') {
    setError(age, '* Enter your age');
  } else if (ageValue < 18) {
    setError(age, '* You are a minor');
  } else {
    setSuccess(age);
  }
  if (passwordValue === '') {
    setError(password, '* Password is required');
  } else if (passwordValue.length < 8) {
    setError(password, '* Password must be at least 8 characters');
  } else {
    setSuccess(password);
  }
  if (rePasswordValue === '') {
    setError(rePassword, '* Please confirm your password');
  } else if (rePasswordValue !== passwordValue) {
    setError(rePassword, "* Password doesn't match");
  } else {
    setSuccess(rePassword);
  }

  const summary = `
  <h2>Application Summary</h2>
  <p><strong>First Name:</strong> ${fNameValue}</p>
  <p><strong>Last Name:</strong> ${lNameValue}</p>
  <p><strong>Email Address:</strong> ${emailValue}</p>
  <p><strong>Phone Number:</strong> ${numberValue}</p>
  <p><strong>Username:</strong> ${usernameValue}</p>
  <p><strong>Guardian Name:</strong> ${guardianValue}</p>
  <p><strong>Age:</strong> ${ageValue}</p>
  `;
  document.getElementById('summary').innerHTML = summary;
};
