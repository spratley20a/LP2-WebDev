window.addEventListener("load", main);
window.addEventListener("load", letter);
function main()
{
  console.log("function main triggered");
  let passwordEnter = document.getElementById("passwordEnter");
  let passwordOutput = document.getElementById("passwordOutput");
  let usernameEnter = document.getElementById("usernameEnter");
  let usernameOutput = document.getElementById("usernameOutput");
  passwordOutput.textContent = passwordEnter.value;
  usernameOutput.textContent = usernameEnter.value;
}
function letter()
{
  console.log("function letter loaded");
  let sizeControl = document.getElementById("sizeControl");
  let sizeValue = document.getElementById("sizeValue");
  let action = document.getElementById("action");
  let p = document.getElementsByTagName("p");
  let stuff = document.getElementsByTagName("stuff");
  action.addEventListener("click", e =>
  {
    console.log("function action has been triggered");
    sizeValue.innerText = sizeControl.value;
    for(let k=0; k < p.length; k++)
    {
      p[k].style.fontSize = sizeControl.value + "px";
      console.log(p[k]);
    }
  });
}
