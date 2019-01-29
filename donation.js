window.addEventListener("load", main)
function main()
{
let tshirt = document.getElementById("tshirt");
tshirt.addEventListener("mouseover", e =>
  {
  let tpic = document.getElementById("tpic");
  document.getElementById("tpic").innerHTML = <img src="./images/NCSSMT.jpeg" alt="T-Shirt" style="Width:30%">
}
function submit()
{
  let donation = document.getElementById("donation")
  if (Number(donation.value) < 10000000000000 && Number(donation.value) > 0) {
    let congrats = document.getElementById("congrats");
    document.getElementById("congrats").innerHTML = "Thank you for donating $" + Number(donation.value);
  }
  else {
    document.getElementById("congrats").innerHTML = "That is not a valid amount";
      }
    }
