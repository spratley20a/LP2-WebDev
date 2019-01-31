window.addEventListener("load", main)
function main()
{
let tshirt = document.getElementById("tshirt");
tshirt.addEventListener("mouseover", e =>
  {
  let tpic = document.getElementById("tpic");
  document.getElementById("tpic").innerHTML = "GO UNICORNS!!!";

});
  let clickonme = document.getElementById("clickonme");
  clickonme.addEventListener("click", e =>
  {
   document.getElementById("boy1").innerHTML = "Gregory Jarvis: Director of Physical Activity and Wellness";
   document.getElementById("boy2").innerHTML = "Thomas Michell: Instructor of Physical Activity and Wellness";
   document.getElementById("boy3").innerHTML = "Brian Gonyeau: Instructor of Physical Activity and Wellness";
});
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
