// Animação do título
window.addEventListener('load', () => {
  const welcomeText = document.getElementById('welcome-text');
  welcomeText.style.opacity = '1';
});

// Elementos
const toggleCreateAccountBtn = document.getElementById('toggle-create-account');
const toggleLoginFromCreateBtn = document.getElementById('toggle-login-from-create');
const toggleRecoverPasswordBtn = document.getElementById('toggle-recover-password');
const toggleLoginFromRecoverBtn = document.getElementById('toggle-login-from-recover');

const loginForm = document.getElementById('login-form');
const createAccountForm = document.getElementById('create-account-form');
const recoverPasswordForm = document.getElementById('recover-password-form');
const welcomeText = document.getElementById('welcome-text');

// Alternar entre formulários
toggleCreateAccountBtn.addEventListener('click', () => {
  loginForm.classList.add('hidden');
  recoverPasswordForm.classList.add('hidden');
  createAccountForm.classList.remove('hidden');
  welcomeText.textContent = 'Crie sua conta';
});

toggleLoginFromCreateBtn.addEventListener('click', () => {
  createAccountForm.classList.add('hidden');
  recoverPasswordForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
  welcomeText.textContent = 'Bem-vindo!';
});

toggleRecoverPasswordBtn.addEventListener('click', () => {
  loginForm.classList.add('hidden');
  createAccountForm.classList.add('hidden');
  recoverPasswordForm.classList.remove('hidden');
  welcomeText.textContent = 'Recuperar senha';
});

toggleLoginFromRecoverBtn.addEventListener('click', () => {
  recoverPasswordForm.classList.add('hidden');
  createAccountForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
  welcomeText.textContent = 'Bem-vindo!';
});

// Botão login
const loginButton = document.getElementById('login-button');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (loginButton.classList.contains('btn-loading')) return;
  loginButton.classList.add('btn-loading');
  loginButton.disabled = true;

  setTimeout(() => {
    loginButton.classList.remove('btn-loading');
    loginButton.disabled = false;
    alert('Login simulado com sucesso!');
  }, 2500);
});

// Botão criar conta
const createAccountButton = document.getElementById('create-account-button');
createAccountForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (createAccountButton.classList.contains('btn-loading')) return;
  createAccountButton.classList.add('btn-loading');
  createAccountButton.disabled = true;

  setTimeout(() => {
    createAccountButton.classList.remove('btn-loading');
    createAccountButton.disabled = false;
    alert('Conta criada com sucesso!');
    createAccountForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    welcomeText.textContent = 'Bem-vindo!';
  }, 2500);
});

// Botão recuperar senha
const recoverPasswordButton = document.getElementById('recover-password-button');
recoverPasswordForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (recoverPasswordButton.classList.contains('btn-loading')) return;
  recoverPasswordButton.classList.add('btn-loading');
  recoverPasswordButton.disabled = true;

  setTimeout(() => {
    recoverPasswordButton.classList.remove('btn-loading');
    recoverPasswordButton.disabled = false;
    alert('Instruções de recuperação enviadas para seu e-mail!');
    recoverPasswordForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
    welcomeText.textContent = 'Bem-vindo!';
  }, 2500);
});
