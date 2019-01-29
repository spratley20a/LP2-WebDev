window.addEventListener("load", main);
function main()
{
  let donation = getElementById("donation");
}
function submit()
{
  let donation = document.getElementById("donation");
  let congrats = document.getElementById("congrats");
  congrats.textContent = donation.value;
}
