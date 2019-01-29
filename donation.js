window.addEventListener("load", main);
function main()
{
  let donation = getElementById("donation")
}
function submit()
{
  let donation = getElementById("donation")
  if (Number(donation.value) < 10000000000000 and Number(donation.value) > 0) {
    let congrats = document.getElementById("congrats");
    document.getElementById("congrats").innerHTML = "Thank you for donating $" + Number(donation.value);
  }
  else {
    document.getElementById("congrats").innerHTML = "That is not a valid amount";
}
