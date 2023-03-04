//// Modal
const signUpBtns = document.querySelectorAll('#signUp');
const signInBtns = document.querySelectorAll('#signIn');
const closeBtns = document.querySelectorAll('#close');
const signUpModal = document.querySelector('#signUpModal');
const signInModal = document.querySelector('#signInModal');

// Show Sign Up Modal
signUpBtns[0].addEventListener('click', () => {
  signUpModal.classList.add('show-modal');
});

signUpBtns[1].addEventListener('click', () => {
  signUpModal.classList.add('show-modal');
});

// Hide Sign Up/ Sign In Modals
closeBtns[0].addEventListener('click', () => {
  signUpModal.classList.remove('show-modal');
});

closeBtns[1].addEventListener('click', () => {
  signInModal.classList.remove('show-modal');
});

// Show Sign In Modal
signInBtns[0].addEventListener('click', () => {
  signInModal.classList.add('show-modal');
});

signInBtns[1].addEventListener('click', () => {
  signInModal.classList.add('show-modal');
});

// Hide modal on outside click
window.addEventListener('click', (e) => {
  e.target === signUpModal || signInModal
    ? e.target.classList.remove('show-modal')
    : false;
});
