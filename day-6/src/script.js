// Get references
const searchInput = document.getElementById("search");
const cards = document.querySelectorAll(".card");

// Create a "no results" element dynamically
const noResult = document.createElement("p");
noResult.className = "no-result";
noResult.textContent = "No keywords found.";
noResult.style.display = "none";
cards[0].parentElement.appendChild(noResult); // append after cards

function filterCards() {
  const term = searchInput.value.toLowerCase();
  let visibleCount = 0;

  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    if (text.includes(term)) {
      card.style.display = "";
      visibleCount++;
    } else {
      card.style.display = "none";
    }
  });

  // Show/hide no results
  noResult.style.display = visibleCount ? "none" : "block";
}

// Debounce input for performance
let debounceTimeout;
searchInput.addEventListener("input", () => {
  clearTimeout(debounceTimeout);
  debounceTimeout = setTimeout(filterCards, 200);
});
