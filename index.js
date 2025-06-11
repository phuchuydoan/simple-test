// Create a button
const button = document.createElement("button");
button.textContent = "Click me for a gift!";
document.body.appendChild(button);

// Create a gift element (hidden by default)
const gift = document.createElement("div");
gift.textContent = "🎁 You got a gift!";
gift.style.display = "none";
gift.style.marginTop = "20px";
gift.style.fontSize = "2rem";
document.body.appendChild(gift);

// Show the gift when the button is clicked
button.addEventListener("click", () => {
  gift.style.display = "block";
});
