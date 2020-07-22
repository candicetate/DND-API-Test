function showSpells(response) {
  let count = response.data.count;
  let displayCount = document.querySelector("#count");
  displayCount.innerHTML = `${count}`;
  console.log(count);
}

function searchSpells() {
  let query = "spells";
  let apiURL = `https://api.open5e.com/${query}/?format=json`;
  open5e.get(apiURL).then(showSpells);
}
