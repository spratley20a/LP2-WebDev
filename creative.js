window.addEventListener("load", main);
function main()
{
  let passwordEnter = document.getElementById("passwordEnter");
  let passwordOutput = document.getElementById("passwordOutput");
  let usernameEnter = document.getElementById("usernameEnter");
  let usernameOutput = document.getElementById("usernameOutput");
  passwordOutput.textContent = passwordEnter.value;
  usernameOutput.textContent = usernameEnter.value;
}
function submit()
{
  let passwordEnter = document.getElementById("passwordEnter");
  let passwordOutput = document.getElementById("passwordOutput");
  let usernameEnter = document.getElementById("usernameEnter");
  let usernameOutput = document.getElementById("usernameOutput");
  passwordOutput.textContent = passwordEnter.innerHTML;
  usernameOutput.textContent = usernameEnter.innerText;
}
