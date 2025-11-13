let i = 0;
let quote = [
  "Chasing sunsets and dreams.",
  "Lost in the beauty of the moment.",
  "Creating my own sunshine.",
  "Finding beauty in the chaos.",
  "Living in a pastel paradise.",
  "Sunsets prove that the end can be beautiful.",
  "Embrace your uniqueness.",
  "Don't chase, get chosen.",
  "Inhale confidence, exhale doubt.",
  "Know that you are enough.",
  "Character is power.",
  "Savour the little things in life.",
];
let next = document.getElementById("next");
next.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * quote.length);
  document.getElementById("quotes").textContent = quote[randomIndex];
});
