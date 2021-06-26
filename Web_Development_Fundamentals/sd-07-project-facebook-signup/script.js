const buttonLogin = document.querySelector('#button-login');
const emailInput = document.querySelector('#user-email-phone');
const registerFB = document.querySelector('#facebook-register');
const tagFormCreate = document.querySelector('.user-create');
const inputFormCreate = document.querySelectorAll('.create-form');
let createFormValid = true;
const invalidFieldsP = document.createElement('p');
const rightContentCreateAUser = document.querySelector('#right-content-create');
const mainContent = document.querySelector('.main-content');

buttonLogin.addEventListener('click', function () {
  alert(emailInput.value);
});

function makeRightContentUserCreated() {
  const genderInput = document.querySelector('input[name="gender"]:checked');
  genderInput.classList.add('greetings');
  const greetings = document.querySelectorAll('.greetings');
  const rightContentAfterCreate = document.createElement('div');
  rightContentAfterCreate.classList.add('right-content');
  rightContentAfterCreate.id = 'right-content-create';
  const pToShow = document.createElement('p');
  pToShow.innerText = 'Olá, ';

  for (let index = 0; index < greetings.length; index += 1) {
    if (index > 1) {
      pToShow.innerHTML += '<br>';
    }
    pToShow.innerHTML += ` ${greetings[index].value}`;
    rightContentAfterCreate.appendChild(pToShow);
  }
  mainContent.appendChild(rightContentAfterCreate);
}

function showAllInformations() {
  if (createFormValid === true) {
    rightContentCreateAUser.style.display = 'none';
    makeRightContentUserCreated();
  }
}

function CheckIfAllfieldsAreFilled(e) {
  e.preventDefault();
  for (let index = 0; index < inputFormCreate.length; index += 1) {
    const genderInput = document.querySelector('input[name="gender"]:checked');
    if (inputFormCreate[index].value === '' || genderInput === null) {
      invalidFieldsP.innerText = 'Campos inválidos';
      tagFormCreate.appendChild(invalidFieldsP);
      createFormValid = false;
      break;
    }
  }
  showAllInformations();
}

registerFB.addEventListener('click', CheckIfAllfieldsAreFilled);
