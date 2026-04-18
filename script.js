// Typing effect
const text = ["Web Developer", "Software Developer", "Problem Solver"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  current = text[i];
  document.getElementById("typing").textContent = current.substring(0, j);

  if (!isDeleting && j < current.length) {
    j++;
  } else if (isDeleting && j > 0) {
    j--;
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

// Dark mode
document.getElementById("toggle").onclick = () => {
  document.body.classList.toggle("dark");
};