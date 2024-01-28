import throttle from 'lodash.throttle';
LOCALSTORAGE_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input');
const textarea = document.querySelector('textarea');

form.addEventListener('input', throttle(onFormData, 500));
form.addEventListener('submit', onSubmitForm);

updateTextForm();

const formData = {};

function onFormData(e) {
  formData[e.target.name] = e.target.value;
  //   formData = { email: input.value, message: textarea.value };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onSubmitForm(e) {
  e.preventDefault();
  console.log(formData);
  localStorage.removeItem(LOCALSTORAGE_KEY);
  e.currentTarget.reset();
}

function updateTextForm() {
  const dataLocalStorage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (dataLocalStorage) {
    input.value = dataLocalStorage.email || '';
    textarea.value = dataLocalStorage.message || '';
  }
}
