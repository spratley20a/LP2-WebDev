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
