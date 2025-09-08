function filterCards() {
  var search = document.getElementById("search").value.toLowerCase();
  var cards = document.querySelectorAll(".card");
  var found = false;

  cards.forEach(function(card) {
    var text = card.innerText.toLowerCase();
    if (text.includes(search)) {
      card.style.display = "";
      found = true;
    } else {
      card.style.display = "none";
    }
  });

  // Show "no results" only if search is not empty
  var cardsContainer = document.getElementById("cards");
  var existingNoResult = document.querySelector(".no-result");

  if (search.trim() !== "" && !found) {
    if (!existingNoResult) {
      var msg = document.createElement("p");
      msg.className = "no-result";
      msg.textContent = "No keywords found.";
      cardsContainer.appendChild(msg);
    }
  } else {
    if (existingNoResult) {
      existingNoResult.remove();
    }
  }
}
